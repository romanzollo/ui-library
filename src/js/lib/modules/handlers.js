import $ from '../core';

$.prototype.on = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }

    // чтобы работать с этими элементами дальше по цепочки (chaining)
    return this;
};

$.prototype.off = function(eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }

    // чтобы работать с этими элементами дальше по цепочки (chaining)
    return this;
};

$.prototype.click = function(handler) {
    if (handler) {
        for (let i = 0; i < this.length; i++) {
            this[i].addEventListener('click', handler);
        }
    } else {
        this[i].click();
    }

    // чтобы работать с этими элементами дальше по цепочки (chaining)
    return this;
};