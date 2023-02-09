'use strict';



// llamar legend
// llamar a los div

const designLegend = document.querySelector('.js-designLegend');
const divDesign = document.querySelector('.js-divDesign');

const fillLegend = document.querySelector('.js-fillLegend');
const divFill = document.querySelector('.js-divFill');


const shareLegend = document.querySelector('.js-shareLegend');
const divShare = document.querySelector('.js-divShare');

// crear clase collapsed

function closeAlldiv () {
divDesign.classList.add('collapsed');
divFill.classList.add('collapsed');
divShare.classList.add('collapsed');
}

function openDesign () {
    divDesign.classList.remove('collapsed');
}

function openFill () {
    divFill.classList.remove('collapsed');
}

function openShare () {
    divShare.classList.remove('collapsed');
}

// Evento Design 

function handleClikDesign (event) {
    console.log(event.currentTarget);
    closeAlldiv ();
    openDesign ();

}

designLegend.addEventListener ('click', handleClikDesign);



// Evento Fill

function handleClikFill (event) {
    console.log('click');
    closeAlldiv ();
    openFill () ;
}

fillLegend.addEventListener ('click', handleClikFill);

// Evento Fill

function handleClikShare (event) {
    console.log("click");
    closeAlldiv ();
    openShare () ;
}

shareLegend.addEventListener ('click', handleClikShare);



//# sourceMappingURL=main.js.map
