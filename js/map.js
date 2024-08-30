import {toggleFormStatus} from './util.js';
import {createTemplate} from './create-element.js';
import {getData} from './api.js';

const MAIN_ICON_SIZE = [52, 52];
const MAIN_ICON_ANCHOR = [26, 52];
const MAIN_ICON_URL = '/img/main-pin.svg';
const ICON_SIZE = [40, 40];
const ICON_ANCHOR = [20, 40];
const ICON_URL = '/img/pin.svg';
const MAP_CENTER = {
  lat: 35.65283,
  lng: 139.83947
};
const MAP_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const adressInput = document.querySelector('#address');

const onMapLoad = () => {
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  toggleFormStatus(document.querySelector('.map__filters'), 'select');
  toggleFormStatus(document.querySelector('.map__filters'), 'fieldset');
  toggleFormStatus(document.querySelector('.ad-form'), 'fieldset');
};

const map = L.map('map-canvas').on('load', onMapLoad).setView(MAP_CENTER , 10);

L.tileLayer(MAP_LAYER).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: MAIN_ICON_URL,
  iconSize: MAIN_ICON_SIZE,
  iconAnchor: MAIN_ICON_ANCHOR
});

const markerMain = L.marker(MAP_CENTER,
  {
    draggable: true,
    icon: mainPinIcon
  });
markerMain.addTo(map);

adressInput.value = `${MAP_CENTER.lat},  ${MAP_CENTER.lng}`;

const onIconMove = (evt) => {
  const iconPosition = evt.target.getLatLng();
  adressInput.value = `${iconPosition.lat.toFixed(5)}, ${iconPosition.lng.toFixed(5)}`;
};

markerMain.on('moveend',onIconMove);

const pinIcon = L.icon({
  iconUrl: ICON_URL,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR
});

const addMarkers = (element) => {
  const {location: {lat, lng}} = element;
  const marker = L.marker({
    lat,
    lng
  },
  {
    pinIcon
  });
  marker.addTo(map).bindPopup(createTemplate(element));
};

getData().then((data) => {
  data.forEach(addMarkers);
});

export {markerMain, MAP_CENTER, adressInput};
