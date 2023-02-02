'use strict';

const smallContainer = document.getElementById('small-container');
const menuContainer = document.getElementById('menu-container');
const header = document.getElementById('header');
const linksContainer = document.getElementById('links-container');
const slidesContainer = document.getElementById('slides-container');
const slide = document.querySelector('.slide');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');


var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
console.log('isMobile', isMobile);

if(!isMobile) {
  menuContainer.classList.toggle('close');
  linksContainer.classList.toggle('close');
}

smallContainer.addEventListener('click',() => {
  if(isMobile) {
    menuClickLogic();
  } else {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
});

function menuClickLogic() {
  menuContainer.classList.toggle('close');
  linksContainer.classList.toggle('close');
  header.classList.toggle('header-show');
  smallContainer.classList.toggle('small-container-show');
}

menuContainer.addEventListener('click', () => {
  if(isMobile) {
    menuClickLogic();
  }
});


nextButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
