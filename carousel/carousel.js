const slideArray = Array.from(document.getElementById('feedbackCarousel').children);

const updateSlide = () => {
    const navDots = document.getElementsByName('carouselNavDots');
    
    for (i = 0; i < navDots.length; i++) {
        if (navDots[i].checked){
            let j = navDots[i].value;
            slideArray[j].classList.remove('hide');
            
            const navDotAray = Array.from(navDots);
            let newArray = navDotAray.filter(value => value !== navDots[i]);
            
            slideArray[newArray[0].getAttribute("value")].classList.add('hide');
            slideArray[newArray[1].getAttribute("value")].classList.add('hide');


        }
    }
}

document.getElementsByName("carouselNavDots").forEach(element => element.addEventListener("input", updateSlide));

// Left and right buttons
// const leftNav = document.getElementById('feedbackCarouselNavLeft');
// const rightNav  = document.getElementById('feedbackCarouselNavRight');

const changeRadioRight = () => {
    const navDots = document.getElementsByName('carouselNavDots');
    // console.log(navDots.length);
    for (i = 0; i < navDots.length; i++) {
        if (navDots[i].checked && navDots[i].getAttribute('value') < navDots.length - 1){
            document.getElementById(`feedbackCarouselNav${i+1}`).checked = true;
            updateSlide();
        } else if (navDots[i].getAttribute('value') == navDots.length - 1) {
            document.getElementById('feedbackCarouselNav0').checked = true;
            updateSlide();
        }
    }
}

// const changeRadioLeft = () => {
//     const navDots = document.getElementsByName('carouselNavDots');
//     for (i = 0; i < navDots.length; i++) {
//         if (navDots[i].checked && navDots[i].getAttribute('value') > 0){
//             console.log("true")
//             document.getElementById(`feedbackCarouselNav${i-1}`).checked = true;
//             updateSlide();
//         } else if (navDots[i].getAttribute('value') == 0) {
//             console.log("0")
//             document.getElementById(`feedbackCarouselNav2`).checked = true;
//             updateSlide();
//         }
//     }
// }

// document.getElementById('feedbackCarouselNavLeft').addEventListener("click", changeRadioLeft);
document.getElementById('feedbackCarouselNavRight').addEventListener("click", changeRadioRight);

