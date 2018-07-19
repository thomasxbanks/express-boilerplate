/*eslint-disable no-unused-vars*/
/* disabling the EsLint for unused functions as these are called inline */

const dirty = (event) => {
  event.currentTarget.setAttribute('data-state', 'not-pristine');
};

const validate = (event) => {
  var thisInput = event.currentTarget;
  var thisInputContainer = closest(thisInput, (el) => {
    return el.classList.contains('input_container');
  });
  var valid = thisInput.checkValidity();
  if (valid) {
    thisInputContainer.querySelector('.input-validation-message').style.display = `none`;
    thisInputContainer.querySelector('.input-validation-message').innerHTML = ``;
  } else {
    thisInputContainer.querySelector('.input-validation-message').style.display = `block`;
    thisInputContainer.querySelector('.input-validation-message').innerHTML =
      thisInput.validationMessage;
  }
};

const setFieldRequirement = (field, value) => {
  field.querySelectorAll('input, textarea, select').forEach((input) => {
    input.required = value;
  });
};
