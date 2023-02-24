//|| IntersectionObserver ----------------------------------------------------------------------------------------------------------------

const fadeIn = document.querySelectorAll("fade-in");

const options = {
    root: null, //This specifies that it is the viewport that is intersecting. A root ancestor can be specified also.
    threshhold: 0, //This is the percentage of the target element that is intersecting, expressed as a ratio.
    rootMargin: "0px", //Works like CSS margin (but needs to be expressed in percentage or px, as a string).
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("fade-animation");
        };
        // console.log(entry);
        // entry.target.classList.add("fade-animation");
        // entry.target.classList.toggle("fade-animation");
        // Try toggling the animation every time the images enter into the page, might be annoying, 
        // might need some tweaking to get the CSS to fire on the way in and out.
});
}, options);

// Function could be extracted and fired as a callback function, and the function build with ES6 practices.

// Attaches the "fadeIn" observer to each img element returned with the querySelector
fadeIn.forEach(img => {
    observer.observe(fadeIn);
});

// Still needs to be tested. "fade-in" css selector is a marker to attach animation to element, "fade-animation" will actually trigger the effect.
// Naming could be refined.

//|| Nav Bar Retracton ----------------------------------------------------------------------------------------------------------------

const toggleShowNav = () => {
    
}

document.getElementById("navbar").addEventListener("scroll", toggleShowNav)