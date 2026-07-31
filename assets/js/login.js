const myForm = document.forms["loginForm"];

myForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = myForm["email"];
    const password = myForm["password"];

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

   const emailMessage = document.getElementById("emailError");
   const passwordMessage = document.getElementById("passwordError");

    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    let isValid = true;

    
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
        passwordMessage.innerHTML = "Password must be at least 8 characters and contain uppercase, lowercase and number.";
        isValid = false;

    } else {

        password.classList.remove("error");
        passwordMessage.innerHTML = "";

    }

    if (isValid) {

       Swal.fire({
  title: "Login Successfully!",
  icon: "success",
  draggable: true
});
        

    }

});