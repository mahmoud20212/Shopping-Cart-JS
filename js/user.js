/* User handling file */
/* ------------------ */
let userInfo = document.querySelector('#user-info');
let userDom = document.querySelector('#user');
let links = document.querySelector('#links');
let logoutBtn = document.querySelector('#logout');

let username = localStorage.getItem('username');
if (username) {
    links.remove();
    userInfo.style.display = 'flex';
    userDom.innerHTML = '<i class="fa-regular fa-circle-user user-icon"></i> ' + username;
}

logoutBtn.addEventListener('click', function(){
    localStorage.clear()
    setTimeout(function(){
        window.location = 'login.html';
    }, 1500);
});

// Settings Menu
let settings = document.querySelector('.settings');
settings.addEventListener('click', function(){
    settings.classList.toggle('active');
});