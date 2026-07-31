document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function (booking) {

        booking.preventDefault();
        let isCorrect = true;
        const allErrorSpans = document.querySelectorAll('.error-message, .error-booking');
        for (let i = 0; i < allErrorSpans.length; i++) {
            allErrorSpans[i].innerText = '';
        }
        const boxes = document.querySelectorAll('.form-control');
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.border = '';
        }

        const name = document.getElementById('name');
        const phone = document.getElementById('phone');
        const email = document.getElementById('email');
        const address = document.getElementById('address');
        const schedule1 = document.getElementById('schedule1');
        const schedule2 = document.getElementById('schedule2');

        const namePattern = /^[a-zA-Z\u0600-\u06FF\s]+$/;
        if (name.value.trim() === '') {
            showError(name, 'nameError', 'Please enter your name');
            isCorrect = false;
        }
        else if (name.value.trim().length < 2) {
            showError(name, 'nameError', 'Name must be at least 2 characters');
            isCorrect = false;
        }
        else if (!namePattern.test(name.value.trim())) {
            showError(name, 'nameError', 'Name must contain letters only');
            isCorrect = false;
        }

        const phonePattern = /^01[0-2,5]{1}[0-9]{8}$/;
        if (phone.value.trim() === '') {
            showError(phone, 'phoneError', 'Please enter your phone number');
            isCorrect = false;
        } 
        else if (!phonePattern.test(phone.value.trim())) {
            showError(phone, 'phoneError', 'Invalid phone number');
            isCorrect = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'emailError', 'Please enter your email');
            isCorrect = false;
        } 
        else if (!emailPattern.test(email.value.trim())) {
            showError(email, 'emailError', 'Invalid email address');
            isCorrect = false;
        }

        if (address.value.trim() === '') {
            showError(address, 'addressError', 'Please enter your address');
            isCorrect = false;
        }

        if (schedule1.value === '') {
            showError(schedule1, 'schedule1Error', 'Please choose Day');
            isCorrect = false;
        }

        if (schedule2.value === '') {
            showError(schedule2, 'schedule2Error', 'Please choose Time');
            isCorrect = false;
        }

        if (isCorrect) {
            Swal.fire({
                title: 'Booking Successful!',
                text: 'Your appointment has been booked successfully.',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0891b2',
                background: '#ffffff',
                color: '#333'
            }).then(() => {
                form.reset();
            });

        }
    });

    function showError(field, errorId, message) {
        field.style.border = '1px solid red';
        const errorEl = document.getElementById(errorId);
        if (errorEl) {
            errorEl.innerText = message;
            errorEl.style.color = 'red';
        }
    }

    const allFields = document.querySelectorAll('.form-control');
    for (let i = 0; i < allFields.length; i++) {
        allFields[i].addEventListener('input', function () {
            this.style.border = '';
            const errorEl = document.getElementById(this.id + 'Error');
            if (errorEl) {
                errorEl.innerText = '';
            }
        });
    }

});

