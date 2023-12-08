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

  // Function to toggle the SVG href
  function toggleSvgHref() {
    // Get the <use> element
    var useElement = document.getElementById('menuIcon');

    // Check the current href and toggle it
    if (useElement.href.baseVal === '/src/images/icons.svg#gg_menu-left-icon') {
        useElement.href.baseVal = '/src/images/icons.svg#icon-x'; // Change to another icon
    } else {
        useElement.href.baseVal = '/src/images/icons.svg#gg_menu-left-icon'; // Change back to the original icon
    }
}

// Add click event listener to the button
document.getElementById('toggleButton').addEventListener('click', toggleSvgHref);