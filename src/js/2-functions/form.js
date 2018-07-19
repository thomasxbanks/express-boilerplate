/*eslint-disable no-unused-vars*/
/* disabling the EsLint for unused functions as these are called inline */

let duplicateRow = (el) => {
  // Grab the existing markup for a 'row'
  var thisRow = el.parentElement.querySelector('.input-joined_row');
  var newInput = thisRow.outerHTML;
  // Add this markup to the form
  el.insertAdjacentHTML('beforebegin', newInput);
  // Now focus on the newly created element
  var newInputs = el.parentElement.querySelectorAll('.input-joined_row');
  var newestInput = newInputs[newInputs.length - 1];
  newestInput.focus();
};

let formSubmit = (formID) => {
  console.log(formID);
  document.getElementById(formID).submit();
};
