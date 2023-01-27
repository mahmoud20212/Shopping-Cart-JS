/* Login */
/* ------------------ */
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign-in");

let getUsername = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");
loginBtn.addEventListener("click", login);

function login (e) {
    e.preventDefault();
    if (!username.value || !password.value) {
        alert("Please Enter Your Information");
    } else {
        if (
            getUsername &&
            getUsername.trim() === username.value.trim() &&
            getPassword &&
            getPassword === password.value
        ) {
            setTimeout(function () {
                window.location = "index.html";
            }, 1500);
        } else {
            alert("Error Username and Password");
        }
    }
}