'use strict';

const buttonCard = document.querySelector('.js__buttonCard');
const createLink = document.querySelector('.js__createLink');

function handleClickCard () {
    
    buttonCard.classList.add('collapsed');
    createLink.classList.remove('collapsed');
}



buttonCard.addEventListener('click' , handleClickCard);