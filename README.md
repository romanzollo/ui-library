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

#### Работа с CSS классами, стилями и обработчиками событий
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

#### Работа с элементами DOM
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

#### Создание анимаций
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

#### Работа с атрибутами елемента
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


#### Создание Dropdown-Menu
*Пример кода:*
<br>HTML-разметка

#### Создание Dropdown Menu
*Пример кода:* <br> HTML-разметка
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

