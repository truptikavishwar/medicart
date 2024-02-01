// You can use JavaScript to dynamically load products or handle user interactions.

// For example:
document.addEventListener('DOMContentLoaded', function() {
    // Fetch products from a server and dynamically create product listings
    // You can use Fetch API or XMLHttpRequest for this purpose.
    // Example:
    // fetch('https://api.example.com/products')
    //     .then(response => response.json())
    //     .then(products => {
    //         displayProducts(products);
    //     });
});

function displayProducts(products) {
    const productsSection = document.getElementById('products');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;

        // Add more details as needed

        productCard.appendChild(productName);
        productCard.appendChild(productPrice);

        productsSection.appendChild(productCard);
    });
}
