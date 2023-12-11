//mobile menu
(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
  
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
  
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();

  import iconsSvg from '/src/images/icons.svg';

       // Function to toggle the SVG href
       function toggleSvgHref() {
         // Get the <use> element
         var useElement = document.getElementById('menuIcon');

         // Check the current href and toggle it
         if (useElement.getAttributeNS('http://www.w3.org/1999/xlink', 'href') === '${iconSvg}#gg_menu-left-icon') {
             useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '${iconSvg}#icon-x'); // Change to another icon
         } else {
             useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '${iconSvg}#gg_menu-left-icon'); // Change back to the original icon
         }
     }

     // Add click event listener to the button
     document.getElementById('toggleButton').addEventListener('click', toggleSvgHref);

// change-icon.js

import image1Path from './src/images/icons.svg#gg_menu-left-icon';
import image2Path from './src/images/icons.svg#icon-x';

// Function to toggle the image source
function toggleImage() {
  // Get the image element
  var image = document.getElementById('myImage');

  // Check the current source and toggle it
  if (image.src.endsWith(image1Path)) {
      image.src = image2Path; // Change to the second image
  } else {
      image.src = image1Path; // Change back to the original image
  }
}

// Add click event listener to the toggle button
document.getElementById('toggleButton').addEventListener('click', toggleImage);