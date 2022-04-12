let accords = document.querySelectorAll('.footer__accord');
let toggles = document.querySelectorAll('.footer__toggle');

accords.forEach((accord) => {
  accord.classList.remove('footer__accord--nojs');
});

toggles.forEach((toggle) => {

  toggle.addEventListener('click', function () {

    let openAccords = document.querySelectorAll('.footer__accord--open');
    let currentAccord = this.parentNode;

    openAccords.forEach((el) => {
      if (el !== currentAccord) {
        el.classList.remove('footer__accord--open');
        el.classList.add('footer__accord--close');
      }
    });

    if (currentAccord.classList.contains('footer__accord--open')) {
      currentAccord.classList.remove('footer__accord--open');
      currentAccord.classList.add('footer__accord--close');

    } else {
      currentAccord.classList.remove('footer__accord--close');
      currentAccord.classList.add('footer__accord--open');
    }
  });
});
