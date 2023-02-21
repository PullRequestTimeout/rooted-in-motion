const vals = [1,2,3,4,5,6]

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

document.getElementsByName("faqCheckbox").forEach(radio => radio.addEventListener("input", showFaq))

function clearRadios() {
    const faqCheckboxs = document.getElementsByName("faqCheckbox")
    for (i = 0; i < faqCheckboxs.length; i++) {
        if (faqCheckboxs[i].checked){
            faqCheckboxs[i].checked = false
        }
    }
}

document.body.onload = clearRadios(); 