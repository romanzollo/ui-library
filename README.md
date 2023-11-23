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