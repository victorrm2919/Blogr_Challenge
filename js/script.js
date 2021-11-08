document.addEventListener('DOMContentLoaded', () => {

    /* Navbar scroll animations*/
    let heigthNav = document.querySelector('.nav').clientHeight;

    let bodyRect = document.body.getBoundingClientRect(),
        elemRect = document.querySelector('footer').getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top;

    document.addEventListener("scroll", () => {
        if (this.scrollY > heigthNav) {
            if (this.scrollY > offset - heigthNav) {
                document.querySelector('.nav').classList.add('nav-footer');
            } else {
                document.querySelector('.nav').classList.remove('nav-footer');
                document.querySelector('.nav').classList.add('fixed');
            }
        } else {
            document.querySelector('.nav').classList.remove('fixed');
        }
    });

    /* Menu action */

    const toggleNav = document.querySelector('.nav .nav__links');

    document.querySelector('.nav__menu').addEventListener('click', (e) => {
        e.target.classList.toggle('closeMenu');
        toggleNav.classList.toggle('active');
    });

    /* Action Nav link */

    const navLinks = document.querySelectorAll('.nav__links--list__item');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            link.classList.toggle('active')
        })
    })


}, false);