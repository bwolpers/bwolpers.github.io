document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");
    const errorLog = document.getElementById("error-log");

    console.log("Submit button clicked");
    contactForm.addEventListener("submit", function (e) {
        console.log("Submit button clicked"); 
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        errorLog.innerHTML = "";
        errorLog.style.display = "none";

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
            errorLog.style.display = "block";
            errorLog.innerHTML = "Please fill in all the required fields.";
        } else {
            const emailParams = {
                name: name,
                email: email,
                message: message,
            };

            emailjs.send("service_3wxjsii", "template_2iqluli", emailParams, "-Xc4fN7tii3UVQ27x")
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    successMessage.style.display = "block";
                    errorMessage.style.display = "none";
                    contactForm.reset();
                }, function (error) {
                    console.log("EmailJS error:", error); 
                    errorMessage.style.display = "block";
                    successMessage.style.display = "none";
                    errorLog.style.display = "block";
                    errorLog.innerHTML = "An error occurred while sending the email. Please try again later.";
                });
        }
    });
});
