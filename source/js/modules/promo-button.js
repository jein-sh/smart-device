let promoButton = document.querySelector('.promo__button');
let catalogTitle = document.querySelector('.catalog h2');

const breakpoint = window.matchMedia('(max-width:767px)');
const breakpointChecker = () => {
  if (breakpoint.matches) {
    promoButton.textContent = 'Бесплатная консультация';
    catalogTitle.textContent = 'Товары и услуги Smart Device';
  } else {
    promoButton.textContent = 'Получить бесплатную консультацию';
    catalogTitle.textContent = 'Smart Device предлагает следующие товары и услуги';
  }
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();
