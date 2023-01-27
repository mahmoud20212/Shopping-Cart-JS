/* Cart */
/* ------------------ */
let productsDom = document.querySelector('.products');
let noProductsDom = document.querySelector('.no-products');

// drawCartProductsUI function to draw after remove product from cart
function drawCartProductsUI(allProducts=[]){
    if (!localStorage.getItem('products')) {
        noProductsDom.style.display = 'block';
    } else {
        if (JSON.parse(localStorage.getItem('products')).length === 0) {
            noProductsDom.style.display = 'block';
        }
    }
    let products = JSON.parse(localStorage.getItem('products')) || allProducts;
    let productsUI = products.map((item) => {
        return `
            <div class="product-item">
                <img src="${item.imageUrl}" alt="${item.title}" class="product-item-image">
                <div class="product-item-desc">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <span>Price: $${item.price}</span>
                    <br>
                    <span>Quntity: ${item.quntity}</span>
                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove From Cart</button>
                </div>
            </div>
        `;
    });
    productsDom.innerHTML = productsUI.join('');
}
drawCartProductsUI();

// removeFromCart function
function removeFromCart(id) {
    let productsInCart = localStorage.getItem('products');
    if (productsInCart) {
        let items = JSON.parse(productsInCart);
        let filterItems = items.filter(item => item.id !== id);
        localStorage.setItem('products', JSON.stringify(filterItems));
        drawCartProductsUI(filterItems);
    }
}