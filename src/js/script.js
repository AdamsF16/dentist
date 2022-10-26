const navMobileBtn = document.querySelector('.nav__mobile-icon')
const navMobile = document.querySelectorAll('.nav__item-mobile')


const handleNav = () => {
    navMobile.forEach(link => {
        link.classList.toggle(`nav__active`)
    });
}



navMobileBtn.addEventListener(`click`, handleNav)
