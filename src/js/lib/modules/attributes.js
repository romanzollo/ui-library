import $ from '../core';

$.prototype.addAttribute = function(attributeName, attributeValue) {
    if (!attributeName || !attributeValue) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attributeName, attributeValue);
    }

    // чтобы работать с этими элементами дальше по цепочки (chaining)
    return this;
};

$.prototype.removeAttribute = function(attributeName) {
    if (!attributeName) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(attributeName);
    }

    // чтобы работать с этими элементами дальше по цепочки (chaining)
    return this;
};