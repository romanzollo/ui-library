import $ from '../core';

$.prototype.addClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        // если у элемента нет classList
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.add(...classNames);
    }

    // чтобы работать с этими элементами дальше по цепочки (chaining)
    return this;
};

$.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        // если у элемента нет classList
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.remove(...classNames);
    }

    // чтобы работать с этими элементами дальше по цепочки (chaining)
    return this;
};

$.prototype.toggleClass = function(classNames) {
    for (let i = 0; i < this.length; i++) {
        // если у элемента нет classList
        if (!this[i].classList) {
            continue;
        }
        
        this[i].classList.toggle(classNames);
    }

    // чтобы работать с этими элементами дальше по цепочки (chaining)
    return this;
};