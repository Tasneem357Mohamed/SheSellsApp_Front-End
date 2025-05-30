function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous error messages
    document.getElementById('UserNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmpasswordError').innerText = ''; // Fixed ID here

    // Get form values
    const userName = document.getElementById('UserName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmpassword').value.trim(); // Fixed ID here

    console.log("Validating form...");

    // Validate UserName
    if (userName.length < 2 || userName.length > 20) {
        document.getElementById('UserNameError').innerText = 'UserName must be between 2 and 20 characters.';
        isValid = false;
    }

    // Validate email
    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long.';
        isValid = false;
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.';
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword === '') {
        document.getElementById('confirmpasswordError').innerText = 'Confirm Password is required.'; // Fixed ID here
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmpasswordError').innerText = 'Passwords do not match.'; // Fixed ID here
        isValid = false;
    }

    if (isValid) {
        // Save user data to local storage
        const userData = {
            userName: userName,
            email: email,
            password: password // Note: Storing passwords in local storage is not recommended for security reasons
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Show a popup message
        alert('Registration successful! Your data has been saved.');

        // Redirect after a short delay
        setTimeout(() => {
            window.location.replace("home.html");
        }, 1000); // Adjust the delay as needed
    } else {
        console.log("Validation failed.");
        return false;
    }
}
