const open = document.body.querySelector('.open');
const close = document.body.querySelector('.close');
const modalWindow = document.body.querySelector('.modal_window');

open.addEventListener('click', () => {
    modalWindow.classList.add('open_window');
});

close.addEventListener('click', () => {
    modalWindow.classList.remove('open_window');
});



