let mobileMenu = document.querySelector('.mobile-hamburger'),
  mobileNav = document.querySelector('#mobile-menu'),
  closeMobileBtn = document.querySelector('.close-mobile-menu'),
  devMenu = document.querySelector('.category-menu'),
  currentCategory = 'projects',
  subCategories = [];

window.addEventListener('resize', closeMobileNav);

mobileMenu.addEventListener('click', () => {
  mobileNav.classList.add('show-mobile-nav');
  mobileMenu.classList.add('displayNone');
  closeMobileBtn.classList.add('displayBlock');
})

closeMobileBtn.addEventListener('click', closeMobileNav);

function closeMobileNav() {
  mobileNav.classList.remove('show-mobile-nav');
  mobileMenu.classList.remove('displayNone');
  closeMobileBtn.classList.remove('displayBlock');
}

fetch("/includes/sidebar.html").then((response) => {
  return response.text();
}).then((data) => {
  document.querySelector(".right-column").innerHTML = data;
});
fetch("/includes/sidebar.html").then((response) => {
  return response.text();
}).then((data) => {
  document.querySelector(".sidebar-elements").innerHTML = data;
});
fetch("/includes/header-nav.html").then((response) => {
  return response.text();
}).then((data) => {
  document.querySelector(".app-header nav").innerHTML = data;
});
fetch("/includes/mobile-nav.html").then((response) => {
  return response.text();
}).then((data) => {
  document.querySelector("#mobile-menu").innerHTML = data;
});