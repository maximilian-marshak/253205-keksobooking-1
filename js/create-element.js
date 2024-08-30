import {getRooms, getGuests} from './util.js';
import {ROOMS, GUESTS} from './constants.js';

const cardTemplate = document.querySelector('#card').content;

const createTemplate = (object) => {
  const element = cardTemplate.cloneNode(true);

  const {title, adress, price, rooms, guests, checkin, checkout, features} = object.offer;
  const {avatar} = object.author;

  element.querySelector('.popup__title').textContent = title;

  element.querySelector('.popup__text--address').textContent = adress;

  element.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;

  element.querySelector('.popup__text--capacity').textContent = `${rooms} ${getRooms(ROOMS, rooms)} для ${guests} ${getGuests(GUESTS, guests)}`;

  element.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  const featuresList = element.querySelector('.popup__features');
  if (features) {
    const featuresListFragment = document.createDocumentFragment();
    features.forEach((featureItem) => {
      const featuresListItem = element.querySelector(`.popup__feature--${featureItem}`);
      if(featuresListItem) {
        featuresListFragment.append(featuresListItem);
      }
    });
    element.querySelector('.popup__features').innerHTML = '';
    element.querySelector('.popup__features').append(featuresListFragment);
  } else {
    featuresList.remove();
  }

  const popupPhotos = element.querySelector('.popup__photos');
  const popupPhoto = popupPhotos.querySelector('img');
  if (object.offer.photos) {
    for (let i = 0; i < object.offer.photos.length; i++) {
      if(i > 0) {
        const newElement = popupPhoto.cloneNode(true);
        popupPhotos.appendChild(newElement);
      }
      const popupPhotoList = popupPhotos.querySelectorAll('img');
      popupPhotoList[i].src = object.offer.photos[i];
    }
  } else {
    popupPhotos.remove();
  }

  const description = element.querySelector('.popup__description');
  if (object.offer.description) {
    description.textContent = object.offer.description;
  } else {
    description.remove();
  }

  element.querySelector('.popup__avatar').src = avatar;

  return element;
};
export {createTemplate};
