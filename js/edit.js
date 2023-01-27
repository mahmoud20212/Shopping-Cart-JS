/* Edit Product */
/* ------------------ */
let products = JSON.parse(localStorage.getItem('all-products')) || productsDB;
let productId = JSON.parse(localStorage.getItem('edit-product'));
let getProduct = products.find(i => i.id === productId);

let updateForm = document.querySelector('#update-form');
let productName = document.querySelector('#title');
let productDescription = document.querySelector('#desc');
let productPrice = document.querySelector('#price');
let productFile = document.querySelector('#file');
let productPriceValue, productImage;

productName.value = getProduct.title;
productDescription.value = getProduct.desc;
productPrice.value = getProduct.price;
productImage = getProduct.imageUrl;



productPrice.addEventListener('change', getProductsPriceValue);
updateForm.addEventListener('submit', updateProductFun);

/** Functions **/
function getProductsPriceValue (e) {
    productPriceValue = e.target.value;
}

// Update product function
function updateProductFun (e) {
    e.preventDefault();
    getProduct.title = productName.value;
    getProduct.desc = productDescription.value;
    getProduct.price = productPrice.value;
    getProduct.imageUrl = productImage;
    localStorage.setItem('all-products', JSON.stringify(products));
    window.location = 'index.html';
}

/** Events **/
// Handle image file
productFile.addEventListener('change', function (e) {
    let file = e.target.files[0];
    let fileType = ["image/jpeg", "image/jpg", "image/png"];
    if (!fileType.includes(file.type)){
        return alert('Error Type File!!');
    }
    if (file.size > 2 * 1024 * 1024){
        return alert('The file size should be 2MB!!');
    }
    
    // call getImageBase64 function
    getImageBase64(file);
    // productImage = URL.createObjectURL(file);
});

function getImageBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        productImage = reader.result;
    }
    reader.onerror = function () {
        alert('Error');
    }
}