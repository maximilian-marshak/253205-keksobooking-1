const SYMBOLS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10'
];

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

const getRandomFloatNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Number(Math.random() * (max - min) + min).toFixed(5);
};

const latitude = getRandomFloatNumber(35.65000, 35.70000);
const longitude = getRandomFloatNumber(139.70000, 139.80000);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomArray = (integer, array) => {
  const someArray = [];
  for (let i = 0; i <= integer; i++) {
    someArray.push(array[i]);
  }
  return someArray;
};

const createAuthor = () => ({
  avatar: `img/avatars/user${getRandomArrayElement(SYMBOLS)}.png`
});

const createOffer = () => ({
  title: getRandomArrayElement(TITLES),
  adress: `${latitude},${longitude}`,
  price: getRandomInteger(100, 5000),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomInteger(1, 10),
  guests: getRandomInteger(1, 10),
  checkin: getRandomArrayElement(CHECK_TIME),
  checkout: getRandomArrayElement(CHECK_TIME),
  features: getRandomArray(getRandomInteger(0,FEATURES.length - 1), FEATURES),
  description: getRandomArrayElement(DESCRIPTIONS),
  photos: getRandomArray(getRandomInteger(0,PHOTOS.length - 1), PHOTOS),
});

const createLocation = () => ({
  lat: latitude,
  lng: longitude
});

const createAddress = () => ({
  author: createAuthor(),
  offer: createOffer(),
  location: createLocation()
});

createAddress();

