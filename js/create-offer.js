import {getRandomInteger, getRandomFloatNumber, getRandomArrayElement, getRandomShuffleArray} from './util.js';
import {TYPES, CHECK_TIME, FEATURES, MIN_LATITUDE, MAX_LATITUDE, MIN_LONGITUDE, MAX_LONGITUDE} from './constants.js';

const TITLES = [
  'Апартаменты просторные для большой семьи',
  'Апартаменты 2-х уровневая студия с кондиционером',
  'Апартаменты восточные',
  'Просторные апартаменты около метро Маяковская',
  'Апартаменты Пулково рядом с аэропортом',
  'Элегантная квартира с джакузи рядом с центром и метро',
  'Квартира студия с парковкой',
  'Светлая студия рядом с Сенной площадью',
  'Уютные апартаменты в историческом центре города',
  'Двухкомнатная квартира с террасой в стиле Сканди'
];

const DESCRIPTIONS = [
  'Двухкомнатная квартира с просторной террасой в стиле сканди идеально подходит для пар, а также семей с детьми. Находится в сердце васильевского острова, недалёко от севкабеля и в 5 мин. ходьбы от музея современного искусства "эрарта" и набережной Невы.',
  'Квартира с просторной террасой в стиле сканди идеально подходит для пар',
  'Светлая и просторная однокомнатная квартира рядом с аэропортом Пулково.',
  'Высокий этаж, красивый вид на ночной город и закат с балкона.',
  'Предоставляем полный пакет отчетных документов для командированных без доплаты.',
  'Для маленьких гостей предоставляем детскую кроватку-манеж по запросу.',
  'Рядом с аэропортом Пулково, ближайшие метро - Московская/Звездная.',
  'В пешей доступности парк городов-героев - отличное место для летних и зимних прогулок.',
  'Возможно раннее заселение и поздний выезд (по согласованию)',
  'Мы подготовили все необходимое для комфортного проживания'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const MIN_SYMBOL = 1;
const MAX_SYMBOL = 10;
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

const createOffer = () => ({
  title: getRandomArrayElement(TITLES),
  adress: `${getRandomFloatNumber(MIN_LATITUDE, MAX_LATITUDE)},${getRandomFloatNumber(MIN_LONGITUDE, MAX_LONGITUDE)}`,
  price: getRandomInteger(MIN_PRICE, MAX_PRICE),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomInteger(MIN_SYMBOL, MAX_SYMBOL),
  guests: getRandomInteger(MIN_SYMBOL, MAX_SYMBOL),
  checkin: getRandomArrayElement(CHECK_TIME),
  checkout: getRandomArrayElement(CHECK_TIME),
  features: getRandomShuffleArray(FEATURES),
  description: getRandomArrayElement(DESCRIPTIONS),
  photos: getRandomShuffleArray(PHOTOS),
});

export {createOffer, MIN_LATITUDE, MIN_LONGITUDE, MAX_LATITUDE, MAX_LONGITUDE};
