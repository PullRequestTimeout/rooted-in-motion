document.getElementById("navCheckbox").addEventListener("input", changeNavStyle)
window.addEventListener("scroll", navbarOpacity)
document.body.onload = closeNav()

function changeNavStyle () {
    const header = document.querySelector("header")
    const nav = document.querySelector('nav')
    const navCheckbox = document.getElementById('navCheckbox')
    const navHamburger = document.getElementById('navHamburger')
    const logo1 = document.getElementById('navbar__logo-path-1')
    const logo2 = document.getElementById('navbar__logo-path-2')
    const logo3 = document.getElementById('navbar__logo-path-3')
    const logo4 = document.getElementById('navbar__logo-path-4')

    if (navCheckbox.checked == true) {
        header.style.backgroundColor = '#1D201D'
        nav.style.backgroundColor = '#1D201D'
        navHamburger.style.color = '#ffffff'
        logo1.style.fill = '#ffffff'
        logo4.style.fill = '#ffffff'
        logo2.style.fill = '#E59C42'
        logo3.style.stroke = '#E59C42'
    } else {
        header.style.backgroundColor = ''
        nav.style.backgroundColor = ''
        navHamburger.style.color = '#000000'
        logo1.style.fill = '#212C21'
        logo2.style.fill = '#527A52'
        logo4.style.fill = '#212C21'
        logo3.style.stroke = '#527A52'
    }
}

function closeNav () {
    document.getElementById('navCheckbox').checked = false
    changeNavStyle()
}

function navbarOpacity () {
    let scrollPos = window.scrollY;
    const header = document.querySelector('header')
    if (scrollPos > 10) {
        header.classList.add('header--fade')
    } else {
        header.classList.remove('header--fade')
    }
}