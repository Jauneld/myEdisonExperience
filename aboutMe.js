document.getElementById("more-info-btn").addEventListener("click", function() {
    const moreInfo = document.getElementById("more-info");
    moreInfo.classList.toggle("d-none");
    if (moreInfo.classList.contains("d-none")) {
        this.textContent = "Read More";
    } else {
        this.textContent = "Read Less";
    }
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
