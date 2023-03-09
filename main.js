// Navbar -----------------------------------------------------------------------------------------

document.getElementById("navCheckbox").addEventListener("input", changeNavStyle)
window.addEventListener("scroll", navbarOpacity)
document.body.onload = closeNav()
if (document.getElementById("servicesLink")) {
    document.getElementById("servicesLink").addEventListener("click", () => {closeNav(); changeNavStyle();})  
} 

function changeNavStyle() {
    const header = document.querySelector("header")
    const nav = document.querySelector("nav")
    const navCheckbox = document.getElementById("navCheckbox")
    const navHamburger = document.getElementById("navHamburger")
    const logo1 = document.getElementById("navbar__logo-path-1")
    const logo2 = document.getElementById("navbar__logo-path-2")
    const logo3 = document.getElementById("navbar__logo-path-3")
    const logo4 = document.getElementById("navbar__logo-path-4")

    if (navCheckbox.checked == true) {
        header.style.backgroundColor = "#1D201D"
        nav.style.backgroundColor = "#1D201D"
        navHamburger.style.fill = "#ffffff"
        logo1.style.fill = "#ffffff"
        logo4.style.fill = "#ffffff"
        logo2.style.fill = "#E59C42"
        logo3.style.stroke = "#E59C42"
    } else {
        header.style.backgroundColor = ""
        nav.style.backgroundColor = ""
        navHamburger.style.fill = "#000000"
        logo1.style.fill = "#212C21"
        logo2.style.fill = "#527A52"
        logo4.style.fill = "#212C21"
        logo3.style.stroke = "#527A52"
    }
}

function closeNav() {
    document.getElementById("navCheckbox").checked = false
}

function navbarOpacity() {
    let scrollPos = window.scrollY;
    const header = document.querySelector("header")
    if (scrollPos > 10) {
        header.classList.add("header--fade")
    } else {
        header.classList.remove("header--fade")
    }
}

// IntersectionObserver ---------------------------------------------------------------------------

const intersectionObserverOptions = {
    root: null, //This specifies that it is the viewport that is intersecting. A root ancestor can be specified also.
    threshhold: 0.75, //This is the percentage of the target element that is intersecting, expressed as a 0.0 to 1.0 == 0% to 100%.
    rootMargin: "-50px", //Works like CSS margin (but needs to be expressed in percentage or px, as a string).
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return
        } else {
            entry.target.classList.add("fade-animation")
        }
})
}, intersectionObserverOptions)

// Attaches the observer to each element returned by fadeIn, which is all elements with 'fade-in' class.
document.querySelectorAll(".fade-in").forEach(fade => {observer.observe(fade)})

// Modal ------------------------------------------------------------------------------------------

// Pass in null to title arg if no title is needed
function showModal(title, content) {
    const modal = document.getElementById("modal")
    const modalTitle = document.getElementById("modalTitle")
    const modalContent = document.getElementById("modalContent")
    modal.classList.remove("hide")
    if (title) {
        modalTitle.innerText = title
        modalTitle.classList.remove("hide")
    }
    if (content) {
        modalContent.innerText = content
        modalContent.classList.remove("hide")
    }
}

function hideModal() {
    document.getElementById("modal").classList.add("hide")
    document.getElementById("modalTitle").classList.add("hide")
    document.getElementById("modalContent").classList.add("hide")
}

document.getElementById("modalClose").addEventListener("click", hideModal)

// Symptoms Modal Content ----------------------------------------------------------------------------------

