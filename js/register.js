/* Register */
/* ------------------ */
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let registerBtn = document.querySelector('#sign-up');

registerBtn.addEventListener("click", register);

function register (e) {
    e.preventDefault();
    if(!username.value || !email.value || !password.value){
        alert('Please Enter Your Information');
    } else {
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        setTimeout(function(){
            window.location = 'login.html';
        }, 1500);
    }
}