let cartItems = [];

function addToCart(productId) {
    let existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({
            id: productId,
            name: `Produto ${productId}`,
            image: `product${productId}.jpg`,
            quantity: 1
        });
    }

    updateCartCount();
}

function showCart() {
    // Exibe a janela modal com os itens do carrinho
    let cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'block';

    // Atualiza a lista de itens no carrinho
    let cartItemsListElement = document.getElementById('cartItemsList');
    cartItemsListElement.innerHTML = '';
    cartItems.forEach(item => {
        let listItem = document.createElement('li');
        listItem.className = 'checkout-product';
        listItem.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}">
                ${item.name}
            </div>
            <div class="quantity-controls">
                <button onclick="decreaseQuantity(${item.id})">-</button>
                <span class="quantity">${item.quantity}</span>
                <button onclick="increaseQuantity(${item.id})">+</button>
            </div>
        `;
        cartItemsListElement.appendChild(listItem);
    });
}

function closeCartModal() {
    // Fecha a janela modal
    let cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
}

function checkout() {
    // Lógica de checkout - Exemplo
    let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    let totalPrice = cartItems.reduce((total, item) => total + item.quantity * 10, 0); // Preço fictício de R$ 10 por item

    let confirmation = confirm(`Deseja finalizar a compra de ${totalItems} itens por R$ ${totalPrice.toFixed(2)}?\n\nInformações do Comprador:\nNome: ${document.getElementById('name').value}\nEmail: ${document.getElementById('email').value}`);
    
    if (confirmation) {
        alert('Compra realizada com sucesso!');

        // Limpar carrinho após o checkout
        cartItems = [];
        updateCartCount();
        closeCartModal();
    }
}

// ... (restante do seu código JavaScript) ...