function symptomCardContents(id) {
    const symptomContents1 = "Manual therapy works with muscles, joints, and fascia (connective tissue surrounding muscles, joints, and organs) of the head, neck, and spine, may help decrease the frequency of headaches and migraines, and may help with neurological symptoms like tinnitus, vertigo, and insomnia and help with rehabilitation after concussions."
    const symptomContents2 = "Manual therapy can help with rehabilitation after car accidents, whiplash injuries, falls, fractures, concussions, and treatment of scar tissue post surgery."
    const symptomContents3 = "Manual therapy may benefit injuries associated with contact sports and overuse, rehabilitation after ligament tears, sprains, and tendon or capsule injuries."
    const symptomContents4 = "Treatment may benefit those with scoliosis, disc injuries and herniations, arthritis, sciatica, restless leg syndrome,  people working in jobs with repetitive movements or requiring long periods of sitting, falls on the back, hips, or tailbone."
    const symptomContents5 = "Treatment may help decrease inflammation, improve circulation surrounding affected joints, and decrease muscle tightness, and is safe for those with osteoarthritis and rheumatoid arthritis."
    const symptomContents6 = "Manual therapy may help loosen restricted or tight muscles, joints, and fascia (connective tissue surrounding muscles, joints, and organs) and can lubricate joint spaces and decrease inflammation. I work with clients who have connective tissue disorders, joint inflammation (osteoarthritis and rheumatoid arthritis), plantar fasciitis, frozen shoulder, bursitis, numbness and tingling in the extremities, muscle spasms, and carpal tunnel syndrome."
    const symptomContents7 = "Manual therapy can help with be related to tight muscles in the face, neck, shoulders, and pelvis and can be related to teeth grinding, history of dental work or dental surgeries, and frequent sinus or ear infections."
    const symptomContents8 = "Manual therapy may help with bloating, gas, cramping, hiatal hernias, acid reflux, indigestion, and digestive motility issues like constipation or diarrhea."
    const symptomContents9 = "Manual therapy may help with PMS, abdominal and back pain during menses, PCOS, and endometriosis."
    const symptomContents10 = "I work with clients of all ages and stages of life including perinatal (prenatal and postnatal) clients, newborns, and pediatric clients. Treatments can help prepare the body for labor and work with symptoms associated with pregnancy like muscle and joint pain, nausea, and swelling in the legs. In the postpartum period I work with people who are having breastfeeding difficulties, and babies struggling with gastrointestinal concerns like reflux, gas, and colic or musculoskeletal concerns like torticollis or plagiocephaly. Manual therapy can also help reduce stress and induce relaxation."

    switch (id) {
        case "symptomCard1":
            showModal("Headaches and Neurological Conditions", symptomContents1)
            break;
        case "symptomCard2":
            showModal("Traumatic Injuries and Whiplash", symptomContents2)
            break;
        case "symptomCard3":
            showModal("Sports Injuries", symptomContents3)
            break;
        case "symptomCard4":
            showModal("Back or Neck Pain", symptomContents4)
            break;
        case "symptomCard5":
            showModal("Arthritis", symptomContents5)
            break;
        case "symptomCard6":
            showModal("Joint or Muscle Pain", symptomContents6)
            break;
        case "symptomCard7":
            showModal("TMJ Pain", symptomContents7)
            break;
        case "symptomCard8":
            showModal("Digestive Concerns", symptomContents8)
            break;
        case "symptomCard9":
            showModal("Women's Health Concerns", symptomContents9)
            break;
        case "symptomCard10":
            showModal("And more!", symptomContents10)
            break;
    }
}

document.querySelectorAll(".client-symptoms__card").forEach(card => card.addEventListener("click", () => {symptomCardContents(card.id)}))

// Carousel ---------------------------------------------------------------------------------------

// Always starts carousel on first slide
document.getElementById("feedbackCarouselNav0").checked = true

// Carousel navs
document.getElementsByName("carouselNavDots").forEach(element => element.addEventListener("input", updateSlide));
document.getElementById('feedbackCarouselNavLeft').addEventListener("click", changeRadioLeft)
document.getElementById('feedbackCarouselNavRight').addEventListener("click", changeRadioRight)

// Can be commented in to start an auto interval on carousel
// document.body.onload = changeRadioRight(), setInterval(changeRadioRight, 10000)

