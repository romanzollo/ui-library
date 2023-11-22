import $ from '../core';

$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
      
    return this;
};

// получить только нужный элемент по индексу (i)
$.prototype.eq = function(i) {
    const elem = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = elem;
    this.length = 1;
      
    return this;
};

// получение индекса элемента у одного общего родителя
$.prototype.index = function() {
    const parent = this[0].parentNode;
    // превращаем HTMLCollecting (parent.children) в массив
    const childs = [...parent.children]; // чтобы можно было воспользоватся методом массива (например findIndex)
    
    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

// поиск элементов по селектору из списка уже отобранных элементов
$.prototype.find = function(selector) {
    let numberOfItems = 0;
    let counter = 0;

    // делаем не глубокую копию обьекта this
    const copyObjThis = Object.assign({}, this);

    for (let i = 0; i < copyObjThis.length; i++) {
        const arr = copyObjThis[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    // убираем оставшиеся элементы (хвостик) из объекта this которые не были отобраны
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

$.prototype.closest = function(selector) {
    // сколько элементов мы нашли с помощью closest
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        // чтобы не было в дальнейшем ошибки
        if (this[i].closest(selector)) {
            this[i] = this[i].closest(selector);
            counter++;
        } else {
           this[i] = ''; 
           counter++;
        }
    }

    // убираем оставшиеся элементы (хвостик) из объекта this которые не были отобраны
    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

// получаем все соседние элементы не включая сам элемент
// можно в дальнейшем использовать для табов
$.prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;

    // делаем не глубокую копию обьекта this
    const copyObjThis = Object.assign({}, this);

    for (let i = 0; i < copyObjThis.length; i++) {
        const arr = copyObjThis[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            // пропускаем элемент от которого мы находим общего родителя
            if (copyObjThis[i] === arr[j]) {
                continue;
            }
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    // убираем оставшиеся элементы (хвостик) из объекта this которые не были отобраны
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};