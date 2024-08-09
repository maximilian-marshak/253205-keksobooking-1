import {createOffer} from './create-offer.js';
import {createAuthor} from './create-author.js';

const OFFER = createOffer();
const AUTHOR = createAuthor();
const OFFER_PHOTOS = OFFER.photos;

const cardTemplate = document.querySelector('#card').content;

const createTemplate = (offer, author, photos) => {
  const element = cardTemplate.cloneNode(true);

  const popupTitle = element.querySelector('.popup__title');
  popupTitle.textContent = offer.title;

  const popupAdress = element.querySelector('.popup__text--address');
  popupAdress.textContent = offer.adress;

  const popupPrice = element.querySelector('.popup__text--price');
  popupPrice.textContent = `${offer.price} ₽/ночь`;

  const popupCapacity = element.querySelector('.popup__text--capacity');
  popupCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

  const popupTime = element.querySelector('.popup__text--time');
  popupTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const popupFeatures = element.querySelector('.popup__features');
  const popupFeatureList = popupFeatures.querySelectorAll('.popup__feature');
  popupFeatureList.forEach((popupFeatureListItem)=> {
    const isNecessary = offer.features.some((feature) => popupFeatureListItem.classList.contains(`popup__feature--${feature}`));

    if (isNecessary) {
      popupFeatureListItem.textContent = offer.features;
    } else {
      popupFeatureListItem.remove();
    }
  });

  const popupPhotos = element.querySelector('.popup__photos');
  const popupPhoto = popupPhotos.querySelector('img');

  for (let i = 0; i < photos.length; i++) {
    if(i > 0) {
      const newElement = popupPhoto.cloneNode(true);
      popupPhotos.appendChild(newElement);
    }
    const popupPhotoList = popupPhotos.querySelectorAll('img');
    popupPhotoList[i].src = photos[i];
  }

  const popupDescription = element.querySelector('.popup__description');
  popupDescription.textContent = offer.description;

  const popupAvatar = element.querySelector('.popup__avatar');
  popupAvatar.src = author.avatar;

  return element;
};

const template = createTemplate(OFFER, AUTHOR, OFFER_PHOTOS);

export {template};
