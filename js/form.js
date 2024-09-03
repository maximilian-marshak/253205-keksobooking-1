import {setDefaultSlider} from './util.js';
import {sendData} from './api.js';
import {showSuccessModal, showErrorModal} from './modals.js';
import {markerMain, MAP_CENTER} from './map.js';

const MAX_PRICE_VALUE = 100000;
const MIN_TITLE_VALUE = 30;
const MAX_TITLE_VALUE = 100;
const TITLE_ERROR_MESSAGE = 'От 30 до 100 символов';
const PRICE_ERROR_MESSAGE = 'Неверная цена';
const ROOMS_ERROR_MESSAGE = 'Неверное количество комнат и гостей';

const addForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const sliderElement = document.querySelector('.ad-form__slider');
const resetButton = document.querySelector('.ad-form__reset');

const pristine = new Pristine(addForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
}, true);

const price = addForm.querySelector('#price');

const validateAdTitle = (value) => value.length >= MIN_TITLE_VALUE && value.length <= MAX_TITLE_VALUE;

const roomNumber = document.querySelector('#room_number');
const capacityGuest = document.querySelector('#capacity');
const roomOption = {
  1 : [1],
  2 : [2, 1],
  3 : [3, 2, 1],
  100 : [0]
};

const onSelectCapacityChange = () => {
  pristine.validate(capacityGuest);
};

const onSelectRoomChange = () => {
  pristine.validate(roomNumber);
};

roomNumber.addEventListener('change', onSelectCapacityChange);

capacityGuest.addEventListener('change', onSelectRoomChange);

const validateGuest = () => roomOption[roomNumber.value].includes(Number(capacityGuest.value));

const validateAdRooms = () => roomOption[roomNumber.value].includes(Number(capacityGuest.value));

const typeHousing = addForm.querySelector('#type');
const typeOption = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000
};

const onInputChange = (evt) => {
  const value = evt.target.value;
  price.min = typeOption[value];
  price.placeholder = typeOption[value];
  price.value = typeOption[value];

  setDefaultSlider(sliderElement, typeOption[value], MAX_PRICE_VALUE);
};

typeHousing.addEventListener('change', onInputChange);

const timeIn = addForm.querySelector('#timein');
const timeOut = addForm.querySelector('#timeout');

const onInputTimeInChange = (evt) => {
  timeOut.value = evt.target.value;
};

const onInputTimeOutChange = (evt) => {
  timeIn.value = evt.target.value;
};

timeIn.addEventListener('change', onInputTimeInChange);
timeOut.addEventListener('change', onInputTimeOutChange);

const validateAdPrice = (value) => {
  const minPrice = typeOption[typeHousing.value];
  return minPrice <= value && value < MAX_PRICE_VALUE;
};

pristine.addValidator(addForm.querySelector('#title'), validateAdTitle, TITLE_ERROR_MESSAGE);
pristine.addValidator(price, validateAdPrice, PRICE_ERROR_MESSAGE);
pristine.addValidator(roomNumber, validateAdRooms, ROOMS_ERROR_MESSAGE);
pristine.addValidator(capacityGuest, validateGuest, ROOMS_ERROR_MESSAGE);

const onSubmitSend = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    const formData = new FormData(evt.target);
    sendData(showSuccessModal, showErrorModal, formData);
  }
};

addForm.addEventListener('submit', onSubmitSend);

resetButton.addEventListener('click', () => {
  setDefaultSlider(sliderElement, 0, MAX_PRICE_VALUE);
  mapFilters.reset();
  markerMain.setLatLng(MAP_CENTER);
});

export {MAX_PRICE_VALUE, price, addForm, mapFilters, sliderElement};
