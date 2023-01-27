/*  
    User Products file:
    => View all products of the user who created them
    => Can edit product
    => Can delete product
*/
/* ------------------ */
let productsDom = document.querySelector('.products');
let noProductsDom = document.querySelector('.no-products');

let drawMyProductsUI;
(drawMyProductsUI = function (products=[]){
    let myProducts = products.filter(i => i.isMe === 'Y');
    if (myProducts.length != 0) {
        
        let productsUI = myProducts.map((item) => {
            return `
                <div class="product-item" style="border: ${item.isMe === 'Y' ? '1px solid #3498db' : ''}">
                    <img src="${item.imageUrl}" alt="${item.title}" class="product-item-image">
                    <div class="product-item-desc">
                        <a href="#" onclick="saveItemData(${item.id})">${item.title}</a>
                        <p>${item.desc}</p>
                        <span>Price: ${item.price}$</span>
                    </div>
                    <div class="product-item-actions">
                        <button onclick="editProduct(${item.id})" style="background-color: #333; margin-bottom: 5px;" class="add-to-cart">Edit</button>
                        <button onclick="deleteProduct(${item.id})" style="background-color: #e74c3c; margin-bottom: 5px;" class="add-to-cart">Delete</button>
                    </div>
                </div>
            `;
        });
        productsDom.innerHTML = productsUI.join('');
    } else {
        noProductsDom.style.display = 'block';
    }
})(JSON.parse(localStorage.getItem('all-products')) || productsDB);

// Edit Product function
function editProduct(id) {
    localStorage.setItem('edit-product', id);
    window.location = 'edit.html';
}

// Delete Product function
function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem('all-products')) || productsDB;
    let myProducts = products.filter(i => i.isMe === 'Y');
    let filtered = myProducts.filter(i => i.id !== id);
    let clickedItem = myProducts.find(i => i.id === id);
    products = products.filter(i => i.id !== clickedItem.id);
    localStorage.setItem('all-products', JSON.stringify(products));
    drawMyProductsUI(filtered);
}