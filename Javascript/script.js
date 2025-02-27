// Auto Slide Banner
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".banner img");
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
showSlides();

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let destination = document.getElementById("destination").value.trim();
    let message = document.getElementById("form-message");

    if (name === "" || email === "" || destination === "") {
        message.style.color = "red";
        message.textContent = "All fields are required!";
    } else {
        message.style.color = "green";
        message.textContent = "Form submitted successfully!";
    }
});
