const buttonDefault = document.querySelector('.promo__button--default');
const buttonMobile = document.querySelector('.promo__button--mobile');

const form = document.querySelector('.feedback-wrapper');

const scrollBlock = () => {
  function handleButtonClick() {
    form.scrollIntoView({block: "center", behavior: "smooth"});
  }
  buttonDefault.addEventListener('click', handleButtonClick),
  buttonMobile.addEventListener('click', handleButtonClick);
}

export {scrollBlock};
