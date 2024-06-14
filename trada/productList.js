const addMoreItemsButton = document.querySelector('.add-more-items');
const productList = document.querySelector('.product-list');



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
        <button class="remove-item">Remove</button>
    `;
    productItem.querySelector('.remove-item').addEventListener('click', () => {
        productItem.remove();
    });

    productList.appendChild(productItem);
});

document.getElementById('product-list').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'Message.html';
});
