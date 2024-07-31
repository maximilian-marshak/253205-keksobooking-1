import {getRandomFloatNumber} from './util.js';
import {MIN_LATITUDE, MIN_LONGITUDE, MAX_LATITUDE, MAX_LONGITUDE} from './create-offer.js';

const createLocation = () => ({
  lat: getRandomFloatNumber(MIN_LATITUDE, MAX_LATITUDE),
  lng: getRandomFloatNumber(MIN_LONGITUDE, MAX_LONGITUDE)
});

export {createLocation};
