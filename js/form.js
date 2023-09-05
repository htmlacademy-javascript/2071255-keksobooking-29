const formElement = document.querySelector('.ad-form');
const formHeader = document.querySelector('.ad-form-header');
const formElements = document.querySelectorAll('.ad-form__element');

const disableForm = () => {
  formElement.classList.add('ad-form--disabled');
  formHeader.setAttribute('disabled', '');

  formElements.forEach((formElement) => {
    formElement.setAttribute('disabled', '');
  });

};
disableForm();
export {disableForm};
