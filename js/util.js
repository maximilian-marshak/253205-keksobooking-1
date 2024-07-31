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

export {getRandomInteger, getRandomFloatNumber, getRandomArrayElement, getRandomShuffleArray, createCounter};
