const successModal = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorModal = document.querySelector('#error').content.querySelector('.error').cloneNode(true);

const showSuccessModal = () => {
  document.body.appendChild(successModal);
};

const showErrorModal = () => {
  document.body.appendChild(errorModal);
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    document.removeChild(errorModal);
  }
});

export {showSuccessModal, showErrorModal};
