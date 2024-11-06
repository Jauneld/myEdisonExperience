document.getElementById("more-info-btn").addEventListener("click", function() {
    const moreInfo = document.getElementById("more-info");
    moreInfo.classList.toggle("d-none");
    if (moreInfo.classList.contains("d-none")) {
        this.textContent = "Read More";
    } else {
        this.textContent = "Read Less";
    }
});
