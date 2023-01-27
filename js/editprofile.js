/* Edit profile */
/* ------------------ */
let getUser = localStorage.getItem('username');
let getEmail = localStorage.getItem('email');

let userInput = document.getElementById('change-name');
let userEmailInput = document.getElementById('change-email');
let editForm = document.getElementById('edit-profile-form');

userInput.value = getUser;
userEmailInput.value = getEmail;

editForm.addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.setItem('username', userInput.value);
    localStorage.setItem('email', userEmailInput.value);
    window.location = 'profile.html';
})