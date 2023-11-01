// здесь создаем главный метод init

const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {}
    }

    // если selector html element
    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        // чтобы дальнейший код не выполнялся
        return this;
    }

    // this чтобы в объекте был prototype
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;

    return this;
};

// главная магия
$.prototype.init.prototype = $.prototype;

// сохраняем $ в глобальный объект window
window.$ = $;

export default $;