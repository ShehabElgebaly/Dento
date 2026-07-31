// About + Statistics Counter

function startCounter() {

    // ================= About =================

    let exp = 0;
    let expText = document.getElementById("exp");

    let interval1 = setInterval(function () {

        exp++;
        expText.innerHTML = exp + "%";

        if (exp == 80) {
            clearInterval(interval1);
        }

    }, 30);


    let equip = 0;
    let equipText = document.getElementById("equip");

    let interval2 = setInterval(function () {

        equip++;
        equipText.innerHTML = equip + "%";

        if (equip == 65) {
            clearInterval(interval2);
        }

    }, 30);


    let staff = 0;
    let staffText = document.getElementById("staff");

    let interval3 = setInterval(function () {

        staff++;
        staffText.innerHTML = staff + "%";

        if (staff == 85) {
            clearInterval(interval3);
        }

    }, 30);



    // ================= Statistics =================

    let experience = 0;
    let experienceText = document.getElementById("experience");

    let interval4 = setInterval(function () {

        experience++;
        experienceText.innerHTML = experience;

        if (experience == 20) {
            clearInterval(interval4);
        }

    }, 100);



    let patients = 0;
    let patientText = document.getElementById("patients");

    let interval5 = setInterval(function () {

        patients++;
        patientText.innerHTML = patients + "+";

        if (patients == 700) {
            clearInterval(interval5);
        }

    }, 5);



    let certificate = 0;
    let certificateText = document.getElementById("certificate");

    let interval6 = setInterval(function () {

        certificate++;
        certificateText.innerHTML = certificate;

        if (certificate == 120) {
            clearInterval(interval6);
        }

    }, 30);



    let dentist = 0;
    let dentistText = document.getElementById("dentist");

    let interval7 = setInterval(function () {

        dentist++;
        dentistText.innerHTML = dentist + "+";

        if (dentist == 40) {
            clearInterval(interval7);
        }

    }, 50);

}


// ================= Scroll =================

let started = false;

window.addEventListener("scroll", function () {

    let section = document.querySelector(".about");

    let sectionTop = section.offsetTop;

    let scroll = window.scrollY;

    let screen = window.innerHeight;

    if (scroll + screen >= sectionTop && started == false) {

        startCounter();

        started = true;

    }

});