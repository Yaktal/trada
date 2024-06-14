let cart = [];
                    let total = 0;
                
                    function addToCart(productName, price) {
                        cart.push({ name: productName, price: price });
                        total += price;
                
                        // Update cart display
                        updateCartDisplay();
                    }
                
                    function updateCartDisplay() {
                        const cartItemsElement = document.getElementById('cart-items');
                        const cartTotalElement = document.getElementById('cart-total');
                
                        // Clear previous content
                        cartItemsElement.innerHTML = '';
                
                        // Add cart items
                        cart.forEach(item => {
                            const li = document.createElement('li');
                            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                            cartItemsElement.appendChild(li);
                        });
                
                        // Update total
                        cartTotalElement.textContent = total.toFixed(2);
                    }

document.addEventListener('DOMContentLoaded', function() {
    const newSaleButton = document.getElementById('newSaleButton');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.getElementsByClassName('close')[0];
    const addItemLink = document.getElementById('addItemLink');
    const itemsContainer = document.getElementById('itemsContainer');
    let itemCounter = 3;

    newSaleButton.onclick = function() {
        popupForm.style.display = 'block';
    }

    closeBtn.onclick = function() {
        popupForm.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popupForm) {
            popupForm.style.display = 'none';
        }
    }

    addItemLink.onclick = function(event) {
        event.preventDefault();
        itemCounter++;
        const newItemDiv = document.createElement('div');
        newItemDiv.classList.add('item');
        const newItemLabel = document.createElement('label');
        newItemLabel.setAttribute('for', 'item' + itemCounter);
        newItemLabel.textContent = 'Item ' + itemCounter + ':';
        const newItemInput = document.createElement('input');
        newItemInput.setAttribute('type', 'text');
        newItemInput.setAttribute('id', 'item' + itemCounter);
        newItemInput.setAttribute('name', 'item' + itemCounter);
        newItemInput.required = true;
        newItemDiv.appendChild(newItemLabel);
        newItemDiv.appendChild(newItemInput);
        itemsContainer.appendChild(newItemDiv);
    }
});
document.getElementById('form-content').addEventListener('submit', function(event) {
    event.preventDefault();
    // Directly redirect to dashboard without validation
    window.location.href = 'dashboard.html';
});

