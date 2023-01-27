/* Cart Menu handling file */
/* ------------------ */
let cartProductDom = document.querySelector('.carts-products ul');
let badge = document.querySelector('.badge');
let shopCartIcon = document.querySelector('#shop-cart');
let cartProductMenu = document.querySelector('.carts-products');

// Check product in local storage
(function cartMenuData () {
    addedItem = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    if(addedItem){
        addedItem.map(item => {
            cartProductDom.innerHTML += `<li><span style="font-weight: bold;">${item.title}</span> <span class="badge-quntity">${item.quntity}</span></li>`;
        })
        badge.style.display = 'block';
        badge.innerHTML = addedItem.length;
    }
})();

// Toggle open & close function
function openCartMenu () {
    if (cartProductDom.innerHTML) {
        if (cartProductMenu.style.display == 'block') {
            cartProductMenu.style.display = 'none';
        } else {
            cartProductMenu.style.display = 'block';
        }
    }
}
// Event for cart menu
shopCartIcon.addEventListener('click', openCartMenu);