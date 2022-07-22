//-----Forgot password modal------
const forgotPassModalBtn = document.querySelector('.container__log-in-account-text');
const openForgotPassModal = document.querySelector('.forgot-password__modal-overlay');
const ForgotPassModalContainer = document.querySelector('.forgot-password__modal');
// const disableScroll = document.querySelector('body');

// open forgot Password Modal 
forgotPassModalBtn.addEventListener('click', function() {
    openForgotPassModal.classList.toggle('open');
    disableScroll.classList.toggle('disableScrolling');
});

// close forgot modal when click into overlay class
openForgotPassModal.addEventListener('click', function() {
    openForgotPassModal.classList.remove('open');
    disableScroll.classList.remove('disableScrolling');
});
 
// Stop Propagation when click into overlay class
ForgotPassModalContainer.addEventListener('click', function(e) {
    e.stopPropagation();
});

// close btn
for (closeSideModal of closeSideModals) {
    closeSideModal.addEventListener('click', function() {
        openForgotPassModal.classList.remove('open');
        disableScroll.classList.remove('disableScrolling');
    })
}

// validate sign up form in login page 
let fullNameSignUp = document.getElementById('txtFullNameSignup');
let emailAddSignUp = document.getElementById('txtEmailSignup');
let phoneNumSignUp = document.getElementById('txtPhoneNumberSignup');
let dobSignUp = document.getElementById('txtDobSignup');
let pwdSignUp = document.getElementById('txtPwdSignup');
let formSignUp = document.getElementById('container__log-in-create-account');

function validateInput() {
    
    // check fullname - empty
    if (fullNameSignUp.value.trim() === "") {
        onError(fullNameSignUp, "User name cannot be empty!");
    } else {
        onSuccess(fullNameSignUp);
    }

    // check email - empty and valid
    if (emailAddSignUp.value.trim() === "") {
        onError(emailAddSignUp, "Email cannot be empty!");
    } else {
        if (!isvalidEmail(emailAddSignUp.value.trim())) {
            onError(emailAddSignUp, "Email is not valid!")
        } else {
            onSuccess(emailAddSignUp);
        }
    }

    // check phone number - empty and valid
    if (phoneNumSignUp.value.trim() === "") {
        onError(phoneNumSignUp, "Phone number cannot be empty!");
    } else {
        if (!isvalidPhoneNumber(phoneNumSignUp.value.trim())) {
            onError(phoneNumSignUp, "Phone number is not valid!")
        } else {
            onSuccess(phoneNumSignUp);
        }
    }

    // check dob - empty
    if (dobSignUp.value.trim() === "") {
        onError(dobSignUp, "Day of birth cannot be empty!");
    } else {
        onSuccess(dobSignUp);
    }

    // check password - empty
    if (pwdSignUp.value.trim() === "") {
        onError(pwdSignUp, "Password cannot be empty!");
    } else {
        if (pwdSignUp.value.length < 6) {
            onError(pwdSignUp, "Password should be more than 6 character!")
        } else {
            onSuccess(pwdSignUp);
        }
    }
}

document.querySelector('.container__log-in-create-account-btn')
.addEventListener('click', (signup) => {
    signup.preventDefault();
    validateInput();
});


function onSuccess(input) {
    let parent = input.parentElement;
    let msgEle = parent.querySelector("small");
    msgEle.style.visibility = "hidden";
    parent.classList.remove('error');
    parent.classList.add('success');
}

function onError(input, message) {
    let parent = input.parentElement;
    let msgEle = parent.querySelector("small");
    msgEle.style.visibility = "visible";
    msgEle.innerText = message;
    parent.classList.add('error');
    parent.classList.remove('success');
}

function isvalidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} 

function isvalidPhoneNumber(phone) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(phone);
} 