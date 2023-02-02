'use strict';

const smallContainer = document.getElementById('small-container');
const menuContainer = document.getElementById('menu-container');
const header = document.getElementById('header');
const linksContainer = document.getElementById('links-container');
const slidesContainer = document.getElementById('slides-container');
const slide = document.querySelector('.slide');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  console.log('movil');
} else {
  console.log('no movil'); 
}

smallContainer.addEventListener('click',() => {
  menuContainer.classList.toggle('close');
  linksContainer.classList.toggle('close');
  header.classList.toggle('header-show');
  smallContainer.classList.toggle('small-container-show');
});


nextButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
