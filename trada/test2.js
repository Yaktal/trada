const openPopupButton = document.getElementById('open-popup');
const container = document.querySelector('.container');
const closeButton = document.querySelector('.close');
const addMoreItemsButton = document.querySelector('.add-more-items');
const removeItemsButton = document.querySelector('.remove-items');
const productList = document.querySelector('.product-list');

openPopupButton.addEventListener('click', () => {
    container.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    container.style.display = 'none';
});

addMoreItemsButton.addEventListener('click', () => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    productItem.innerHTML = `
        <div class="product-name">
            <input type="text" placeholder="Name of product / item">
        </div>
        <div class="product-stock">
            <input type="number" placeholder="Stock">
        </div>
        <div class="product-cost-price">
            <input type="number" placeholder="Cost Price    &#8358;">
        </div>
        <div class="product-sale-price">
            <input type="number" placeholder="Sale Price    &#8358;">
        </div>
    `;

    productList.appendChild(productItem);
});

removeItemsButton.addEventListener('click', () => {
    const productItems = document.querySelectorAll('.product-item');
    if (productItems.length > 1) {
        productList.removeChild(productItems[productItems.length - 1]);
    }
});

