const contactForm = document.forms["contactForm"];

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName = contactForm["fullName"];
    const email = contactForm["email"];
    const message = contactForm["message"];

    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    const nameMessage = document.getElementById("nameError");
    const emailMessage = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    
    if (fullNameValue === "") {
        fullName.classList.add("error");
        nameMessage.innerHTML = "Name is required.";
        isValid = false;
    } else {
        fullName.classList.remove("error");
        nameMessage.innerHTML = "";
    }

    if (emailValue === "") {
        email.classList.add("error");
        emailMessage.innerHTML = "Email is required.";
        isValid = false;
    } else if (!regExEmail.test(emailValue)) {
        email.classList.add("error");
        emailMessage.innerHTML = "Enter a valid email.";
        isValid = false;
    } else {
        email.classList.remove("error");
        emailMessage.innerHTML = "";
    }

    if (messageValue === "") {
        message.classList.add("error");
        messageError.innerHTML = "Message is required.";
        isValid = false;
    } else if (messageValue.length < 10) {
        message.classList.add("error");
        messageError.innerHTML = "Message must be at least 10 characters.";
        isValid = false;
    } else {
        message.classList.remove("error");
        messageError.innerHTML = "";
    }

    if (isValid) {
        Swal.fire({
            title: "Message Sent Successfully!",
            icon: "success",
            draggable: true
        });

        contactForm.reset();
    }

});