function showFaq() {
    const faqRadios = document.getElementsByName("faqRadio")

    for (i = 0; i < faqRadios.length; i++) {
        let matchingAnswer = document.getElementById(`faqAnswer${faqRadios[i].value}`)

        if (faqRadios[i].checked){
            matchingAnswer.style.maxHeight = `${matchingAnswer.scrollHeight}px`
        } else {
            matchingAnswer.style.maxHeight = 0
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