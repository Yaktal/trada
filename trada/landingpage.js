const hamburgerMenu = document.querySelector(".bars");

const toggleMobileNavigation = () => {
    hamburgerMenu.classList.toggle("active");
};

(function loadAllEventListeners() {
    hamburgerMenu.addEventListener("click", toggleMobileNavigation);
}) ();

const container = document.querySelector(".container");