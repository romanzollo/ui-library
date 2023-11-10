import $ from '../core';

$.prototype.dropdown = function() {
    // если dropdown`ов несколько поэтому перебираем все элементы через for
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id'); // или можно $(this[i]) + созданный метод для работы с атрибутом из attributes.js
        $(this[i]).click(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

// чтобы метод заработал
$('.dropdown-toggle').dropdown();