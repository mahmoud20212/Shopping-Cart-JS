/* Product detail */
/* ------------------ */
let products = JSON.parse(localStorage.getItem('all-products'));
let productId = localStorage.getItem('productId');
let itemDom = document.querySelector('.item-detail');

let productDetail = products.find(item => item.id == productId);
itemDom.innerHTML = `<img src="${productDetail.imageUrl}">
                    <h2>${productDetail.title}</h2>
                    <p>${productDetail.desc}</p>
                    <span>price: $${productDetail.price}</span>
                    <br>
                    ${productDetail.isMe === 'Y' ? '<button onclick="editProduct(' + productDetail.id + ')" style="background-color: #333; margin-bottom: 5px;" class="add-to-cart">Edit</button>' : ''}`;

// Edit Product function
function editProduct(id) {
    localStorage.setItem('edit-product', id);
    window.location = 'edit.html';
}