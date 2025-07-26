function validateForm() {
    // Clear previous error messages
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters.';
        isValid = false;
    }

    return isValid;
}
