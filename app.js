const mobileNavBtn = document.querySelector('#mobile-nav-icon');
const mobileLinks = document.querySelector('.navbar-links');
const mainContainer = document.querySelector('.main-container');
const subscribeBtn = document.querySelector('#subscribe-btn');
const subscribeInputBox = document.querySelector('#footer-input');
const sendBtn = document.querySelector('#send-btn');
const viewMenuBtn = document.querySelector('#view-menu-btn');
const afterApplicationMsg = document.getElementById('after-application-msg');
const applicationForm = document.getElementById('application-form');

var candidates = [];

// toggle mobile menu and hide the current page container:

mobileNavBtn.addEventListener('click' , () => {
    
    var mainContainer = document.querySelector('.main-container');

    mobileLinks.classList.toggle('mobile-nav-active');
    mainContainer.classList.toggle('hide');
})

// Subscription button click handler:

subscribeBtn.addEventListener('click' , (e) => {

    e.preventDefault();

    //var subscribeInputBox = document.querySelector('#footer-input');

    if(subscribeInputBox.value === '') {
        alert('Please enter an E-mail address');
    } 
    else {
        subscribeInputBox.value = '';
        subscribeInputBox.placeholder = 'Thank you for subscribing!';
    }
});

// Application form submission handler:

applicationForm.addEventListener('submit' , (event) => {

    event.preventDefault();

    var fullName = document.getElementById('full-name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone-number').value;
    var selectedRole = document.getElementById('select-box').value;
    
    var candidate = {

        name: fullName,
        emailAddress: email,
        phoneNum: phoneNumber,
        role: selectedRole
    };

    //console.log('Full Name:', fullName);
    //console.log('Email:', email);
    //console.log('Phone Number:', phoneNumber);
    //console.log('Selected Role:', selectedRole);

    // enter candidate to candidates array
    candidates.push(candidate);

    // Clean form inputs
    document.getElementById('full-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone-number').value = '';
    document.getElementById('select-box').value = '';

    // display confirmation massage
    afterApplicationMsg.style.visibility = 'visible';
}) 
