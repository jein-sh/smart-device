let body = document.querySelector('.page-body');
let buttonHeader = document.querySelector('.header__button');
let modal = document.querySelector('.modal');
let modalClose = modal.querySelector('.modal__close');
let inputName = modal.querySelector('#modal-name');
let overlay = document.querySelector('.overlay');

buttonHeader.addEventListener('click', function () {
  modal.classList.add('modal--show');
  overlay.classList.add('overlay--show');
  body.classList.add('scroll-lock');
  inputName.focus();
});

modalClose.addEventListener('click', function () {
  modal.classList.remove('modal--show');
  overlay.classList.remove('overlay--show');
  body.classList.remove('scroll-lock');
});

overlay.addEventListener('click', function () {
  modal.classList.remove('modal--show');
  overlay.classList.remove('overlay--show');
  body.classList.remove('scroll-lock');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (modal.classList.contains('modal--show')) {
      evt.preventDefault();
      modal.classList.remove('modal--show');
      overlay.classList.remove('overlay--show');
      body.classList.remove('scroll-lock');
    }
  }
});
