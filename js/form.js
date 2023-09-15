const MAX_PRICE = 100000;
const DEFAULT_REALTY_TYPE = 'flat';
const rentMinPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const ROOM_CAPACITY = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const formElement = document.querySelector('.ad-form');
const formHeader = document.querySelector('.ad-form-header');
const formElements = document.querySelectorAll('.ad-form__element');
const formTitle = formElement.querySelector('#title');
const formPrice = formElement.querySelector('#price');
const houseType = formElement.querySelector('#type');
const formRoomNumber = formElement.querySelector('#room_number');
const formRoomCapacity = formElement.querySelector('#capacity');


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
const pristine = new Pristine(formElement,{
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'has-success',
    // class of the parent element where error text element is appended
    errorTextParent: 'ad-form__element',
    // type of element to create for the error text
    errorTextTag: 'div',
    // class of the error text element
    errorTextClass: 'text-help'
});

//Ограничение по длине символов заголовка
function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
};

pristine.addValidator(formTitle,
  validateTitle,
  'От 30 до 100 символов'
);

//Максимальная цена
function validateMaxPrice (value) {
  return parseInt(value) <= MAX_PRICE;

};
function validateMaxPriceMessage () {
  return `Максимальная цена ${MAX_PRICE}`;
};
//Минимальная цена от типа
let currentRealtyType = DEFAULT_REALTY_TYPE;
const validateMinPrice = (value) => rentMinPrice[currentRealtyType] <= value;
const getMinPriceMessage = () => `Цена не может быть меньше ${rentMinPrice[currentRealtyType]}`;
pristine.addValidator(formPrice, validateMinPrice, getMinPriceMessage);


pristine.addValidator(formPrice,
  validateMaxPrice,
  validateMaxPriceMessage
);

//Валидация по количеству комнат
function validateRoom () {
  return ROOM_CAPACITY[formRoomNumber.value].includes(formRoomCapacity.value);
};

const getCapacityErrorMessage = ()=>`Размещение в
${formRoomNumber.value} ${formRoomNumber.value === '1' ?
'комнате' : 'комнатах'} для ${formRoomCapacity.value}
${formRoomCapacity.value === '1' ? 'гостя' : 'гостей'} невозможно`;

pristine.addValidator(formRoomNumber, validateRoom, getCapacityErrorMessage);
pristine.addValidator(formRoomCapacity, validateRoom, getCapacityErrorMessage);

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

