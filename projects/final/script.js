const hamburgerInput = document.getElementById("hamburger-input");
const nav = document.getElementById("nav");

hamburgerInput.addEventListener("change", () => {
    if (hamburgerInput.checked) {
        nav.style.flexDirection = "row";
    } else {
        nav.style.flexDirection = "column";
    }
}, { passive: true });

