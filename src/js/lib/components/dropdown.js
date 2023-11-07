import $ from '../core';

$.prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id'); // или можно $(this[i]) + созданный метод для работы с атрибутом из attributes.js
        $(this[i]).click(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

$('.dropdown-toggle').dropdown();