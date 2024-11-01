// Open Modal
function openModal(element) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "flex";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

// Close Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will respond shortly.");
    this.reset();
});
