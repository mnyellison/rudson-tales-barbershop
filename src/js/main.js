const menuButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const navbarMenu = document.getElementById('navbar-sticky');

if (menuButton && navbarMenu) {
  menuButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('hidden');

    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
  });

  const menuLinks = navbarMenu.querySelectorAll('a');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarMenu.classList.add('hidden');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}
