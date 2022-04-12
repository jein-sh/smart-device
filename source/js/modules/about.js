const breakpoint = window.matchMedia('(max-width:767px)');
let aboutButton = document.querySelector('.about__button');
let aboutMobile = document.querySelector('.about__mobile-hidden');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    aboutMobile.classList.add('about__hidden');
  } else {
    aboutMobile.classList.remove('about__hidden');
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();

aboutButton.addEventListener('click', function () {
  let about = document.querySelectorAll('.about__hidden');

  about.forEach((el) => {
    el.classList.toggle('about__hidden--show');

    if (el.classList.contains('about__hidden--show')) {
      aboutButton.textContent = 'Скрыть';
    } else {
      aboutButton.textContent = 'Подробнее';
    }
  });
});
