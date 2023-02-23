'use strict';

const reset = document.querySelector('.js-reset');


function handleClickReset(ev) {
    ev.preventDefault();
    console.log('click reset');
    inputName.value = '';
    cardName.innerHTML = 'Nombre Apellido';
    inputJob.value = '';
    cardJob.innerHTML = 'Front-end developer';
    inputEmail.value = '';
    inputLinkedin.value = '';
    inputGithub.value = '';
    inputPhone.value = '';
    profilePreview.style.backgroundImage = '';
    profileImage.style.backgroundImage = '';
    localStorage.removeItem('CardPhone');
    localStorage.removeItem('CardGithub');
    localStorage.removeItem('CardLinkedin');
    localStorage.removeItem('CardEmail');
    localStorage.removeItem('CardJob');
    localStorage.removeItem('CardName');
}
reset.addEventListener('click', handleClickReset);
