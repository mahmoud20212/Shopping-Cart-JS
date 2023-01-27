/* Create New Product */
/* ------------------ */
let createForm = document.querySelector('#create-form');
let productName = document.querySelector('#title');
let productDescription = document.querySelector('#desc');
let productPrice = document.querySelector('#price');
let productFile = document.querySelector('#file');
let productPriceValue, productImage;

productPrice.addEventListener('change', getProductsPriceValue);
createForm.addEventListener('submit', createProductFun);

/** Functions **/ 
function getProductsPriceValue (e) {
    productPriceValue = e.target.value;
}

// Create new product function
function createProductFun (e) {
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem('all-products')) || productsDB;
    let nameValue = productName.value;
    let descValue = productDescription.value;
    let priceValue = productPrice.value;
    if (nameValue && descValue) {
        let obj = {
            id: allProducts ? allProducts.length + 1 : 1,
            title: nameValue,
            desc: descValue,
            price: priceValue,
            imageUrl: productImage,
            quntity: 1,
            isMe: 'Y',
        }
        let newProducts = allProducts ? [...allProducts, obj] : [obj];
        localStorage.setItem('all-products', JSON.stringify(newProducts));
        window.location = 'index.html';
    } else {
        alert('Enter Data');
    }
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