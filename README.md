# UI-Library
Библиотека для создания и быстрой и удобной работы с HTML-элементами.

## Основные возможности

- Работа с CSS классами, инлайн-стилями и обработчиками событий;
- Работа с элементами DOM;
- Создание анимаций (fadeIn, fadeOut и т.д);
- Работа с атрибутами елемента;
- Создание готовых компонентов на странице (кнопок) с использованием стилей;
- Создание Dropdown Menu;
- Динамическое создание модальных окон и их компонентов;
- Создание табов (вкладок);
- Создание аккордеона;
- Создание слайдера;
- Работа с сервером;


<hr>

### Работа с CSS классами, стилями и обработчиками событий
``.addClass(class, class, ...)``
добавление одного или нескольких классов элементу

``.removeClass(class, class, ...)``
удаление классов

``.toggleClass(class, class, ...)`` тоглим класс

``.on(eventName, callback)``
назначение обработчика события, где *eventName* - само событие а *callback* - колбэк-функция при вызове этого события

``.off(eventName, callback)``
удаление обработчика события, где *eventName* - само событие а *callback* - колбэк-функция при вызове этого события

``.click(handler)``
вызов обработчика события 'click' на элементе, где *handler* - колбэк-функция обработчика

*Пример кода:*
```javascript
$('button').on('click', function() {
    $('.active').addClass('show').removeClass('active);
});

$('.active').on('click', sayHello);
$('.active').off('click', sayHello);
$('.active').click(sayHello);

function sayHello() {
    console.log('Hello');
}
```

<hr>

### Работа с элементами DOM
<br>

``.show()``
показать HTML-элемент

``.show()``
скрыть HTML-элемент

``.toggle()``
скрыть или показать HTML-элемент

``.html('string')``
добавление контента в HTML-элемент

``.eq(number)``
получение только нужного элемента по индексу

``.index()``
получение индекса элемента у одного общего родителя

``.find(selector)``
поиск элементов по селектору из списка уже отобранных элементов

``.closest(selector)``
поиск близжайших элементов по селектору

``.siblings()``
получаем все соседние элементы не включая сам элемент

*Пример кода:*
```javascript
$('.someElement').hide().show().toggleClass('active');

$('button').on('click', function() {
    $('div').eq(1).toggleClass('active');
});

console.log($('.item').index());

$('div').eq(2).find('.someClass');
$('.someClass').closest('.findMe');
$('button').html('Hello');
```
<hr>

### Создание анимаций
<br>

``.fadeIn(duration, display = 'block', final)``
показ элементов через анимацию на странице, где *duration* - продолжительность анимации (единственный обязательный аргумент), *display* - инлайн стиль и *final* - колбэк-функция

``.fadeOut(duration, final)``
скрытие элементов через анимацию на странице, где *duration* - продолжительность анимации (единственный обязательный аргумент), *final* - колбэк-функция

``.fadeToggle(duration, display = 'block', final)``
скрытие и показ элементов через анимацию на странице, где *duration* - продолжительность анимации (единственный обязательный аргумент), *display* - инлайн стиль и *final* - колбэк-функция

*Пример кода:*
```javascript
$('button').on('click', function() {
    $('.modal').fadeIn(500);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});
```
<hr>

### Работа с атрибутами елемента
``.addAttribute(attributeName, attributeValue)``
добавление атрибута элементу, где *attributeName* - имя атрибута, *attributeValue* - значение атрибута

``.removeAttribute(attributeName)``
удаление атрибута у элемента, где *attributeName* - имя удаляемого атрибута

*Пример кода:*
```javascript
    $('button').addAttribute('data-go', '1');
    $('button').removeAttribute('id');
```
<hr>

### Создание Dropdown Menu
<br>

*Пример кода:* <br> <br>
HTML-разметка
```html
    <!-- Dropdown menu -->
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Action #2</a>
                <a href="#" class="dropdown-item">Action #3</a>
            </div>
        </div>
```
JavaScript
```javascript
    $('.dropdown-toggle').dropdown();
```

*Пример динамического формирования Dropdown-Menu с помощью встроенных в UI-Library методов*
```javascript
    $('.wrap').html(
    `
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Action #2</a>
                <a href="#" class="dropdown-item">Action #3</a>
            </div>
        </div> 
    `
);

$('.dropdown-toggle').dropdown();
```

<hr>

### Динамическое создание модальных окон и их компонентов
<br>

*Пример кода:* <br> <br>
HTML-разметка
```html
    <!-- Card -->
        <div class="goods d-flex f-space-around">
            <div class="card">
                <img class="card-img" src="https://someUrl.jpg" alt="photo">
                <div class="card-body">
                    <div class="card-title">Card title</div>
                    <p class="card-text">Text...</p>
                    <a href="#" id="trigger" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Link to</a>
                </div>
            </div>
            <div class="card">
                <img class="card-img" src="https://someUrl.jpg" alt="photo">
                <div class="card-body">
                    <div class="card-title">Card title #2</div>
                    <p class="card-text">Text #2...</p>
                    <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">Link to</a>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal" id="exampleModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            Modal title
                        </div>
                    </div>
                    <div class="modal-body">
                        Modal text...
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger" data-close>Close</button>
                        <button class="btn btn-success">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="exampleModal2">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            Modal title #2
                        </div>
                    </div>
                    <div class="modal-body">
                        Modal text #2...
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger" data-close>Close</button>
                        <button class="btn btn-success">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
```

JavaScript
```javascript
    $('[data-toggle="modal"]').modal();
```

