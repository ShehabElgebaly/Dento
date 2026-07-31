document.addEventListener("DOMContentLoaded", function() {

    const darkModeBtn = document.getElementById("darkModeBtn");

    darkModeBtn.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

    });

});