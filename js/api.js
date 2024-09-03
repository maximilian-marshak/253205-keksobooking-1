import {showAlert} from './util.js';

const BASE_URL = 'https://28.javascript.htmlacademy.pro/keksobooking';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};


const getData = () => fetch(`${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Данные с сервера не получены, что-то пошло не так');
  })
  .catch(() => {
    showAlert('Данные с сервера не получены, что-то пошло не так');
  });

const sendData = (onSuccess, onFail, body) => {
  fetch(`${BASE_URL}${Route.SEND_DATA}`,
    {
      method: 'POST',
      body,
    },
  ).then((response) => response.ok ? onSuccess() : onFail())
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
