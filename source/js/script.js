var swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  }
});

var map = L.map('map').setView([59.968137, 30.316272], 25);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var iconOptions = {
  iconUrl: "../img/images/marker-icon.svg",
  iconSize: [38, 50]
 }
var customIcon = L.icon(iconOptions);

var markerOptions = {
  icon: customIcon
 }

var marker = L.marker([59.968137, 30.316272], markerOptions).addTo(map);

// МЕНЮ

const headerHeight = document.querySelector(".header--opened")
headerHeight.classList.add("header--height--js");
const menu = document.querySelector(".nav__item--menu");
const menuImg = document.querySelector(".nav__item-image");
menu.classList.add("nav__item--active");
menu.classList.remove("nav__item--menu");
var i = 0;
menu.addEventListener("click", () => {
  if (i === 0) {
    headerHeight.style.height = "316px";
    i = 1;
    menuImg.src = './img/images/close.svg';
  } else {
    headerHeight.style.height = "60px";
    i = 0;
    menuImg.src = './img/images/menu.svg';
  }
})

