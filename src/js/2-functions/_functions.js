/*eslint-disable no-unused-vars*/
/* disabling the EsLint for unused functions as these are called inline */

// Stop the site from scrolling
const lockScroll = () => {
  document.documentElement.style.overflow = `hidden`;
};

// Allow the site to scroll
const unlockScroll = () => {
  document.documentElement.style.overflow = ``;
};

// Make a button enabled
const enableButton = (target) => {
  document.querySelector(target).prop('disabled', false);
};

// Make a button disabled
const disableButton = (target) => {
  document.querySelector(target).prop('disabled', true);
};

// Destroy element
const destroyElement = (element) => {
  document.querySelector(element).outerHTML = '';
};

const link = (destination) => {
  window.location.href = destination;
};

const makeElementIsActive = (element) => {
  element.setAttribute('data-state', 'is-active');
};

const makeElementNotActive = (element) => {
  element.setAttribute('data-state', 'not-active');
};

const makeElementIsVisible = (element) => {
  element.setAttribute('data-state', 'is-visible');
};

const makeElementNotVisible = (element) => {
  element.setAttribute('data-state', 'not-visible');
};

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}
