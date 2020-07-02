const jumper = document.getElementById("jumper");
const chevronUp = document.getElementById("arrow-up");
const offsetInfo = document.getElementById("offsetY");

const backToTop = () => {
    document.body.scrollTop = 0; // Supports Safari
    document.documentElement.scrollTop = 0; // Supports Chrome, Firefox, IE and Opera
}

jumper.addEventListener("click", () => {
    backToTop();
});

gsap.to(chevronUp, {
    y: -3,
    duration: 0.5,
    ease: "sine",
    yoyo: true,
    repeat: -1
});

window.addEventListener("scroll", () => {
    
    offsetInfo.textContent = `${window.pageYOffset}px`;
    /* Update the current value of page height 200 to be exact value you want for the jump to top container to appear :) */
    if (window.pageYOffset > 200) {
        gsap.to(jumper, {
            visibility: "visible",
            duration: 1,
            ease: "back"
        });
    } else {
        gsap.to(jumper, {
            visibility: "hidden",
            duration: 1,
            ease: "sine"
        });
    }
});