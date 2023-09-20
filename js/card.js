import {similarAdvert} from './data.js';
const offerType = {
  bungalow: 'Бунгало',
  flat : 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец',
};

const cardWindow = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');



const similarCards = similarAdvert();

similarCards.forEach((card) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  cardElement.querySelector('.popup__text--price').firstChild.data = card.offer.price;
  cardElement.querySelector('.popup__type').textContent = offerType[card.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;

  const featuresContainer = cardElement.querySelector('.popup__features');
  if (card.offer.features.length) {
    const featureNodes = featuresContainer.querySelectorAll('.popup__feature');

    featureNodes.forEach((featureNode) => {
      const isExistFeature = card.offer.features.some((feature) => featureNode.classList.contains(`popup__feature--${feature}`));
      if (!isExistFeature) {
        featureNode.remove();
      }
    });
  } else {
    featuresContainer.innerHTML = '';
  }

  cardElement.querySelector('.popup__description').textContent = card.offer.description;

  const photoContainer = cardElement.querySelector('.popup__photos');
  const newPhoto = photoContainer.querySelector('.popup__photo');
  const photosFragment = document.createDocumentFragment();
  photoContainer.innerHTML = '';
  if (card.offer.photos.length) {
    card.offer.photos.forEach((photo) => {
      const newPhotoTemplate = newPhoto.cloneNode(true);
      newPhotoTemplate.src = photo;
      photosFragment.appendChild(newPhotoTemplate);
    });
    photoContainer.appendChild(photosFragment);
  };


  card.offer.photos.forEach((element) => {


  });
  cardWindow.appendChild(cardElement);
});




