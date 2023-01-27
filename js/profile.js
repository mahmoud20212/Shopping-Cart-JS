/* Profile */
/* ------------------ */
let getUser = localStorage.getItem('username');
let getEmail = localStorage.getItem('email');
let products = JSON.parse(localStorage.getItem('products')) || productsDB;
let myProducts = products.filter(i => i.isMe === 'Y');

let userNameDom = document.getElementById('username');
let userEmailDom = document.getElementById('email');
let productLength = document.querySelector('#product-length span');


userNameDom.innerHTML = getUser;
userEmailDom.innerHTML = getEmail;
productLength.innerHTML = myProducts.length