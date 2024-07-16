document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#mobileMenuButton");
    const secondNav = document.querySelector(".second-nav");
    const body = document.body;
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");

    // Add hidden class if width is less than 768px
    if (window.innerWidth < 768) {
        secondNav.classList.add("hidden");
    }

    menuButton.addEventListener("click", () => {
        secondNav.classList.toggle("hidden");
        body.classList.toggle("no-scroll", !secondNav.classList.contains("hidden"));
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
    });

    // Handle window resize event
    window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
            secondNav.classList.add("hidden");
            body.classList.remove("no-scroll");
            menuIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
        } else {
            secondNav.classList.remove("hidden");
            body.classList.remove("no-scroll");
            menuIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
        }
    });
});
