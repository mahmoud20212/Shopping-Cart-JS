/* Favorite handling file */
/* ------------------ */
let productsDom = document.querySelector('.products');
let noProductsDom = document.querySelector('.no-products');

function drawFavoriteProductsUI(allProducts=[]){
    if (!localStorage.getItem('favorite')) {
        noProductsDom.style.display = 'block';
    } else {
        if (JSON.parse(localStorage.getItem('favorite')).length === 0) {
            noProductsDom.style.display = 'block';
        }
    }
    let products = JSON.parse(localStorage.getItem('favorite')) || allProducts;
    let productsUI = products.map((item) => {
        return `
            <div class="product-item">
                <img src="${item.imageUrl}" alt="${item.title}" class="product-item-image">
                <div class="product-item-desc">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <span>Price: ${item.price}$</span>
                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onclick="removeFromFavorite(${item.id})">Remove From Favorite</button>
                </div>
            </div>
        `;
    });
    productsDom.innerHTML = productsUI.join('');
}
drawFavoriteProductsUI();

function removeFromFavorite(id) {
    let productsInFavorite = localStorage.getItem('favorite');
    if (productsInFavorite) {
        let productsAll = JSON.parse(localStorage.getItem('all-products'));
        let items = JSON.parse(productsInFavorite);
        let removedFromProducts = productsAll.map(item => {
            if (item.id === id) {
                item.liked = false;
            }
            return item;
        });
        let filterItems = items.filter(item => item.id !== id);
        localStorage.setItem('favorite', JSON.stringify(filterItems));
        localStorage.setItem('all-products', JSON.stringify(removedFromProducts));
        drawFavoriteProductsUI(filterItems);
    }
}