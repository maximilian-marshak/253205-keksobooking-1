//Функция для проверки, является ли строка палиндромом
const isPalindrome = (word) => {
  const withoutSpaces = word.replace(' ','').toLowerCase();
  const wordReverse = withoutSpaces.split('').reverse().join('');
  return withoutSpaces === wordReverse;
};

isPalindrome('ДовОд');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

const extractNumber = (string) => {
  let number = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isInteger(parseInt(string[i], 10))) {
      number += string[i];
    }
  }
  return parseInt(number, 10);
};

extractNumber('агент 007');

/*Функция, которая принимает три параметра: исходную строку, минимальную длину
и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.*/


const newString = (string, length, addSymbols) => {
  const lengthString = length - string.length;

  if (string.length >= length) {
    return string;
  } else {
    return addSymbols.slice(0, lengthString % addSymbols.length) + addSymbols.repeat(lengthString / addSymbols.length) + string;
  }
};

newString('q', 5, 'we');

/*Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.*/

const getRandomNumber = (min, max, decimals) => {

  if (min < 0 || max < 0) {
    return NaN;
  }

  if (max <= min) {
    return NaN;
  }

  const number = (Math.random() * (max - min) + min).toFixed(decimals);
  return number;
};

getRandomNumber(1,5,2);
