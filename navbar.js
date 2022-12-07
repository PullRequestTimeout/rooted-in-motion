// let prevScrollpos = window.pageYOffset;
//     window.onscroll = () => {
//         const navbar = document.getElementById("navbar");
//         let currentScrollpos = window.pageYOffset;
//         // console.log(currentScrollpos)
//         if (prevScrollpos > currentScrollpos) {
//             navbar.style.top = "0";
//             navbar.style.transition = "0.5s";
//             navbar.style.backgroundColor = "rgba(246, 232, 213, 0.5)";
//             navbar.style.backdropFilter = "blur(1em)";
//         } else if (window.pageYOffset < 5) {
//             console.log("0")
//             navbar.style.backgroundColor = "none";
//             navbar.style.backdropFilter = "0";
//         } else {
//             navbar.style.top = "-100%";
//             navbar.style.transition = "0.5s";
//             navbar.style.backgroundColor = "none";
//         }

//         prevScrollpos = currentScrollpos;

//     }

const changeNavStyle = () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const navCheckbox = document.getElementById('navCheckbox');
    const navHamburger = document.getElementById('navHamburger');
    const logo1 = document.getElementById('navbar__logo-path-1');
    const logo2 = document.getElementById('navbar__logo-path-2');
    const logo3 = document.getElementById('navbar__logo-path-3');
    const logo4 = document.getElementById('navbar__logo-path-4');

    if (navCheckbox.checked == true) {
        header.style.backgroundColor = '#1D201D';
        nav.style.backgroundColor = '#1D201D';
        navHamburger.style.color = '#ffffff';
        logo1.style.fill = '#ffffff';
        logo4.style.fill = '#ffffff';
        logo2.style.fill = '#E59C42';
        logo3.style.stroke = '#E59C42';
    } else {
        header.style.backgroundColor = '';
        nav.style.backgroundColor = '';
        navHamburger.style.color = '#000000'
        logo1.style.fill = '#212C21';
        logo2.style.fill = '#527A52';
        logo4.style.fill = '#212C21';
        logo3.style.stroke = '#527A52';
    }
}

document.getElementById('navCheckbox').addEventListener('input', changeNavStyle);

const navbarOpacity = () => {
    let scrollPos = window.scrollY;
    const header = document.querySelector('header');
    if (scrollPos > 10) {
        header.classList.add('header--fade');
    } else {
        header.classList.remove('header--fade');
    }
}

window.addEventListener("scroll", navbarOpacity)