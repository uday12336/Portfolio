// Modal elements
const signInModal = document.getElementById('signInModal');
const signUpModal = document.getElementById('signUpModal');

// Buttons to open modals
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');

// Close buttons
const closeSignIn = document.getElementById('closeSignIn');
const closeSignUp = document.getElementById('closeSignUp');

// Open Sign In modal
signInBtn.addEventListener('click', () => {
    signInModal.style.display = 'flex';
});

// Open Sign Up modal
signUpBtn.addEventListener('click', () => {
    signUpModal.style.display = 'flex';
});

// Close Sign In modal
closeSignIn.addEventListener('click', () => {
    signInModal.style.display = 'none';
});

// Close Sign Up modal
closeSignUp.addEventListener('click', () => {
    signUpModal.style.display = 'none';
});

// Close modals on outside click
window.addEventListener('click', (event) => {
    if (event.target === signInModal) {
        signInModal.style.display = 'none';
    }
    if (event.target === signUpModal) {
        signUpModal.style.display = 'none';
    }
});