const disableThumbnails = (thumbnails) => {
  thumbnails.forEach((thumbnail) => {
    thumbnail.setAttribute('data-state', 'not-active');
  });
};

const enableThumbnail = (target) => {
  document.querySelectorAll(`[data-target="${target}"]`).forEach((target) => {
    target.setAttribute('data-state', 'is-active');
  });
};

const openTabbedSection = () => {
  console.log('openTabbedSection', tabbedSectionContainer);
  tabbedSectionContainer.setAttribute('data-state', 'is-active');
  console.log('should be done now 😟');
};

const closeTabbedSection = () => {
  console.log('closeTabbedSection', tabbedSectionContainer);
  tabbedSectionContainer.setAttribute('data-state', 'not-active');
};
