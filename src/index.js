import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const title = document.querySelector('h1');
const eurInput = document.querySelector('#eur');
const hrkInput = document.querySelector('#hrk');
const btn = document.querySelector('#btn');
const rate = 7.53450;
let hrkValue;
let eurValue;

hrkInput.disabled = true;
eurInput.focus();
eurInput.value = '';
hrkInput.value = '';
btn.name = 'hrk';

btn.addEventListener('click', () => {

  if (btn.name === 'eur') {

    hrkInput.disabled = true;
    eurInput.disabled = false;

    title.textContent = 'EUR2HRK';

    btn.name = "hrk";
    btn.textContent = 'HRK2EUR';

    eurInput.focus();
    hrkInput.blur();

    eurInput.value = '';
    hrkInput.value = '';

  } else {

    eurInput.disabled = true;
    hrkInput.disabled = false;

    title.textContent = 'HRK2EUR';

    btn.name = "eur";
    btn.textContent = 'EUR2HRK';

    hrkInput.focus();
    eurInput.blur();

    eurInput.value = '';
    hrkInput.value = '';
  }
});

eurInput.addEventListener('input', () => {

  hrkValue = eurInput.value * rate;
  hrkInput.value = hrkValue.toFixed(2);
});

hrkInput.addEventListener('input', () => {

  eurValue = hrkInput.value / rate;
  eurInput.value = eurValue.toFixed(2);
});
