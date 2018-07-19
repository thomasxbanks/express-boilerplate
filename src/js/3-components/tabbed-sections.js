if (tabLinks) {
  if (tabLinks.length > 0 && tabs.length > 0) {
    tabLinks.forEach((tabLink) => {
      tabLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.currentTarget.getAttribute('data-disabled') !== 'true') {
          var target = e.currentTarget.getAttribute('href').split('#')[1];
          tabLinks.forEach((tabLink) => {
            tabLink.setAttribute('data-state', 'not-active');
          });
          tabs.forEach((tab) => {
            tab.setAttribute('data-state', 'not-active');
          });

          document.querySelector(`a[href="#${target}"]`).setAttribute('data-state', 'is-active');
          document.querySelector(`[id="${target}"]`).setAttribute('data-state', 'is-active');
        }
      });
    });
  }
}
// At time of writing, this is specific to the disabled tabs in the add-game form
let disabledElements = document.querySelectorAll('[data-disabled="true"]');
if (disabledElements) {
  disabledElements.forEach((disabledElement) => {
    var target = disabledElement.getAttribute('href').split('#')[1];
    var targetElement = document.querySelector(`#${target}`);
    if (targetElement.querySelector('input[type="hidden"][name="id"]').value !== '') {
      disabledElement.setAttribute('data-disabled', 'false');
    }
  });
}
