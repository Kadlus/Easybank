const getHamburger = document.getElementById("respo-icon");
const mobileNav = document.getElementById("mobile-nav");
const backdrop = document.getElementById("backdrop");

getHamburger.addEventListener("click", function () {
    getHamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
    backdrop.classList.toggle("active");

    if (getHamburger.classList.contains("active")) {
        getHamburger.src = "images/icon-close.svg";  // Change to close icon
    } else {
        getHamburger.src = "images/icon-hamburger.svg";  // Change back to hamburger icon
    }
});

// Close the mobile menu when clicking on the backdrop
backdrop.addEventListener("click", function () {
    getHamburger.classList.remove("active");
    mobileNav.classList.remove("active");
    backdrop.classList.remove("active");
    getHamburger.src = "images/icon-hamburger.svg";  // Reset to hamburger icon
});
