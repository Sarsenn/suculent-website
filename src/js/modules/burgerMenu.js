function burgerMenu() {
  const desktopBurger = document.querySelector('#hamburger');
  const mobileBurger = document.querySelector('#hamburger-sub');
  const mobile = document.querySelector('.mobile');
  const mobileMenu = document.querySelector('.mobile .wrapper')


  desktopBurger.addEventListener('click', () => {
      desktopBurger.checked = true;
      mobileBurger.checked = true;

      mobile.style.opacity = '1';
      mobile.style.zIndex = 3000;
      mobileMenu.style.left = '0%'
  })

  mobileBurger.addEventListener('click', () => {
          desktopBurger.checked = false;
          mobileBurger.checked = false;

      mobile.style.opacity = '0';
      mobile.style.zIndex = '-1';
      mobileMenu.style.left = '-100%'
  })
}

export {burgerMenu};