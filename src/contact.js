document.body.onload = inputConsult()
document.getElementById("footerConsult").addEventListener("click", bookConsult)
if (document.getElementById("ctaConsult")) {
    document.getElementById("ctaConsult").addEventListener("click", bookConsult)
}
// if (document.getElementById("contactFormSubmit")) {
//     document.getElementById("contactFormSubmit").addEventListener("click", clearConsult)
// }

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

// function clearConsult() {
//     const contactForm = document.getElementById("contactForm")
//     if (localStorage.getItem("consult") && contactForm.checkValidity() === true) {
//         localStorage.removeItem("consult")
//     }
// }