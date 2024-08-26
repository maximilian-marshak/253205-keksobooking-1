import {MAX_PRICE_VALUE, price, sliderElement} from './form.js';

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

const onSliderUpdate = () => {
  price.value = sliderElement.noUiSlider.get();
};

sliderElement.noUiSlider.on('update', onSliderUpdate);
