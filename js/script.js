window.addEventListener('DOMContentLoaded', function() {
    'use strict'
    
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function hideTabCurrent(c) {
        for (let i = c; i < tab.length; i++) {
            tab[i].classList.remove('info-header-tab-current');
        }
    }

    tab[0].classList.add('info-header-tab-current');

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    hideTabCurrent(0);
                    tab[i].classList.add('info-header-tab-current');
                    break;
                }
            }
        }
    });
});