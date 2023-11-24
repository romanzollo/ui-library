import $ from '../core';

$.prototype.carousel = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        // dots
        const dots = this[i].querySelectorAll('.carousel-indicators li');
        const prev = $(document.querySelector(`[data-slide="prev"]`));
        const next = $(document.querySelector(`[data-slide="next"]`));

        slidesField.style.width = 100 * slides.length + '%';
        // устанавливаем ширину для каждого слайда
        slides.forEach((slide) => {
            slide.style.width = width;
        });

        let offset = 0;
        // для отслеживания индекса слайда который мы видим
        let slideIndex = 0;
        
        function slideToNext() {
            // replace(/\D/g, '') - убираем 'px', '%' и т.д. оставляем только числа
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }
    
            slidesField.style.transform = `translateX(-${offset}px)`;
    
            // отслеживаем индекс активного слайда
            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
    
            // устанавливаем класс active dots`ам в соответствии с индексом(slideIndex) показываемого слайда
            dots.forEach((dot) => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        }

        function slideToPrev() {
            // replace(/\D/g, '') - убираем 'px', '%' и т.д. оставляем только числа
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }
            
            slidesField.style.transform = `translateX(-${offset}px)`;
    
            // отслеживаем индекс активного слайда
            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
    
            // устанавливаем класс active dots`ам в соответствии с индексом(slideIndex) показываемого слайда
            dots.forEach((dot) => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active'); 
        }

        // функция для установки интервала переключения слайдера 
        function autoplaySlides() {
            let timer = setInterval(() => {
        	    slideToNext();
    	    }, 2000);
            return timer;
        }

        prev.click((e) => {
            e.preventDefault();
            e.stopPropagation();

            slideToPrev();
        });
    

        next.click((e) => {
            e.preventDefault();
            e.stopPropagation();
    
            slideToNext();
        }); 

        // автоматическое переключение слайдов
        if (this[i].getAttribute('data-autoplay')) {
            let timer = autoplaySlides();

            if (this[i].addEventListener('mouseenter', () => {
                clearInterval(timer);
            }));

            if (this[i].addEventListener('mouseleave', () => {
                timer = autoplaySlides();
            }));
        }

        // вешаем обработчик событий на dots для переключения слайдов
        // находим нужный слайдер по id
        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click((e) => {
            // ориентируемся по дата атрибуту data-slide-to
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;

            // устанавливаем класс active dots`ам в соответствии с индексом(slideIndex) показываемого слайда
            dots.forEach((dot) => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

    }
};

$('.carousel').carousel();

// метод для динамического формирования слайдера-карусели с помощью JS
$.prototype.createCarousel = function({id, slides, autoplay = false, autoplaySpeed = 2000} = {}) {
    for (let i = 0; i < this.length; i++) {
        const carousel = document.createElement('div');
        carousel.classList.add('carousel');
        carousel.setAttribute('id', id);

        if (autoplay) {
            carousel.setAttribute('data-autoplay', 'true');
        }

        const indicators = [];
        const slideItems = [];
        for (let j = 0; j < slides.length; j++) {
            let indicator = document.createElement('li');
            let slide = document.createElement('div');

            indicator.setAttribute('data-slide-to', j);
            slide.classList.add('carousel-item')
            slide.innerHTML = `
                <img src="${slides[j]}" alt="photo">
            `;

            if (j == 0) {
               indicator.classList.add('active');
            }

            indicators.push(indicator);
            slideItems.push(slide);
        }

        carousel.innerHTML = `
            <ol class="carousel-indicators">

            </ol>
            <div class="carousel-inner">
                <div class="carousel-slides">
                    
                </div>
            </div>
            <a href="#" class="carousel-prev" data-slide="prev">
                <span class="carousel-prev-icon">&lt;</span>
            </a>
            <a href="#" class="carousel-next" data-slide="next">
                <span class="carousel-next-icon">&gt;</span>
            </a>
        `;

        // разворачиваем массив индикаторов indicators в carousel-indicators через append и spread
        carousel.querySelector('.carousel-indicators').append(...indicators);
        carousel.querySelector('.carousel-slides').append(...slideItems);

        this[i].append(carousel);  



        // теперь функционал для уже сформированного слайдера
        const width = window.getComputedStyle(document.querySelector(`#${id} .carousel-inner`)).width;
        const slidesItems = document.querySelectorAll(`#${id} .carousel-item`);
        const slidesField = document.querySelector(`#${id} .carousel-slides`);
        // dots
        const dots = document.querySelectorAll(`#${id} .carousel-indicators li`);
        const prev = $(document.querySelector(`#${id} [data-slide="prev"]`));
        const next = $(document.querySelector(`#${id} [data-slide="next"]`));
    
        slidesField.style.width = 100 * slidesItems.length + '%';
        // устанавливаем ширину для каждого слайда
        slidesItems.forEach((slide) => {
            slide.style.width = width;
        });
    
        let offset = 0;
        // для отслеживания индекса слайда который мы видим
        let slideIndex = 0;

        function slideToNext() {
            // replace(/\D/g, '') - убираем 'px', '%' и т.д. оставляем только числа
            if (offset == (+width.replace(/\D/g, '') * (slidesItems.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }
    
            slidesField.style.transform = `translateX(-${offset}px)`;
    
            // отслеживаем индекс активного слайда
            if (slideIndex == slidesItems.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
    
            // устанавливаем класс active dots`ам в соответствии с индексом(slideIndex) показываемого слайда
            dots.forEach((dot) => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        }

        function slideToPrev() {
            // replace(/\D/g, '') - убираем 'px', '%' и т.д. оставляем только числа
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slidesItems.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }
            
            slidesField.style.transform = `translateX(-${offset}px)`;
    
            // отслеживаем индекс активного слайда
            if (slideIndex == 0) {
                slideIndex = slidesItems.length - 1;
            } else {
                slideIndex--;
            }
    
            // устанавливаем класс active dots`ам в соответствии с индексом(slideIndex) показываемого слайда
            dots.forEach((dot) => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active'); 
        }

        // функция для установки интервала переключения слайдера 
        function autoplaySlides() {
            let timer = setInterval(() => {
        	    slideToNext();
    	    }, autoplaySpeed);
            return timer;
        }

        prev.click((e) => {
            e.preventDefault();
            e.stopPropagation();

            slideToPrev();
        });
    

        next.click((e) => {
            e.preventDefault();
            e.stopPropagation();
    
            slideToNext();
        }); 

        // автоматическое переключение слайдов
        if (autoplay) {
            let timer = autoplaySlides();

            if (document.querySelector(`#${id}`).addEventListener('mouseenter', () => {
                clearInterval(timer);
            }));

            if (document.querySelector(`#${id}`).addEventListener('mouseleave', () => {
                timer = autoplaySlides();
            }));
        }
    
        // вешаем обработчик событий на dots для переключения слайдов
        // находим нужный слайдер по id
        const sliderId = id;
        $(`#${sliderId} .carousel-indicators li`).click((e) => {
            e.stopPropagation();
            // ориентируемся по дата атрибуту data-slide-to
            const slideTo = e.target.getAttribute('data-slide-to');
    
            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;
    
            slidesField.style.transform = `translateX(-${offset}px)`;
    
            // устанавливаем класс active dots`ам в соответствии с индексом(slideIndex) показываемого слайда
            dots.forEach((dot) => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
    } 

};