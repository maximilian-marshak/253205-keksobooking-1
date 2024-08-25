import {MAX_PRICE_VALUE, price, typeHousing, typeOption} from './form.js';

const sliderElement = document.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: MAX_PRICE_VALUE
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const onSliderChange = () => {
  price.value = sliderElement.noUiSlider.get();
};

sliderElement.noUiSlider.on('update', onSliderChange);

const onInputTypeChange = () => {
  const typeOptionKeys = Object.keys(typeOption);
  for (let i = 0; i < typeOptionKeys.length; i++) {
    if (typeHousing.value === typeOptionKeys[i]) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: typeOption[typeOptionKeys[i]],
          max: MAX_PRICE_VALUE,
        },
        step: 1,
      });
    }
  }
};

typeHousing.addEventListener('change', onInputTypeChange);
