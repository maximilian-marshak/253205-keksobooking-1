const minSymbol = 1;
const maxSymbol = 10;
const minPrice = 10000;
const maxPrice = 50000;
const similiarAnnounceCount = 10;
const minLatitude = 35.65000;
const maxLatitude = 35.70000;
const minLongitude = 139.70000;
const maxLongitude = 139.80000;

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

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomFloatNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower) + lower;
  return Number(result).toFixed(5);
};
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomShuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice(getRandomInteger(0, array.length - 1));
};

const createCounter = () => {
  let count = 1;
  return function() {
    return `${count++}`;
  };
};

const getCounter = createCounter();

const createAuthor = () => ({
  avatar: `img/avatars/user${getCounter().padStart(2,0)}.png`
});

const createOffer = () => ({
  title: getRandomArrayElement(TITLES),
  adress: `${getRandomFloatNumber(minLatitude, maxLatitude)},${getRandomFloatNumber(minLongitude, maxLongitude)}`,
  price: getRandomInteger(minPrice, maxPrice),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomInteger(minSymbol, maxSymbol),
  guests: getRandomInteger(minSymbol, maxSymbol),
  checkin: getRandomArrayElement(CHECK_TIME),
  checkout: getRandomArrayElement(CHECK_TIME),
  features: getRandomShuffleArray(FEATURES),
  description: getRandomArrayElement(DESCRIPTIONS),
  photos: getRandomShuffleArray(PHOTOS),
});

const createLocation = () => ({
  lat: getRandomFloatNumber(minLatitude, maxLatitude),
  lng: getRandomFloatNumber(minLongitude, maxLongitude)
});

const createAddress = () => ({
  author: createAuthor(),
  offer: createOffer(),
  location: createLocation()
});

const similiarAnnounce = () => {
  const similiarAnnounceArray = Array.from({length: similiarAnnounceCount}, createAddress);
  return similiarAnnounceArray;
};
