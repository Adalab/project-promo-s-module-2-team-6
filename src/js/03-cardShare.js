'use strict';

const buttonCard = document.querySelector('.js__buttonCard');
const createLink = document.querySelector('.js__createLink');
const urlCard = document.querySelector('.js__url');

function handleClickCard(event) {
  event.preventDefault();
  //buttonCard.classList.add('collapsed');
  //createLink.classList.remove('collapsed');
  dataFetch();
}



buttonCard.addEventListener('click', handleClickCard);

const msjError = document.querySelector('.js-msjError');
const btnTwitter = document.querySelector('.js-btnTwitter');


function dataFetch() {

  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.success === false) {
        msjError.innerHTML = '* Te faltan datos por rellenar ';
      } else {
        msjError.innerHTML = '';
        buttonCard.classList.add('collapsed');
        createLink.classList.remove('collapsed');
        urlCard.innerHTML = data.cardURL;
        btnTwitter.href = `https://twitter.com/intent/tweet?text=This%20is%20my%20bussiness%20card:&url=${data.cardURL}`;
      }
    });
}

