document.addEventListener("DOMContentLoaded", function () {
    // Highlight active navigation link
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });

    // File upload preview
    const fileInput = document.getElementById("fileUpld");
    const fileLabel = document.querySelector("label[for='fileUpld']");

    fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
            fileLabel.textContent = Selected File: ${fileInput.files[0].name};
        }
    });

    // Flash message auto-dismiss
    const messages = document.querySelector(".messages");
    if (messages) {
        setTimeout(() => {
            messages.style.display = "none";
        }, 3000);
    }
});