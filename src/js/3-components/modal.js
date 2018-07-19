const openModal = () => {
  lockScroll();
  makeElementIsActive(modalContainer);
};

const closeModal = () => {
  unlockScroll();
  makeElementNotActive(modalContainer);
};
