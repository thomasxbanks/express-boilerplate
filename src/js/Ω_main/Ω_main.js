'use strict';

window.onload = () => {
  document.documentElement.classList.replace('no-js', 'is-js'); // Tells us that JS isn't disabled in the browser.

  if (window.location.href.indexOf('local') > -1) {
    /*
      Presuming we're using a xxx.local or localhost:PORT syntax development URI
      (If we aren't, amend the string in the includes() function),
      this will add development styles to our dev environment
      and remove them from our production environments
    */
    document.getElementById('devCss').href = '/css/development.css';
  } else {
    document.documentElement.classList.remove('redline');
    document.getElementById('devCss').outerHTML = '';
  }
};

let CurrentScroll = 0;
window.addEventListener(
  'scroll',
  throttle(() => {
    const scrollTop = window.scrollY;

    if (scrollTop > CurrentScroll) {
      // Scroll down the page
    } else {
      // Scroll up the page
    }

    CurrentScroll = scrollTop; // Updates current scroll position
  })
);

// document.getElementById('site-footer').scrollIntoView();
