document.getElementById("more-info-btn").addEventListener("click", function() {
    const moreInfo = document.getElementById("more-info");
    moreInfo.classList.toggle("d-none");
    if (moreInfo.classList.contains("d-none")) {
        this.textContent = "Read More";
    } else {
        this.textContent = "Read Less";
    }
});


    // Smooth scrolling for the scroll-down button on the hero image
    const scrollDownArrow = document.getElementById('scrollDownArrow');

    scrollDownArrow.addEventListener('click', function () {
        const nextSection = document.querySelector('.container');
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll-to-top button functionality
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", () => {
        // Show or hide button based on scroll position
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });  

document.addEventListener('DOMContentLoaded', function () {
    // Existing tab fade effect, scroll to top, etc. remains as previously added

    // Dropdown menu and dimming overlay functionality
    const profileIcon = document.getElementById('profileIcon');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dimmingOverlay = document.getElementById('dimmingOverlay');

    // Show dropdown and dim background on hover
    profileIcon.addEventListener('mouseenter', function () {
        dropdownMenu.style.display = 'block';
        dimmingOverlay.style.display = 'block';
    });

    // Hide dropdown and undim background when leaving dropdown or overlay
    dimmingOverlay.addEventListener('click', function () {
        dropdownMenu.style.display = 'none';
        dimmingOverlay.style.display = 'none';
    });

    dropdownMenu.addEventListener('mouseleave', function () {
        dropdownMenu.style.display = 'none';
        dimmingOverlay.style.display = 'none';
    });
});
