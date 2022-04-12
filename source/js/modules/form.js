let form = document.querySelector('.form');
let nameInput = form.querySelector('#name');
let phoneInput = form.querySelector('#phone');

let isStorageSupport = true;
let storage = {};

try {
  storage = JSON.parse(localStorage.getItem('storage'));
} catch (err) {
  isStorageSupport = false;
}

document.addEventListener('DOMContentLoaded', function () {
  if (storage) {
    nameInput.value = storage.name;
    phoneInput.value = storage.phone;

  }
});

form.addEventListener('submit', function () {
  if (isStorageSupport) {
    storage = {
      name: nameInput.value,
      phone: phoneInput.value,

    };
    localStorage.setItem('storage', JSON.stringify(storage));
  }
});

phoneInput.addEventListener('keypress', (evt) => {
  if (evt.keyCode < 47 || evt.keyCode > 57) {
    evt.preventDefault();
  }
  if (phoneInput.value.length === 7) {
    phoneInput.value += ') ';
  }
});

phoneInput.addEventListener('focus', () => {
  if (phoneInput.value.length === 0) {
    phoneInput.value = '+7 (';
    phoneInput.selectionStart = phoneInput.value.length;
  }
});

phoneInput.addEventListener('click', (evt) => {
  if (phoneInput.selectionStart < 3) {
    phoneInput.selectionStart = phoneInput.value.length;
  }
  if (evt.key === 'Backspace' && phoneInput.value.length <= 3) {
    evt.preventDefault();
  }
});

phoneInput.addEventListener('blur', () => {
  if (phoneInput.value === '+7(') {
    phoneInput.value = '';
  }
});

phoneInput.addEventListener('keydown', (evt) => {
  if (evt.key === 'Backspace' && phoneInput.value.length <= 3) {
    evt.preventDefault();
  }
});
