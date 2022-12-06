let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        const navbar = document.getElementById("navbar");
        let currentScrollpos = window.pageYOffset;
        // console.log(currentScrollpos)
        if (prevScrollpos > currentScrollpos) {
            navbar.style.top = "0";
            navbar.style.transition = "0.5s";
            navbar.style.backgroundColor = "rgba(246, 232, 213, 0.5)";
            navbar.style.backdropFilter = "blur(1em)";
        } else if (window.pageYOffset < 5) {
            console.log("0")
            navbar.style.backgroundColor = "none";
            navbar.style.backdropFilter = "0";
        } else {
            navbar.style.top = "-100%";
            navbar.style.transition = "0.5s";
            navbar.style.backgroundColor = "none";
        }

        prevScrollpos = currentScrollpos;

    }