const Btnsignin = document.querySelector('.Btnsignin');
const Btnsignup = document.querySelector('.Btnsignup');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');

Btnsignup.onclick = function () {
    formBx.classList.add('active')
    body.classList.add('active')
}

Btnsignin.onclick = function () {
    formBx.classList.remove('active')
    body.classList.remove('active')
}