import {createAuthor} from './create-author.js';
import {createOffer} from './create-offer.js';
import {createLocation} from './create-location.js';

const SIMILIAR_ANNOUNCE_COUNT = 10;

const createAddress = () => ({
  author: createAuthor(),
  offer: createOffer(),
  location: createLocation()
});

const similiarAnnounce = () => {
  const similiarAnnounceArray = Array.from({length: SIMILIAR_ANNOUNCE_COUNT}, createAddress);
  return similiarAnnounceArray;
};

export {similiarAnnounce, createAddress};
