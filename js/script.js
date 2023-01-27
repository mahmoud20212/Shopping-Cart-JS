/* main js file */
/* ------------------ */
// Products
let productsDom = document.querySelector('.products');
let addedItem, products;

// Check localStorage in load index page
if (!JSON.parse(localStorage.getItem('all-products'))) {
    localStorage.setItem('all-products', JSON.stringify(productsDB));
    products = productsDB;
} else {
    products = JSON.parse(localStorage.getItem('all-products'));
}

// drawProductsUI function
let drawProductsUI;
(drawProductsUI = function (products=[]){
    let productsUI = products.map((item) => {
        return `
            <div class="product-item" style="border: ${item.isMe === 'Y' ? '1px solid #3498db' : ''}">
                <img src="${item.imageUrl}" alt="${item.title}" class="product-item-image">
                <div class="product-item-desc">
                    <a href="#" onclick="saveItemData(${item.id})">${item.title}</a>
                    <p>${item.desc}</p>
                    <span>Price: ${item.price}$</span>
                </div>
                <div class="product-item-actions">
                    ${item.isMe === 'Y' ? '<button onclick="editProduct(' + item.id + ')" style="background-color: #333; margin-bottom: 5px;" class="add-to-cart">Edit</button>' : ''}
                    <button class="add-to-cart" onclick="addToCart(${item.id})">Add To Cart</button>
                    <i style="color: ${ item.liked === true ? 'red': '' }" class="fa-regular fa-heart fa-lg favorite" onclick="addToFavorite(${item.id})"></i>
                </div>
            </div>
        `;
    });
    productsDom.innerHTML = productsUI.join('');
})(JSON.parse(localStorage.getItem('all-products')) || products);

// Add to cart function
function addToCart(id){
    if (username) {
        products = JSON.parse(localStorage.getItem('all-products')) || products;
        let product = products.find(item => item.id === id); // => return object
        let isProductInCart = addedItem.some(item => item.id === product.id);
        
        // Check in cart
        if(isProductInCart){
            addedItem.map(p => {
                if (p.id === product.id) p.quntity += 1;
                return p;
            });
        } else {
            addedItem.push(product);
        }
        
        // UI
        cartProductDom.innerHTML = '';
        addedItem.forEach(item => {
            cartProductDom.innerHTML += `<li><span style="font-weight: bold;">${item.title}</span> <span class="badge-quntity">${item.quntity}</span></li>`;
        });
        
        // Save Data
        localStorage.setItem('products', JSON.stringify(addedItem));

        // Add counter of items
        let cartProductItems = document.querySelectorAll('.carts-products ul li');
        badge.style.display = 'block';
        badge.innerHTML = cartProductItems.length;
    } else {
        window.location = 'login.html';
    }
}

// getUniqueArr function
function getUniqueArr(arr , filterType) {
    let unique = arr.map(item => item[filterType])
                    .map((item, index, final) => final.indexOf(item) === index && index)
                    .filter(item => arr[item])
                    .map(item => arr[item]);
    return unique
}

// save id product function
function saveItemData(id){
    localStorage.setItem('productId', id);
    window.location = './detail.html'
}

// search function
let input = document.getElementById('search');
input.addEventListener('keyup', function(event){
    // call search function
    search(event.target.value.trim(), JSON.parse(localStorage.getItem('all-products')));
    
    // if value empty
    if (event.target.value.trim() === ''){
        drawProductsUI(products);
    }
})

// search function
function search(title, myArray){
    let arr = myArray.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProductsUI(arr);
}

// add to favorite function
let favoriteItem = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : [];
function addToFavorite(id){
    if (username) {
        let choosenItem = products.find(item => item.id === id);
        choosenItem.liked = true;
        favoriteItem = [...favoriteItem, choosenItem];
        let uniqueFavorite = getUniqueArr(favoriteItem, 'id');
        localStorage.setItem('favorite', JSON.stringify(uniqueFavorite));
        products.map(item => {
            if (item.id === choosenItem.id) {
                item.liked = true;
            }
        });
        localStorage.setItem('all-products', JSON.stringify(products));
        drawProductsUI(products);
    } else {
        window.location = 'login.html';
    }
}

let priceFilter = document.querySelector('#price-filter');
priceFilter.addEventListener('change', function(e) {
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem('all-products')) || products;

    
    if (val === 'all') {
        // if select value => all
        drawProductsUI(products);
    } else {
        // else filter by value
        products = products.filter(i => i.price === val);
        drawProductsUI(products);
    }
});

// Edit Product
function editProduct(id) {
    localStorage.setItem('edit-product', id);
    window.location = 'edit.html';
}

