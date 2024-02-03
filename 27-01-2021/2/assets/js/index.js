'use strict';
// Custom Selector
const single = selector => document.querySelector(selector);
const all = selector => document.querySelectorAll(selector);

!function () {
    // Variables
    const buttons = all('ul.tab-buttons li');
    const tabItems = all('.tab-items .tab-item');

    buttons.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            tabItems.forEach((tab, i) => {
                buttons[i].classList.remove('active')
                tab.querySelectorAll('*').forEach(el => {
                    el.style.opacity = 0;
                })
                setTimeout(() => {
                    tab.style.transform = 'scaleX(0)'
                }, 150)
                setTimeout(() => {
                    tab.style.display = 'none'
                }, 450)
            })
            btn.classList.add('active')
            setTimeout(() => {
                tabItems[i].style.display = 'block';
            }, 450)
            setTimeout(() => {
                tabItems[i].style.transform = 'scaleX(1)'
            }, 500)
            setTimeout(() => {
                tabItems[i].querySelectorAll('*').forEach(el => {
                    el.style.opacity = 1;
                })
            }, 900)
        })
    })


}()
