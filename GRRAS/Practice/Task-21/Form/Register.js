const form = document.getElementById('registerForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // પેજ રિફ્રેશ થતું અટકાવશે

    // બધી વેલ્યુ મેળવો
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    // જૂના એરર મેસેજ સાફ કરો
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmError').textContent = '';

    // સીધું if - else if - else ચેક
    if (name === '') {
        document.getElementById('nameError').textContent = 'Enter a Name';
    } 
    else if (email === '' || !email.includes('@')) {
        document.getElementById('emailError').textContent = 'Enter a valid email.';
    } 
    else if (pass.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    } 
    else if (confirmPass !== pass) {
        document.getElementById('confirmError').textContent = 'Passwords do not match.';
    } 
    else {
        // જો બધું સાચું હોય તો
        const successMsg = document.getElementById('successMessage');
        successMsg.textContent = 'Registration successful! Welcome, ' + name;
        successMsg.style.display = 'block';
        form.reset();
    }

});