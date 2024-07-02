let cart = [];

function toggleSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Menggulir halaman ke atas dengan efek animasi halus
}

function addToCart(productId) {
    const productElement = document.querySelector(`.product[data-id="${productId}"]`);
    const productName = productElement.getAttribute('data-name');
    const productPrice = parseFloat(productElement.getAttribute('data-price'));

    const product = { id: productId, name: productName, price: productPrice };
    cart.push(product);

    updateCartCount();
    updateCartItems();
    updateTotalPrice();

    // Tampilkan notifikasi
    showNotification(`${productName} added to cart!`);
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function updateCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(cartItem);
    });
}

function updateTotalPrice() {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function checkout() {
    if (cart.length > 0) {
        alert(`Thank you for your purchase of $${document.getElementById('total-price').textContent}!`);
        cart = [];
        updateCartCount();
        updateCartItems();
        updateTotalPrice();
        toggleSection('home');
    } else {
        alert('Your cart is empty.');
    }
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        alert('Login successful');
        toggleSection('home');
    } else {
        alert('Invalid credentials');
    }
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // Menghilangkan notifikasi setelah 3 detik
}

document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem('username');
    const userGreeting = document.getElementById('user-greeting');
    if (username) {
        userGreeting.textContent = `Welcome, ${username}`;
        userGreeting.style.display = 'inline'; // Display the greeting if username exists
    } else {
        userGreeting.style.display = 'none'; // Hide the greeting if no username
    }
});