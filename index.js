// step 1 add click evetn handler whit the submit button
document.getElementById('submit-btn').addEventListener('click', function () {
    // step 2: get the email address inside the email input field 
    // always remeber to use .value to get text from an input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    // step 3: get password
    // 3.a: set id one the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // DO NOT VERIFY email password on the client side
    // step-4: verify email and password
    if (email === 'purnoakter11@gmail.com' && password === 'SH12436') {
        window.location.href='bank.html';
    }
    else {
        alert('Invalid User');
    }
}) 