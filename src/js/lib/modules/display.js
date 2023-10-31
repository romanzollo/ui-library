import $ from '../core';

$.prototype.show = function() {
    for (let i = 0; i < this.length; i++) {
        // если у элемента нет свойства style
        if (!this[i].style) {
            continue;
        }

        this[i].style.display = '';
    }

    // чтобы работать с этими элементами дальше по цепочки (chaining)
    return this;
};

$.prototype.hide = function() {
    for (let i = 0; i < this.length; i++) {
        // если у элемента нет свойства style
        if (!this[i].style) {
            continue;
        }

        this[i].style.display = 'none';
    }
    
    // чтобы работать с этими элементами дальше по цепочки (chaining)
    return this;
};

$.prototype.toggle = function() {
    for (let i = 0; i < this.length; i++) {
        // если у элемента нет свойства style
        if (!this[i].style) {
            continue;
        }

        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }    
    }

    // чтобы работать с этими элементами дальше по цепочки (chaining)
    return this;
};