*Пример динамического формирования модального окна с помощью встроенных в UI-Library методов*
```javascript
    // в метод createModal передаем обьект с настройками
    $('#trigger').click(() => $('#trigger').createModal({
        text: {
            title: 'Modal title',
            body: 'Modal text...'
        },
        btns: {
            count: 3, // колличество кнопок
            settings: [
                [
                    'Close', // текст кнопки
                    ['btn-danger', 'mr-10'], // добавляем классы стилей
                    true // добавляем data-close для возможности дальнейшего закрытия модального окна
                ],
                [
                    'Save changes', // текст кнопки
                    ['btn-success'], // добавляем классы стилей
                    false,
                    // колбэк-функция для дальнейших действий
                    () => {
                        alert('Данные сохранены');
                    }
                ],
                [
                    'Another button', // текст кнопки
                    ['btn-warning', 'ml-10'], // добавляем классы стилей
                    false,
                    // колбэк-функция для дальнейших действий
                    () => { 
                        alert('Hi everyone');
                    }
                ]
            ]
        }
    }));
```

<hr>

### Создание табов (вкладок)
<br>

*Пример кода:* <br> <br>
HTML-разметка
```html
    <!-- Tabs -->
    <div class="tab mt-20 block-center">
        <div class="tab-panel" data-tabpanel>
            <div class="tab-item tab-item--active">Content 1</div>
            <div class="tab-item">Content 2</div>
            <div class="tab-item">Content 3</div>
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton2">Dropdown button</button>
                <div class="dropdown-menu" data-toggle-id="dropdownMenuButton2">
                    <a href="#" class="dropdown-item">Action</a>
                    <a href="#" class="dropdown-item">Action #2</a>
                    <a href="#" class="dropdown-item">Action #3</a>
                </div>
            </div>
        </div>
        <div class="tab-content tab-content--active">
            Content 1
        </div>
        <div class="tab-content">
            Content 2
        </div>
        <div class="tab-content">
            Content 3
        </div>
    </div>
```
JavaScript
```javascript
    $('[data-tabpanel] .tab-item').tab();
```

<hr>

### Создание аккордеона
<br>

*Пример кода:* <br><br>
HTML-разметка
```html
    <!-- Accordion -->
    <div class="accordion mt-20 block-center">
            <div class="accordion-head">
                <span>First element</span>
            </div>
            <div class="accordion-content">
                <div class="accordion-inner">
                    First content
                </div>
            </div>
            <div class="accordion-head">
                <span>Second element</span>
            </div>
            <div class="accordion-content">
                <div class="accordion-inner">
                    Second content
                </div>
            </div>
        </div>
```
JavaScript
```javascript
    $('.accordion-head').accordion();
```

<hr>

### Создание слайдера
<br>

*Пример кода:* <br><br>
HTML-разметка
```html
    <!-- Slider -->
    <div class="carousel" id="carousel-example" data-autoplay="true">
            <ol class="carousel-indicators">
                <li class="active"  data-slide-to="0"></li>
                <li data-slide-to="1"></li>
                <li data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-slides">
                    <div class="carousel-item">
                        <img src="https://someUrl.jpg" alt="photo">
                    </div>
                    <div class="carousel-item">
                        <img src="https://someUrl.jpg" alt="photo">
                    </div>
                    <div class="carousel-item">
                        <img src="https://someUrl.jpg" alt="photo">
                    </div>
                </div>
            </div>
            <a href="#" class="carousel-prev" data-slide="prev">
                <span class="carousel-prev-icon">&lt;</span>
            </a>
            <a href="#" class="carousel-next" data-slide="next">
                <span class="carousel-next-icon">&gt;</span>
            </a>
        </div>
```
*Примечание*: <br>
для запуска автоматического переключения слайдов добавить в главный контейнер слайдера (carousel) дата-атрибут *data-autoplay="true"*. <br>
 при наведении мыши на слайдер автоматическое перключение слайдов ставится на паузу.

JavaScript
```javascript
    $('.carousel').carousel();
```

*Пример динамического формирования слайдера-карусели с помощью встроенных в UI-Library методов*
<br><br>
HTML-разметка
```html
    <!-- Slider -->
    <div class="carousel-test"></div>
    <div class="carousel-test2"></div>
```
JavaScript

```javascript
    // в метод createCarousel передаем обьект с настройками
    $('.carousel-test').createCarousel({
        id: 'carousel-test', // имя id-атрибута который будет добавлен слайдеру
        autoplay: true, // автопереключение слайдов
        autoplaySpeed: 2000, // скорость переключения в м/сек
        slides: [
            'https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg',
            'https://images4.fanpop.com/image/photos/18200000/Lovely-nature-god-the-creator-18227423-600-400.jpg',
            'https://pixlr.com/images/best-photo-editor-cover.jpg',
            'https://i.imgur.com/samhXoH.jpeg'
        ]
    });

    $('.carousel-test2').createCarousel({
        id: 'carousel-test2', // имя id-атрибута который будет добавлен слайдеру
        slides: [
            'https://wallpapers.com/images/high/bridge-at-night-picture-8blc5g4nsuqr96u2.webp',
            'https://wallpapers.com/images/high/snowy-road-picture-3wlwtu7z46vbv7k2.webp',
            'https://wallpapers.com/images/high/overlooking-lake-picture-zbdd0pxnxdmrjw01.webp',
        ]
    });
```

<hr>

### Работа с сервером
<br>

``.get(url, dataTypeAnswer = 'json')``
выполнение get-запроса на сервер, где *url* - url адрес и *dataTypeAnswer* - в какой тип данных преобразовывать ответ с сервера

``.post(url, data, dataTypeAnswer = 'text')``
выполнение get-запроса на сервер, где *url* - url адрес, *data* - отправляемые данные и *dataTypeAnswer* - в какой тип данных преобразовывать ответ с сервера

*Пример кода:* <br>
```javascript
    $().get('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
```