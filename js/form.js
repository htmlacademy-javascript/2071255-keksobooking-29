const formElement = document.querySelector('.ad-form');
const formHeader = document.querySelector('.ad-form-header');
const formElements = document.querySelectorAll('.ad-form__element');

/*Функция для деактивации формы */
const disableForm = () => {
  formElement.classList.add('ad-form--disabled');
  formHeader.setAttribute('disabled', '');

  formElements.forEach((formElement) => {
    formElement.setAttribute('disabled', '');
  });

};
disableForm();
export {disableForm};
/*Функция для активации формы */
const enableForm = () => {
  formElement.classList.remove('ad-form--disabled');
  formHeader.removeAttribute('disabled');

  formElements.forEach((formElement) => {
    formElement.removeAttribute('disabled');
  });
};
enableForm();
export {enableForm};

/**Валидация формы с помощью Prestine */
const pristine = new Pristine(formElement);

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
