import {onMapLoad} from './form.js';
import {template} from './create-element.js';

const mainIconSize = [52, 52];
const mainIconAnchor = [26, 52];
const iconSize = [40, 40];
const iconAnchor = [20, 40];
const mapCenter = {
  lat: 35.65283,
  lng: 139.83947
};
const {lat, lng} = mapCenter;

const adressInput = document.querySelector('#address');

const map = L.map('map-canvas').on('load', onMapLoad).setView(mapCenter , 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: mainIconSize,
  iconAnchor: mainIconAnchor
});

const markerMain = L.marker(mapCenter,
  {
    draggable: true,
    icon: mainPinIcon
  });
markerMain.addTo(map);

adressInput.value = `${lat},  ${lng}`;

const onIconMove = (evt) => {
  const iconPosition = evt.target.getLatLng();
  adressInput.value = `${iconPosition.lat.toFixed(5)}, ${iconPosition.lng.toFixed(5)}`;
};

markerMain.on('moveend',onIconMove);

const pinIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: iconSize,
  iconAnchor: iconAnchor
});

const marker = L.marker({
  lat: 35.82569,
  lng: 139.82132
},
{
  icon: pinIcon
});
marker.addTo(map).bindPopup(template);

