const button = document.querySelector('.about__button');
const aboutDescriptionThird = document.querySelector('.about__description--third');
const descriptionText = document.querySelectorAll('.about__description--mobile');
const mobileBreakpoint = window.matchMedia(`(max-width:767px)`);


const showDescription = () => {
  button.addEventListener('click', () => {
    descriptionText.forEach((e) => {
      if (e.classList.contains('hidden')) {
        e.classList.remove('hidden');
        button.textContent = 'Свернуть';
        if (mobileBreakpoint.matches) {
          aboutDescriptionThird.style.display = 'block';
        }
      } else {
        e.classList.add('hidden');
        button.textContent = 'Подробнее';
        if (mobileBreakpoint.matches) {
          aboutDescriptionThird.style.display = 'none';
        }
      }
    });
  });
};

export {showDescription};
