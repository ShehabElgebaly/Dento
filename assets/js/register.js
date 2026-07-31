const myForm = document.forms["registerForm"];

myForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullName = myForm["fullName"];
    const email = myForm["email"];
    const password = myForm["password"];
    const confirmPassword = myForm["confirmPassword"];

    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirmPassword.value.trim();

    const nameMessage = document.getElementById("nameError");
    const emailMessage = document.getElementById("emailError");
    const passwordMessage = document.getElementById("passwordError");
    const confirmMessage = document.getElementById("confirmError");

    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    let isValid = true;

    
    if (fullNameValue === "") {

        fullName.classList.add("error");
        nameMessage.innerHTML = "Full name is required.";
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

    
    if (passwordValue === "") {

        password.classList.add("error");
        passwordMessage.innerHTML = "Password is required.";
        isValid = false;

    } else if (!regExPass.test(passwordValue)) {

        password.classList.add("error");
        passwordMessage.innerHTML = "Password must contain uppercase, lowercase, number and be at least 8 characters.";
        isValid = false;

    } else {

        password.classList.remove("error");
        passwordMessage.innerHTML = "";

    }

    
    if (confirmValue === "") {

        confirmPassword.classList.add("error");
        confirmMessage.innerHTML = "Confirm password is required.";
        isValid = false;

    } else if (confirmValue !== passwordValue) {

        confirmPassword.classList.add("error");
        confirmMessage.innerHTML = "Passwords do not match.";
        isValid = false;

    } else {

        confirmPassword.classList.remove("error");
        confirmMessage.innerHTML = "";

    }

    if (isValid) {

        Swal.fire({
  title: "Account Created Successfully!",
  icon: "success",
  draggable: true
});

    }

});