"use strict";

/***************************HEADRE START**************************/
// Вызов модального окна
$('.header-button__menu').click( function() {
	$('.header-wrap__mob').addClass('active');
	$('.body').addClass('overflow');
});
// Закрытие окна на крестик
$('.header-close').click( function() {
	$('.header-wrap__mob').removeClass('active');
	$('.body').removeClass('overflow');
});
$('.header-logo').click( function() {
	$('.header-wrap__mob').removeClass('active');
	$('.body').removeClass('overflow');
});
$('.item-link').click( function() {
	$('.header-wrap__mob').removeClass('active');
	$('.body').removeClass('overflow');
});
$('.social-link').click( function() {
	$('.header-wrap__mob').removeClass('active');
	$('.body').removeClass('overflow');
});
$('.header-phone').click( function() {
	$('.header-wrap__mob').removeClass('active');
	$('.body').removeClass('overflow');
});
// Закрытие окна на поле
$(document).mouseup( function (e) { 
	var popup = $('.popup');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.header-wrap__mob').removeClass('active');
		$('.body').removeClass('overflow');
	}
});

/***************************HEADRE END**************************/

/****************************SLIDER MOBILE START**********************/

if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
	$('.service-section').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
	});
}

/****************************SLIDER MOBILE END**********************/

/***********************************INPUTDATE START***************************************/

jQuery(document).ready(function () {
	jQuery('#input-date').datepicker({
		format: 'dd-mm-yyyy',
		startDate: '+1d'
	});
});
jQuery(document).ready(function () {
	jQuery('#date-input').datepicker({
		format: 'dd-mm-yyyy',
		startDate: '+1d'
	});
});

/***********************************INPUTDATE END***************************************/

/***************************************FORM SEND START********************************/

document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('application-form');
	let sendText = document.getElementById('text-send');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = onInput();

		let formData = new FormData(form);

		if (error === 0) {
			let response = await fetch('send.php', {
				method: 'post',
				body: formData
			});
			if (response.ok) {
				sendText.innerHTML = 'Send massage';
				$('.text-send').addClass('send');
				console.log('send');
				form.reset();
			} else {
				sendText.innerHTML = 'error';
				$('.text-send').addClass('error');
				form.reset();
				console.log('error');
			}
		} else {
			alert('Fill in required fields');
		}
	}

	// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	const input = document.querySelector('input');
	
	function isEmailValid() {
		let none = 0;
		$('.submit').click(function() {
			if($('.last-name').val().length === 0 ) {
				none = 0;
			} else {
				none++;
			}
		})
		return none;
	}
	
	function onInput() {
		let error = 0;
		if (isEmailValid() === 0) {
			input.classList.remove('invalid');
			input.classList.add('valid');
			error = 0;
		} else {
			input.classList.remove('valid');
			input.classList.add('invalid');
			error++;
		}
		console.log(error);
		return error;
	}
	
	input.addEventListener('input', onInput);
});

document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('feedback-form');
	let sendText = document.getElementById('text-send');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = onInput();

		let formData = new FormData(form);

		if (error === 0) {
			let response = await fetch('send.php', {
				method: 'post',
				body: formData
			});
			if (response.ok) {
				sendText.innerHTML = 'Send massage';
				$('.text-send').addClass('send');	
				console.log('send');
				form.reset();
			} else {
				sendText.innerHTML = 'error';
				$('.text-send').addClass('error');
				form.reset();
			}
		} else {
			alert('Fill in required fields');
		}
	}

	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	const input = document.querySelector('input');
	
	function isEmailValid(value) {
		return EMAIL_REGEXP.test(value);
	}
	
	function onInput() {
		let error = 0;
		if (isEmailValid(input.value)) {
			input.classList.remove('invalid');
			input.classList.add('valid');
			error = 0;
		} else {
			input.classList.remove('valid');
			input.classList.add('invalid');
			error++;
		}
		console.log(error);
		return error;
	}
	
	input.addEventListener('input', onInput);
});

/***************************************FORM SEND END********************************/