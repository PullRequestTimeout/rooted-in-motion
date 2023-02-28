//|| IntersectionObserver ----------------------------------------------------------------------------------------------------------------

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