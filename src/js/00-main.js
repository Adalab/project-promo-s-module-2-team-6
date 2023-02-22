/* eslint-disable indent */
'use strict';

let data = {
    palette: "",
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
}


// llamar legend
// llamar a los div

const designLegend = document.querySelector('.js-designLegend');
const divDesign = document.querySelector('.js-divDesign');

const fillLegend = document.querySelector('.js-fillLegend');
const divFill = document.querySelector('.js-divFill');


const shareLegend = document.querySelector('.js-shareLegend');
const divShare = document.querySelector('.js-divShare');

const arrowDesign = document.querySelector('.js-arrow-design');

const arrowFill = document.querySelector('.js-arrow-fill');

const arrowShare = document.querySelector('.js-arrow-share');

// crear clase collapsed

function closeAlldiv() {
    divDesign.classList.add('collapsed');
    divFill.classList.add('collapsed');
    divShare.classList.add('collapsed');
    arrowDesign.classList.remove('arrow-collapsed');
    arrowFill.classList.remove('arrow-collapsed');
    arrowShare.classList.remove('arrow-collapsed');
}

function openDesign() {
    divDesign.classList.remove('collapsed');
    arrowDesign.classList.add('arrow-collapsed');
}

function openFill() {
    divFill.classList.remove('collapsed');
    arrowFill.classList.add('arrow-collapsed');
}

function openShare() {
    divShare.classList.remove('collapsed');
    arrowShare.classList.add('arrow-collapsed');
}

// Evento Design 

function handleClikDesign(event) {
    console.log(event.currentTarget);
    closeAlldiv();
    openDesign();
}

designLegend.addEventListener('click', handleClikDesign);



// Evento Fill

const handleClikFill = (event) => {
    console.log('click');
    closeAlldiv();
    openFill();
    arrowShare.classList.toggle("arrow-collapsed");
}

fillLegend.addEventListener('click', handleClikFill);

// Evento Share

function handleClikShare(event) {
    console.log("click");
    closeAlldiv();
    openShare();
    arrowShare.classList.toggle("arrow-collapsed");
}

shareLegend.addEventListener('click', handleClikShare);

// Valores del input

const inputName = document.querySelector('.js-inputName');
const cardName = document.querySelector('.js-cardName');
const inputJob = document.querySelector('.js-inputJob');
const cardJob = document.querySelector('.js-cardJob');
const inputEmail = document.querySelector('.js-inputEmail');
const cardEmail = document.querySelector('.js-cardEmail');
const inputPhone = document.querySelector('.js-inputPhone');
const cardPhone = document.querySelector('.js-cardPhone');
const inputLinkedin = document.querySelector('.js-inputLinkedin');
const cardLinkedin = document.querySelector('.js-cardLinkedin');
const inputGithub = document.querySelector('.js-inputGithub');
const cardGithub = document.querySelector('.js-cardGithub');




// Evento Nombre
inputName.addEventListener('keyup', () => {
    const nameWritten = inputName.value;
    if (nameWritten === '') {
        cardName.innerHTML = 'Nombre Apellido';
    } else {
        cardName.innerHTML = nameWritten;
        data.name = nameWritten;
    }
});
// Evento Empleo
inputJob.addEventListener('keyup', () => {
    const jobWritten = inputJob.value;
    if (jobWritten === '') {
        cardJob.innerHTML = 'Front-end-developer';
    } else {
        cardJob.innerHTML = jobWritten;
        data.job = jobWritten;

    }
});

// Evento Email
inputEmail.addEventListener('keyup', () => {
    const emailWritten = inputEmail.value;
    cardEmail.href = `mailto:${emailWritten}`;
    data.email = emailWritten;

});

//Evento Linkedin
inputLinkedin.addEventListener('keyup', () => {
    const linkedinWritten = inputLinkedin.value;
    cardLinkedin.href = `https://${linkedinWritten}`;
    data.linkedin = linkedinWritten;

});

// Evento github
inputGithub.addEventListener('keyup', () => {
    const githubWritten = inputGithub.value;
    cardGithub.href = `https://github.com/${githubWritten.slice(1, 50)}`;
    data.github = githubWritten;
});

// Evento telefono
inputPhone.addEventListener('keyup', () => {
    const phoneWritten = inputPhone.value;
    cardPhone.href = `tel:${phoneWritten}`;
    data.phone = phoneWritten;
});

// Evento palette
