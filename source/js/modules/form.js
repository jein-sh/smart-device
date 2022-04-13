let forms = document.querySelectorAll('form');
let isStorageSupport = true;
let storage = {};

try {
  storage = JSON.parse(localStorage.getItem('storage'));
} catch (err) {
  isStorageSupport = false;
}

forms.forEach((form) => {
  let name = form.querySelector('[name=name]');
  let phone = form.querySelector('[name=phone]');

  document.addEventListener('DOMContentLoaded', function () {
    if (storage) {
      name.value = storage.name;
      phone.value = storage.phone;
    }
  });

  form.addEventListener('submit', function () {
    if (isStorageSupport) {
      storage = {
        name: name.value,
        phone: phone.value,
      };
      localStorage.setItem('storage', JSON.stringify(storage));
    }
  });

  phone.addEventListener('keypress', (evt) => {
    if (evt.keyCode < 47 || evt.keyCode > 57) {
      evt.preventDefault();
    }
    if (phone.value.length === 7) {
      phone.value += ') ';
    }
  });

  phone.addEventListener('focus', () => {
    if (phone.value.length === 0) {
      phone.value = '+7 (';
      phone.selectionStart = phone.value.length;
    }
  });

  phone.addEventListener('click', (evt) => {
    if (phone.selectionStart < 4) {
      phone.selectionStart = phone.value.length;
    }
    if (evt.key === 'Backspace' && phone.value.length <= 4) {
      evt.preventDefault();
    }
  });

  phone.addEventListener('blur', () => {
    if (phone.value === '+7(') {
      phone.value = '';
    }
  });

  phone.addEventListener('keydown', (evt) => {
    if (evt.key === 'Backspace' && phone.value.length <= 4) {
      evt.preventDefault();
    }
  });
});