function updateSlide() {
    const navDots = document.getElementsByName('carouselNavDots')
    const slideArray = Array.from(document.getElementById('feedbackCarousel').children);
    for (i = 0; i < navDots.length; i++) {
        if (navDots[i].checked){
            let j = parseInt(navDots[i].value)

            const navDotAray = Array.from(navDots)
            let newArray = navDotAray.filter(value => value !== navDots[i])

            slideArray[j].classList.remove('hide');
            slideArray[newArray[0].getAttribute("value")].classList.add('hide')
            slideArray[newArray[1].getAttribute("value")].classList.add('hide')
        }
    }
}

function changeRadioRight() {
    const navDots = document.getElementsByName('carouselNavDots')
    
    for (i = 0; i < navDots.length; i++) {
        if (navDots[i].checked && navDots[i].getAttribute('value') < navDots.length - 1){
            document.getElementById(`feedbackCarouselNav${i+1}`).checked = true
            updateSlide()
        } else if (navDots[i].getAttribute('value') == navDots.length - 1) {
            document.getElementById('feedbackCarouselNav0').checked = true
            updateSlide()
        }
    }
}

function changeRadioLeft() {
    const navDots = document.getElementsByName('carouselNavDots')
    
    for (i = 0; i < navDots.length; i++) {
        if (navDots[i].checked && navDots[i].getAttribute('value') > 0){
            document.getElementById(`feedbackCarouselNav${i-1}`).checked = true
            updateSlide()
        } else if (navDots[i].checked && navDots[i].getAttribute('value') == 0) {
            document.getElementById(`feedbackCarouselNav${navDots.length - 1}`).checked = true
            updateSlide()
        }
    }
}

// FAQ --------------------------------------------------------------------------------------------

document.getElementsByName("faqCheckbox").forEach(radio => radio.addEventListener("input", showFaq))
document.body.onload = clearRadios(); 

function showFaq(event) {
    const faqCheckboxs = document.getElementsByName("faqCheckbox")
    
    for (i = 0; i < faqCheckboxs.length; i++) {
        let matchingAnswer = document.getElementById(`faqAnswer${faqCheckboxs[i].value}`)
        let matchingIcon = document.getElementById(`faqIcon${faqCheckboxs[i].value}`)
        let matchingRadio = document.getElementById(`faqCheckbox${faqCheckboxs[i].value}`)

        if (faqCheckboxs[i].checked && event.target.value == faqCheckboxs[i].value){
            matchingAnswer.style.maxHeight = `${matchingAnswer.scrollHeight}px`
            matchingIcon.classList.add("active")
        } else {
            matchingAnswer.style.maxHeight = 0
            matchingIcon.classList.remove("active")
            matchingRadio.checked = false
        }
    }
}

function clearRadios() {
    const faqCheckboxs = document.getElementsByName("faqCheckbox")
    for (i = 0; i < faqCheckboxs.length; i++) {
        if (faqCheckboxs[i].checked){
            faqCheckboxs[i].checked = false
        }
    }
}

// Consultation Booking ---------------------------------------------------------------------------

document.body.onload = inputConsult()
document.getElementById("footerConsult").addEventListener("click", bookConsult)

// Only attaches event listener if the button exists
if (document.getElementById("ctaConsult")) {
    document.getElementById("ctaConsult").addEventListener("click", bookConsult)
}

function bookConsult() {
    localStorage.setItem("consult", "true")
}

function inputConsult() {
    const contactFormSubject = document.getElementById("contactFormSubject")
    const contactFormMessage = document.getElementById("contactFormMessage")
    const contactFormName = document.getElementById("contactFormName")
    if (window.location.href.includes("pages/contact.html") && localStorage.getItem("consult") == "true") {
        contactFormSubject.value = "Consultation"
        contactFormMessage.innerText = "Hi Michelle! I'd love to organise a time with you for a consultation call."
        contactFormName.focus()
        localStorage.removeItem("consult")
    }
}