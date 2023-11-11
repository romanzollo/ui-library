import $ from './lib/lib';

// $('#first').on('click', () => {
//     $('div').eq(1).fadeIn(800);
// });

// $('[data-count="second"]').on('click', () => {
//     $('div').eq(2).fadeToggle(800);
// });

// $('button').eq(2).on('click', () => {
//     $('.w-500').fadeToggle(800);
// });


// $('.wrap').html(
//     `
//         <div class="dropdown">
//             <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//             <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//                 <a href="#" class="dropdown-item">Action</a>
//                 <a href="#" class="dropdown-item">Action #2</a>
//                 <a href="#" class="dropdown-item">Action #3</a>
//             </div>
//         </div> 
//     `
// );

// // чтобы метод заработал после формирования html
// $('.dropdown-toggle').dropdown();

// function getScroll(){
//         setInterval(function(){
//                 let eh = $('html')[0].scrollHeight;
//                 let wh = $(window).height();
//                 if (eh>wh) {
//                         $('body').addClass('scroll')
//                 } else {
//                         $('body').removeClass('scroll')
//                 }
//         },10);
// };


$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Modal body, lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque placeat qui suscipit!'
    },
    btns: {
        count: 3, // колличество кнопок
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another button',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Hi everyone');
                }
            ]
        ]
    }
}));