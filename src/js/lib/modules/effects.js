import $ from '../core';

$.prototype.animateOverTime = function(duration, callbackFn, finalFn) {
    let timeStart;

    // техническая функция которая запускается через определенный интервал времени
    function _animateOverTime(time) {
        // сработает только при первом запуске
        if (!timeStart) {
            timeStart = time;
        }

        // переменная для отслеживания прогресса
        let timeElapsed = time - timeStart;

        // изменение парраметров на страницы
        // как только timeElapsed / duration будет больше 1 - Math.min будет всегда брать второй аргумент (1)
        let complection = Math.min(timeElapsed / duration, 1) // timeElapsed / duration - изменение opacity

        callbackFn(complection);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof finalFn === 'function') {
                finalFn();
            }
        }
    }

    // возвращаем _animateOverTime чтобы в дальнейшем её использовать
    return _animateOverTime;
};

$.prototype.fadeIn = function(duration, display = 'block', final) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display;

        // техническая функция, обязательно должна быть стрелочная чтобы контекст был на том объекте с которым мы работаем
        // complection перейдет  из _animateOverTime
        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const animate = this.animateOverTime(duration, _fadeIn, final); // duration единственный обязательный алгоритм
        requestAnimationFrame(animate);
    }

    return this;
};

$.prototype.fadeOut = function(duration, final) {
    for (let i = 0; i < this.length; i++) {
        // техническая функция, обязательно должна быть стрелочная чтобы контекст был на том объекте с которым мы работаем
        // complection перейдет  из _animateOverTime
        const _fadeOut = (complection) => {
            // задаем уровень прозрачности (opacity)
            this[i].style.opacity = 1 - complection;
            // прозрачность достигла максимального значения
            if (complection === 1) {
                this[i].style.display = 'none';
            }

            
        };

        const animate = this.animateOverTime(duration, _fadeOut, final); // duration единственный обязательный алгоритм
        requestAnimationFrame(animate);
    }

    return this;
};