const ALERT_SHOW_TIME = 5000;

const getGuests = (guests, number) => number === 1 ? guests[0] : guests[1];

const getRooms = (rooms, number) => {
  if (number === 1) {
    return rooms[0];
  } else if (1 < number && number <= 4) {
    return rooms[1];
  }
  return rooms[2];
};

const toggleFormStatus = (elementParentClass, elementTag, status) => {
  const formElements = elementParentClass.querySelectorAll(elementTag);
  formElements.forEach((element) => status ? element.setAttribute('disabled','') : element.removeAttribute('disabled'));
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ffaa99';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getGuests, getRooms, toggleFormStatus, showAlert};
