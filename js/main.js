/* Nav icon */

const navBtn = document.querySelector('.nav_icon-btn');
const navIcon = document.querySelector('.nav_icon');      
const nav = document.querySelector('.header_top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav_icon--active');
    nav.classList.toggle('header_top-row--mobile');
    document.body.classList.toggle('no_scroll');
};



/* Phone mask */
mask('[data-tel-input]');

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = '';
	})
});