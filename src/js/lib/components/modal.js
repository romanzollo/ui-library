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

// передаем аргумент created чтобы удалять МО если оно было созданно динамически через метод createModal
// чтобы избежать создание на странице множества одинаковых МО
$.prototype.modal = function(created) {
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

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach((elem) => {
            $(elem).click(() => {
                $(target).fadeOut(500);
                // проверка на наличие вертикального скролла
                if(window.innerWidth > document.body.clientWidth) {
                    document.body.style.marginRight = `0px`;
                }  
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove();
                }
            });
        });

        $(target).click((e) => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                // проверка на наличие вертикального скролла
                if(window.innerWidth > document.body.clientWidth) {
                    document.body.style.marginRight = `0px`;
                }
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });
    }

};

$('[data-toggle="modal"]').modal();

// метод для динамического формирования МО с помощью JS
$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        // как будет выглядить объект который мы будем передавать как аргумент в createModal
        // text = {title: string, body: string},
        // btns = {count: num, settings: [[text: str, classNames=[str, str, ...], close, callback], [... если передаем еще одну кнопку]]}
        const buttons = [];
        for (let j = 0; j < btns.count; j++) {
            let btn = document.createElement('button');

            btn.classList.add('btn', ...btns.settings[j][1]); // 1 => classNames
            btn.textContent = btns.settings[j][0]; // 0 => text

            if (btns.settings[j][2]) { // 2 => close
                btn.setAttribute('data-close', 'true'); 
            }
            if (btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function') { // 3 => callback
                btn.addEventListener('click', btns.settings[j][3]);
            } 

            // пушим только-что сформированную кнопку в buttons
            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        `;

        // разворачиваем массив кнопок buttons в modal-footer через append и spread
        // так как если всавить эти кнопки через innerHTML callback-функция работать не будет
        modal.querySelector('.modal-footer').append(...buttons);

        document.body.append(modal);
        $(this[i]).modal(true); // created
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};