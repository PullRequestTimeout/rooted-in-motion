// IntersectionObserver ---------------------------------------------------------------------------

const fadeIn = document.querySelectorAll(".fade-in")

const options = {
    root: null, //This specifies that it is the viewport that is intersecting. A root ancestor can be specified also.
    threshhold: 1, //This is the percentage of the target element that is intersecting, expressed as a 0.0 to 1.0 == 0% to 100%.
    rootMargin: "-50px", //Works like CSS margin (but needs to be expressed in percentage or px, as a string).
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return
        } else {
            entry.target.classList.add("fade-animation")
            
            // entry.target.classList.toggle("fade-animation")
            // Try toggling the animation every time the images enter into the page, might be annoying, 
            // might need some tweaking to get the CSS to fire on the way in and out.
        }
        
})
}, options)

// Attaches the observer to each element returned by fadeIn, which is all elements with 'fade-in' class.
fadeIn.forEach(fade => {
    observer.observe(fade)
})

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