const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('show');
    if (mobileNav.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.removeProperty('overflow');
    }
});