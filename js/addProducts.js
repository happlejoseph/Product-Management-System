

let nameInput = document.getElementById('ProductName');
let priceInput = document.getElementById('productPrice');
let categoryInput = document.getElementById('productCategory');
let imageInput = document.getElementById('productImage');
let quantityInput = document.getElementById('productQuantity');
let descriptionInput = document.getElementById('productDescription');

let saveBtn = document.getElementById('saveBtn');
let cancelBtn = document.getElementById('cancelBtn');
let backBtn = document.getElementById('backBtn');


saveBtn.addEventListener('click', ()=> {

    
    let name = nameInput.value;
    let price = priceInput.value;
    let category = categoryInput.value;
    let image = imageInput.value;
    let quantity = quantityInput.value;
    let description = descriptionInput.value;

    if ( !name || !price || !category || !image || !quantity || !description ) {
        return alert('Fill all fields');
    }

    let product = {
        id : Date.now(),
        name : name,
        price : price,
        category : category,
        image : image,
        quantity : quantity,
        description : description
    };

    let allProducts = JSON.parse(localStorage.getItem('products')) || [];
    
    allProducts.push(product);

    localStorage.setItem('products', JSON.stringify(allProducts));

    alert('product added');
    window.location.href = '../index.html';

    nameInput.value = "";
    priceInput.value = "";
    categoryInput.value = "";
    imageInput.value = "";
    quantityInput.value = "";
    descriptionInput.value = "";

});

cancelBtn.addEventListener('click', ()=> {
    
    let cancel = confirm('do you want to cancel?');
    if(cancel) {
        window.location.href = '../index.html';
    }
});

backBtn.addEventListener('click', ()=> {
 
    window.location.href = '../index.html';
});