import $ from '../core';

// вычисляем размер бокового скролла
$.prototype.calcScroll = function() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
};

$.prototype.modal = function() {
    let scroll = this.calcScroll();
    
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');

        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            // проверка на наличие вертикального скролла
            if(window.innerWidth > document.body.clientWidth) {
                document.body.style.marginRight = `${scroll}px`;
            } 
            // запретить скролл страницы если открыто МО
            document.body.style.overflow = 'hidden';
        });
    }

    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach((elem) => {
        $(elem).click(() => {
            $('.modal').fadeOut(500);
            // проверка на наличие вертикального скролла
            if(window.innerWidth > document.body.clientWidth) {
                document.body.style.marginRight = `0px`;
            }  
            document.body.style.overflow = '';
        });
    });

    $('.modal').click((e) => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            // проверка на наличие вертикального скролла
            if(window.innerWidth > document.body.clientWidth) {
                document.body.style.marginRight = `0px`;
            }
            document.body.style.overflow = '';
        }
    });
};

$('[data-toggle="modal"]').modal();