function showFaq() {
    const faqRadios = document.getElementsByName("faqRadio")

    for (i = 0; i < faqRadios.length; i++) {
        let matchingAnswer = document.getElementById(`faqAnswer${faqRadios[i].value}`)
        let matchingIcon = document.getElementById(`faqIcon${faqRadios[i].value}`)

        if (faqRadios[i].checked){
            matchingAnswer.style.maxHeight = `${matchingAnswer.scrollHeight}px`
            matchingIcon.classList.add("active")
        } else {
            matchingAnswer.style.maxHeight = 0
            matchingIcon.classList.remove("active")
        }
    }
}

document.getElementsByName("faqRadio").forEach(radio => radio.addEventListener("input", showFaq))

function clearRadios() {
    const faqRadios = document.getElementsByName("faqRadio")
    for (i = 0; i < faqRadios.length; i++) {
        if (faqRadios[i].checked){
            faqRadios[i].checked = false
        }
    }
}

document.body.onload = clearRadios(); 