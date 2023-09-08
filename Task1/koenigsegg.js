document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
        const scrollY = window.scrollY;

        if (scrollY > lastScrollY) {
           
            if (!header.classList.contains("sticky-header")) {
                header.classList.add("sticky-header");
            }
        } else {
           
            if (header.classList.contains("sticky-header")) {
                header.classList.remove("sticky-header");
            }
        }

        lastScrollY = scrollY;
        ticking = false;
    }

  
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    
    updateHeader();

    
    window.addEventListener("scroll", requestTick);
});
