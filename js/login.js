// Step-1: Add Click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step-2: Get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step-3: get password
    // 3.a: set id on html element 
    // 3.b: set the element 
    // 3.c: get the value form the element 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password)

    // This is not a right way. We do it for learning
    //  Step-4: verify email & password
    if(email === 'tr@r.com' && password === 'trpass'){
        window.location.href = 'bank.html'
    }
    else{
        console.log('invalid user')
    }
})