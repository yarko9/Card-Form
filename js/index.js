function maxLengthCheck(object) {
    if (object.value.length > 3)
        object.value = object.value.slice(0, 3)
}
const cc = myform.cardcode;
for (let i in ['input', 'change', 'blur', 'keyup']) {
    cc.addEventListener('input', formatCardCode, false);
}

function formatCardCode() {
    let cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}

const form = document.querySelector('.card-form');
function formSubmit(e) {
  const cardInput = document.querySelector('.card-input');
  const isFormValid = cardNumberValidator();

  if (!isFormValid) {
    e.preventDefault();
    cardInput.focus(); 
    return false;
  }
}

function resolveValidation(elementToShow) {
  const visa = document.getElementById("visa-logo");
  const mc = document.getElementById("mc-logo");
  const error = document.getElementById("number-error");

  switch (elementToShow) {
    case 'visa':
      visa.classList.remove('hidden');
      mc.classList.add('hidden');
      error.classList.add('hidden');
      break;
    case 'mc':
      visa.classList.add('hidden');
      mc.classList.remove('hidden');
      error.classList.add('hidden');
      break;
    case 'error':
      visa.classList.add('hidden');
      mc.classList.add('hidden');
      error.classList.remove('hidden');
      break;
    default:
      visa.classList.add('hidden');
      mc.classList.add('hidden');
      error.classList.add('hidden');
  }
}

function cardNumberValidator() {
  let numberId = document.getElementById("creditCardField").value;
  let isCardNumberValid = false;

  if(numberId.charAt(0) == 4) {
    resolveValidation('visa');
    isCardNumberValid = true;
  } else if (numberId.charAt(0) == 5) {
    resolveValidation('mc');
    isCardNumberValid = true;
  } else if (numberId == 0) {
    resolveValidation();
    isCardNumberValid = false;
  } else {
    resolveValidation('error');
    isCardNumberValid = false;
  }
  return isCardNumberValid;
}

form.addEventListener('submit', formSubmit);
