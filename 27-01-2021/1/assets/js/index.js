'use strict';
// Custom Selector
const single = selector => document.querySelector(selector);
const all = selector => document.querySelectorAll(selector);

// Variables
!function () {
    const buttons = all('ul.tab-buttons li');
    const tabItems = all('.tab-items .tab-item');
    const contentHeight = parent => {
        const children = parent.children;
        let height = 0;
        let i = 0;
        while (i < children.length) {
            height += children[i].offsetHeight
            i++;
        }
        height = height + 20 + 'px'
        return height;
    }
    !function () {
        const style = {
            height: contentHeight(tabItems[0])
        }
        Object.assign(tabItems[0].style, style)
    }()
    let i = 0;
    while (i < buttons.length) {
        let index = i;
        buttons[i].addEventListener('click', () => {
            let i = 0;
            while (i < buttons.length) {
                tabItems[i].style.height = 0;
                buttons[i].classList.remove('active')
                i++;
            }
            buttons[index].classList.add('active')
            setTimeout(() => {
                tabItems[index].style.height = contentHeight(tabItems[index])
            }, 400)
        })
        i++;
    }
}()
