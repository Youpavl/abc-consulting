$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


$('.menu a').addClass('font-weight: 500');

const messageInput = document.querySelector('.form__message');

const defaultMessage = 'Message';

messageInput.value = defaultMessage;

messageInput.addEventListener('focus', function () {
    if (this.value === defaultMessage) {
        this.value = '';
    }
});

messageInput.addEventListener('blur', function () {
    if (this.value === '') {
        this.value = defaultMessage;
    }
});

