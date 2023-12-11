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
          useElement.innerHTML = '<use xlink:href="${iconSvg}#icon-x"></use>'
         } else {
          useElement.innerHTML = '<use xlink:href="${iconSvg}#gg_menu-left-icon"></use>';
         }
     }

     // Add click event listener to the button
     document.getElementById('toggleButton').addEventListener('click', toggleSvgHref);