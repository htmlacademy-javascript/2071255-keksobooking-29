import {getRandomInteger, getRandomArrayElement, getRandomArray,
  getRandomArrayLength} from './util.js';

  const TYPE_HOUSE=['bungalow', 'flat', 'hotel', 'house', 'palace',];

const PHOTOS =['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const FEATURES =['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const CHECKIN=['12:00', '13:00', '14:00'];
const CHECKOUT=['12:00', '13:00', '14:00'];
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

//Функция для генерации числа без округления
const getRandomIntegerFraction = (a, b) => {
  const lower = Math.min(a, b);
const upper = Math.max(a, b);
const result = Math.random() * (upper - lower + 1) + lower;
return result.toFixed(5);
};
//Функция для генерации ссылки с 0 перед однозначным числом
const generateAuthor = () => {
let a = getRandomInteger(1, 99)
a = String(a)
a = a.padStart(2, '0');
return {
  avatar: `img/avatars/user${a}.png`,
}
};
//Функция для генерации массива объектов
const createAdvert = () => ({
  author: {
    avatar: generateAuthor(),
  },
  offer: {
    title: 'Насладитесь вашим путешествием!',
    address: `${getRandomIntegerFraction(LAT_MIN, LAT_MAX)}, ${getRandomIntegerFraction(LNG_MIN, LNG_MAX)}`,
    price: getRandomInteger(1000, 50000),
    type: getRandomArrayElement(TYPE_HOUSE),
    rooms: getRandomInteger(1, 5),
    guests: getRandomInteger(1, 7),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getRandomArray(FEATURES),
    description: 'У нас самое лучшее обслуживание',
    photos: getRandomArrayLength(PHOTOS),
  },
  location: {
    lat: getRandomIntegerFraction(LAT_MIN, LAT_MAX),
    lng: getRandomIntegerFraction(LNG_MIN, LNG_MAX),
  }


});
//Генерация заданного количества объектов
const similarAdvert = () => Array.from({length: 2}, createAdvert);


export {similarAdvert};
