const navMobileBtn = document.querySelector('.nav__mobile-icon');
const navMobile = document.querySelectorAll('.nav__item-mobile');
const navLanguageBtn = document.querySelector(`.nav__language-chosen`);
const navLanguageOption = document.querySelectorAll(`.nav__language-btn`);
const navLanguagePolish = document.querySelector(`.nav__language--pl`);
const navLanguageEnglish = document.querySelector(`.nav__language--eng`);
const navLanguageContainer = document.querySelector(`.nav__language-btn-container`);
const emailRegister = document.querySelector(`#regEmail`)
const emailRegisterAllert = document.querySelector(`.register__alert-email`)
const passwordRegister = document.querySelector('#regPassword')
const passwordRegisterRepeat = document.querySelector('#confRegPassword')
const passwordRegisterAllert = document.querySelector(`.register__alert-password`)
const registerBtn = document.querySelector(`.register__btn`)
const registerInputs = document.querySelectorAll(`.register__input`)
const registerAlerts = document.querySelectorAll(`.register__alert`)
const postCodeInput = document.querySelector(`#postCode`)
const postCodeAlert = document.querySelector('.register__alert-postcode')


// NAWIGACJA
const handleNav = () => {
	navMobile.forEach((link) => {
		link.classList.toggle(`nav__active`);
	});
    removeLanguageBox()
};

const removeLanguageBox = () => {
    navLanguageOption.forEach((language) => {
		language.classList.remove(`nav__language-btn-active`);
	});

}

const handleLanguageNav = () => {
	navLanguageOption.forEach((language) => {
		language.classList.toggle(`nav__language-btn-active`);
	});
	navMobile.forEach((link) => {
		link.classList.remove(`nav__active`);
	});
};

const changeLanguage = (e) => {
	const chosenLanguage = e.target.innerText;
	navLanguageBtn.textContent = chosenLanguage;

    removeLanguageBox()
};


// REJESTRACJA WALIDACJA

const checkEmail = () => {
	const correctEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

	if(emailRegister.value.match(correctEmail)){
		emailRegisterAllert.classList.remove(`register__alert-email--visible`)
		emailRegister.value = ''
	} else {
		emailRegisterAllert.classList.add(`register__alert-email--visible`)
		emailRegisterAllert.textContent = 'Proszę wpisać poprawny adres email.'
	}
}


const passwordChecker = () => {
    if(passwordRegister.value == passwordRegisterRepeat.value){
        passwordRegister.value = ``
		passwordRegisterRepeat.value = ``
        passwordRegisterAllert.classList.remove(`register__alert-password--visible`)
    } else {
        passwordRegisterAllert.classList.add(`register__alert-password--visible`)
		passwordRegisterAllert.textContent = 'Podane hasła nie są taki same.'
    }
}


const checkPostalCode = () => {
	const plPostCodeRegexp = /^[0-9]{2}-[0-9]{3}/

	if(plPostCodeRegexp.test(postCodeInput.value)) {
		postCodeInput.nextElementSibling.classList.remove('register__alert-postcode--visible')

	}
	 else {
		postCodeAlert.classList.add('register__alert-postcode--visible')
		postCodeAlert.textContent = 'Proszę wpisać poprawny kod pocztowy.'
	} 
}

const checkEmpty = () => {
    registerInputs.forEach(input => {
        if(input.value == "") {
            input.nextElementSibling.classList.add('register__alert--visible')
			input.nextElementSibling.textContent = 'Proszę uzupełnić to pole.'
        } else {
            input.nextElementSibling.classList.remove('register__alert--visible')
        }
    })
}



const registerActivator = () => {
	checkEmail()
	checkPostalCode()
	checkEmpty()
    passwordChecker()
}

navMobileBtn.addEventListener(`click`, handleNav);
navLanguageBtn.addEventListener(`click`, handleLanguageNav);
navLanguageContainer.addEventListener(`click`, changeLanguage);
registerBtn.addEventListener(`click`, registerActivator)