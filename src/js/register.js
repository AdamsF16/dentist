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
		emailRegister.value = ''
        emailRegisterAllert.classList.remove(`register__alert-email--visible`)
	} else {
		emailRegisterAllert.classList.add(`register__alert-email--visible`)
	}
}


const passwordChecker = () => {
    if(passwordRegister.value == passwordRegisterRepeat.value){
        passwordRegister.value = ``
		passwordRegisterRepeat.value = ``
        passwordRegisterAllert.classList.remove(`register__alert-password--visible`)
    } else {
        passwordRegisterAllert.classList.add(`register__alert-password--visible`)
    }
}

const checkEmpty = () => {
    registerInputs.forEach(input => {
        if(input.value == "") {
            registerAlerts.forEach(alert => alert.classList.add('register__alert--visible'))
        } else {
            input.value = ''
            registerAlerts.forEach(alert => alert.classList.remove('register__alert--visible'))
        }
    })
}

const registerActivator = () => {
	checkEmail()
    passwordChecker()
    checkEmpty()
}

navMobileBtn.addEventListener(`click`, handleNav);
navLanguageBtn.addEventListener(`click`, handleLanguageNav);
navLanguageContainer.addEventListener(`click`, changeLanguage);
registerBtn.addEventListener(`click`, registerActivator)