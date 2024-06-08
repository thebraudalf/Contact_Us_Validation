const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const emailAddress = document.getElementById("email-address").value.trim();
    const queryType = document.querySelector("Input[name = 'query-type']:checked");
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent").checked;

    const formAlert = document.body.querySelectorAll(".form-alert");

    isValid = true;

    // First Name Validation
    if (firstName === "") {
        isValid = false;

        document.body.querySelector("#first-name + .form-alert").style.display = "block";
        document.body.querySelector("#first-name").style.border = "1px solid var(--red)";

    } else {
        document.body.querySelector("#first-name + .form-alert").style.display = "none";
        document.body.querySelector("#first-name").style.border = "1px solid var(--medium-grey)";
    };

    // Last Name Validation
    if (lastName === "") {
        isValid = false;

        document.body.querySelector("#last-name + .form-alert").style.display = "block";
        document.body.querySelector("#last-name").style.border = "1px solid var(--red)";
    } else {
        document.body.querySelector("#last-name + .form-alert").style.display = "none";
        document.body.querySelector("#last-name").style.border = "1px solid var(--medium-grey)";
    };

    // Email Validation
    if (!isValidEmail(emailAddress)) {
        isValid = false;

        document.body.querySelector("#email-address + .form-alert").style.display = "block";
        document.body.querySelector("#email-address").style.border = "1px solid var(--red)";
    } else {
        document.body.querySelector("#email-address + .form-alert").style.display = "none";
        document.body.querySelector("#email-address").style.border = "1px solid var(--medium-grey)";
    };

    // Query-Type Validation
    if (!queryType) {
        isValid = false;

        document.body.querySelector(".radio-input + .form-alert").style.display = "block";
    } else {
        document.body.querySelector(".radio-input + .form-alert").style.display = "none";
    };

    // Message Validation
    if (message === "") {
        isValid = false;

        document.body.querySelector("#message + .form-alert").style.display = "block";
        document.body.querySelector("#message").style.border = "1px solid var(--red)";
    } else {
        document.body.querySelector("#message + .form-alert").style.display = "none";
        document.body.querySelector("#message").style.border = "1px solid var(--medium-grey)";
    };

    // Consent Validation
    if (!consent) {
        isValid = false;

        formAlert[5].classList.add("form-error");
    } else {
        formAlert[5].classList.remove("form-error");
    };

    // Form is valid
    if (isValid) {
        successMessage.classList.add("active");
        form.reset();
    }

});

// Email Validation Function
function isValidEmail(emailAddress) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailAddress.trim());
}

