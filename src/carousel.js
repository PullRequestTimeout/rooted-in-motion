const updateSlide = () => {
    const navDots = document.getElementsByName('carouselNavDots');
    const slideArray = Array.from(document.getElementById('feedbackCarousel').children);
    for (i = 0; i < navDots.length; i++) {
        if (navDots[i].checked){
            let j = parseInt(navDots[i].value);

            //  Current Animation --------------------------
            const navDotAray = Array.from(navDots);
            let newArray = navDotAray.filter(value => value !== navDots[i]);

            slideArray[j].classList.remove('hide');
            slideArray[newArray[0].getAttribute("value")].classList.add('hide');
            slideArray[newArray[1].getAttribute("value")].classList.add('hide');
            // ---------------------------------------------
            

            // Begin new animation -------------------------
            // console.log(`currentIndex: ${j}`);
            // let currentSlide = document.getElementById(`carouselContent${j}`);
            // let left;
            // let right;
            
            // currentSlide.classList.remove("fade-out-left", "fade-out-right");

            // // Logs left and right of the current slide index
            // if (j == 0) {
            //     // console.log(`Left: ${slideArray.length - 1}`)
            //     left = document.getElementById(`carouselContent${slideArray.length - 1}`);
            //     console.log(`Left: ${left}`);
            //     left.classList.add('fade-out-right');
            // } else if (j > 0) {
            //     // console.log(`Left: ${j - 1}`);
            //     left = document.getElementById(`carouselContent${j - 1}`)
            //     console.log(`Left: ${left}`);
            //     left.classList.add('fade-out-right');
            // }
            

            // if (j == slideArray.length - 1) {
            //     // console.log(`Right: ${0}`);
            //     right = document.getElementById(`carouselContent${0}`)
            //     console.log(`Right: ${right}`);
            //     left.classList.add('fade-out-left');
            // } else if (j < slideArray.length - 1) {
            //     // console.log(`Right: ${j + 1}`);
            //     right = document.getElementById(`carouselContent${j + 1}`)
            //     console.log(`Right: ${right}`);
            //     left.classList.add('fade-out-left');
            // }

            // --------------------------------------------

        }
    }
}

document.getElementsByName("carouselNavDots").forEach(element => element.addEventListener("input", updateSlide));


const changeRadioRight = () => {
    const navDots = document.getElementsByName('carouselNavDots');
    
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

const changeRadioLeft = () => {
    const navDots = document.getElementsByName('carouselNavDots');
    
    for (i = 0; i < navDots.length; i++) {
        if (navDots[i].checked && navDots[i].getAttribute('value') > 0){
            document.getElementById(`feedbackCarouselNav${i-1}`).checked = true;
            updateSlide();
        } else if (navDots[i].checked && navDots[i].getAttribute('value') == 0) {
            document.getElementById(`feedbackCarouselNav${navDots.length - 1}`).checked = true;
            updateSlide();
        }
    }
}

// document.body.onload = changeRadioRight(), setInterval(changeRadioRight, 10000)

document.getElementById('feedbackCarouselNavLeft').addEventListener("click", changeRadioLeft);
document.getElementById('feedbackCarouselNavRight').addEventListener("click", changeRadioRight);

document.getElementById("feedbackCarouselNav0").checked = true