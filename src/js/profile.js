const navMobileBtn = document.querySelector('.nav__mobile-icon');
const navMobile = document.querySelectorAll('.nav__item-mobile');
const navLanguageBtn = document.querySelector(`.nav__language-chosen`);
const navLanguageOption = document.querySelectorAll(`.nav__language-btn`);
const navLanguagePolish = document.querySelector(`.nav__language--pl`);
const navLanguageEnglish = document.querySelector(`.nav__language--eng`);
const navLanguageContainer = document.querySelector(`.nav__language-btn-container`);

const myProfileBtn = document.querySelector(`.profile__my-profile-btn`)
const editBtn = document.querySelector(`.profile__edit-btn`)
const historyBtn = document.querySelector(`.profile__history-btn`)
const changePassBtn = document.querySelector(`.profile__change-pass-btn`)
const myProfile = document.querySelector(`.profile__my-profile-box`)
const changeData = document.querySelector(`.profile__change-data-box`)
const visitHistory = document.querySelector(`.profile__visit-history-box`)
const changePassBox = document.querySelector(`.profile__reset-box`)

const resetPassbtn = document.querySelector(`.profile__reset-btn`)
const oldPassInput = document.querySelector(`#oldPassword`)
const newPassInput = document.querySelector(`#changePassword`)
const repeatPassword = document.querySelector(`#changePasswordRepeat`)
const oldPassAlert = document.querySelector(`.profile__reset-alert--old`)
const repeatPassAlert = document.querySelector(`.profile__reset-alert--change`)



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



const showMyProfile = () => {
	myProfile.classList.remove(`profile__hidden`);
	// myProfile.classList.add(`profile__visible`);
	changeData.classList.remove(`profile__visible`);
	changeData.classList.add(`profile__hidden`);
	visitHistory.classList.remove(`profile__visible`);
	visitHistory.classList.add(`profile__hidden`);
	changePassBox.classList.remove(`profile__visible`)
	changePassBox.classList.add(`profile__hidden`)
}

const showEditPanel = () => {
	myProfile.classList.remove(`profile__visible`)
	myProfile.classList.add(`profile__hidden`);
	changeData.classList.remove(`profile__hidden`);
	changeData.classList.add(`profile__visible`);
	visitHistory.classList.remove(`profile__visible`);
	visitHistory.classList.add(`profile__hidden`);
	changePassBox.classList.remove(`profile__visible`)
	changePassBox.classList.add(`profile__hidden`)
}

const showHistory = () => {
	myProfile.classList.remove(`profile__visible`)
	myProfile.classList.add(`profile__hidden`);
	changeData.classList.remove(`profile__visible`);
	changeData.classList.add(`profile__hidden`);
	visitHistory.classList.remove(`profile__hidden`);
	visitHistory.classList.add(`profile__visible`);
	changePassBox.classList.remove(`profile__visible`)
	changePassBox.classList.add(`profile__hidden`)
}

const showReset = () => {
	myProfile.classList.remove(`profile__visible`)
	myProfile.classList.add(`profile__hidden`);
	changeData.classList.remove(`profile__visible`);
	changeData.classList.add(`profile__hidden`);
	visitHistory.classList.remove(`profile__visible`);
	visitHistory.classList.add(`profile__hidden`);
	changePassBox.classList.remove(`profile__hidden`)
	changePassBox.classList.add(`profile__visible`)
}





myProfileBtn.addEventListener(`click`, showMyProfile)
editBtn.addEventListener(`click`, showEditPanel)
historyBtn.addEventListener(`click`, showHistory)
changePassBtn.addEventListener(`click`, showReset)

navMobileBtn.addEventListener(`click`, handleNav);
navLanguageBtn.addEventListener(`click`, handleLanguageNav);
navLanguageContainer.addEventListener(`click`, changeLanguage);