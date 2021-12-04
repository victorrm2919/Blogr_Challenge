function isMobile() {

    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    } else {
        return false;
    }
}


function resetNav( size = 'none') {
    const subList = document.querySelectorAll('.nav__links--list__item--sublist');
    const nav = document.querySelector('.nav .nav__links');

    if (isMobile()) {
        nav.style['display'] = 'none';
        
        subList.forEach((list) => {
            list.style['display'] = 'none';
            if (list.parentElement.classList.contains('active')) {
                list.parentElement.classList.remove('active');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {

    /* Navbar scroll animations*/
    document.addEventListener("scroll", () => {
        let heigthNav = document.querySelector('.nav').clientHeight;

        let bodyRect = document.body.getBoundingClientRect(),
            elemRect = document.querySelector('footer').getBoundingClientRect(),
            offset = elemRect.top - bodyRect.top;
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
    const navListener = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__links--list__item');

    resetNav();
    navListener.addEventListener('click', (e) => {

        navListener.classList.toggle('closeMenu');

        if (!navListener.classList.contains('closeMenu')) {
            resetNav();
        }

        toggleNav.classList.toggle('active');
        if (toggleNav.classList.contains('active')) {
            toggleNav.style['display'] = 'block';
        } else {
            toggleNav.style['display'] = 'none';
        }
    });

    /* Action Nav link */

    if (isMobile()) {
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (link.classList.contains('active')) {
                    link.querySelector('ul').style['display'] = 'none';
                } else {
                    link.querySelector('ul').style['display'] = 'block';
                }
                link.classList.toggle('active');
            });
        });    
    }
    /* Img arrow menu */

    const arrowsMenu = document.querySelectorAll('.nav__links--list__item--link img');
        arrowsMenu.forEach((menu) => {
            console.log(menu.src);
            if (isMobile()) {
                menu.src = './images/icon-arrow-dark.svg'
            } else {
                menu.src = './images/icon-arrow-light.svg'
            }
        })


}, false);