'use strict';
// Evento en el input color --> cambia el color en la tarjeta


const option1 = document.querySelector('.js-option1');
const option2 = document.querySelector('.js-option2');
const option3 = document.querySelector('.js-option3');
const option4 = document.querySelector('.js-option4');
const allcard = document.querySelector('.js-allcard');

function removepalette() {
  allcard.classList.remove('palette1');
  allcard.classList.remove('palette2');
  allcard.classList.remove('palette3');
  allcard.classList.remove('palette4');
}


function handleclik1() {
  removepalette();
  allcard.classList.add('palette1');

}

function handleclik2() {
  removepalette();
  allcard.classList.add('palette2');

}

function handleclik3() {
  removepalette();
  allcard.classList.add('palette3');

}

function handleclik4() {
  removepalette();
  allcard.classList.add('palette4');

}


option1.addEventListener('click', handleclik1);
option2.addEventListener('click', handleclik2);
option3.addEventListener('click', handleclik3);
option4.addEventListener('click', handleclik4);