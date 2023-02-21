'use strict';

const buttonCard = document.querySelector('.js__buttonCard');
const createLink = document.querySelector('.js__createLink');
const urlCard = document.querySelector('js__url');

function handleClickCard (event) {
    event.preventDefault();
    //buttonCard.classList.add('collapsed');
    //createLink.classList.remove('collapsed');
    dataFetch();
}



buttonCard.addEventListener('click' , handleClickCard);


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
         // if ( ! data.success ) {
         // Mostrar un mensajito a la usuaria
        } else {
            buttonCard.classList.add('collapsed');
            createLink.classList.remove('collapsed');
            urlCard.innerHTML = '';
            // Muestro la dirección y el btn de Tw.
       }
    });
}

