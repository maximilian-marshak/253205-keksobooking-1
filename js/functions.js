//Функция для проверки, является ли строка палиндромом
function isPalindrome (word) {
  const withoutSpaces = word.split(' ').join('');
  const wordCase = withoutSpaces.toLowerCase();
  const wordReverse = wordCase.split('').reverse().join('');

  if (wordCase === wordReverse) {
    return true;
  }

  return false;
}

isPalindrome();

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

function returnNumbers(string) {
  let number = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isInteger(parseInt(string[i], 10))) {
      number += string[i];
    }
  }
  return number;
}

returnNumbers();

/*Функция, которая принимает три параметра: исходную строку, минимальную длину
и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.*/


function newString (string, length, addSymbols) {
  const lengthString = length - string.length;
  let concatenatedString = addSymbols + string;

  if (string.length >= length) {
    return string;
  } else {
    concatenatedString = addSymbols.slice(0, lengthString) + string;
  }
  if (concatenatedString.length < length) {
    for (let i = concatenatedString.length; i < length; i++) {
      const result = concatenatedString;
      concatenatedString = addSymbols[0] + result;
    }
  }
  return concatenatedString;
}

newString();

/*Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.*/

function getRandomNumber (min, max, decimals) {
  const number = (Math.random() * (max - min) + min).toFixed(decimals);

  if (min < 0 || max < 0) {
    return NaN;
  }

  if (max <= min) {
    return NaN;
  }

  return number;
}

getRandomNumber();
