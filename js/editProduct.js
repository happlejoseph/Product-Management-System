

let nameInput = document.getElementById('ProductName');
let priceInput = document.getElementById('productPrice');
let categoryInput = document.getElementById('productCategory');
let imageInput = document.getElementById('productImage');
let quantityInput = document.getElementById('productQuantity');
let descriptionInput = document.getElementById('productDescription');

let updateBtn = document.getElementById('updateBtn');
let backBtn = document.getElementById('backBtn');

let allProducts = JSON.parse(localStorage.getItem('products')) || [];

let params = new URLSearchParams(window.location.search);
let id = Number(params.get('id'));


let product = allProducts.find((product) => {
    return product.id == id

});

nameInput.value = product.name;
priceInput.value = product.price;
categoryInput.value = product.category;
imageInput.value = product.image;
quantityInput.value = product.quantity;
descriptionInput.value = product.description;


updateBtn.addEventListener('click', ()=> {
    product.name = nameInput.value;
    product.price = priceInput.value;
    product.category = categoryInput.value;
    product.image = imageInput.value;
    product.quantity = quantityInput.value;
    product.description = descriptionInput.value;

    localStorage.setItem('products', JSON.stringify(allProducts));

            alert('Product Updated');

    window.location.href = '../index.html'

});


backBtn.addEventListener('click', ()=> {
    window.location.href = './displayProducts.html'
})



