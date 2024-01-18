  // prevent screen from being scrollable when menu is open
  const burger = document.querySelector('.hamburger-menu');

  const toggleMenu = document.getElementById('toggle-menu');
  toggleMenu.addEventListener('change', function () {
    document.body.style.overflowY = this.checked ? 'hidden' : 'auto';

    if (this.checked) {
      burger.classList.add('cross');
    } else {
      burger.classList.remove('cross');
    }
  });