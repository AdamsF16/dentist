const navMobileBtn = document.querySelector('.nav__mobile-icon')
const navMobile = document.querySelectorAll('.nav__item-mobile')
const offerCardOne = document.querySelector(`.offer__card-img--one`)
const offerCardTwo = document.querySelector(`.offer__card-img--two`)
const offerCardThree = document.querySelector(`.offer__card-img--three`)

const handleNav = () => {
    navMobile.forEach(link => {
        link.classList.toggle(`nav__active`)
    });
}

const changeImg = () => {
    if(window.innerWidth >= 992) {
        offerCardOne.setAttribute(`src`, `../dist/img/dentist-offer-one_1920.jpg`)
        offerCardTwo.setAttribute(`src`, `../dist/img/dentist-offer-two_1920.jpg`)
        offerCardThree.setAttribute(`src`, `../dist/img/dentist-offer-three_1920.jpg`)
    } else {
        offerCardOne.setAttribute(`src`, `../dist/img/dentist-offer-one_640.jpg`)
        offerCardTwo.setAttribute(`src`, `../dist/img/dentist-offer-two_640.jpg`)
        offerCardThree.setAttribute(`src`, `../dist/img/dentist-offer-three_640.jpg`)
    }
}
changeImg()


navMobileBtn.addEventListener(`click`, handleNav)
window.addEventListener(`resize`, changeImg)
