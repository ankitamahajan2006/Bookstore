if (!localStorage.getItem("loggedInUser")) {
    window.location.href = "login.html";
}

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const detailSection = document.getElementById("product-detail");

// Use the correct variable name: books (not products)
const product = books.find((p) => p.id === id);

if (product) {
  detailSection.innerHTML = `
    <div class="detail-card">
      <img src="${product.image}" alt="${product.title}">
      <div class="detail-info">
        <h2>${product.title}</h2>
        <h4>by ${product.author}</h4>
        <p><strong>Price:</strong> ₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    </div>
  `;
} else {
  detailSection.innerHTML = "<p>Book not found.</p>";
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  let product = books.find(p => p.id === id);
  let existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cartItems", JSON.stringify(cart));
  alert(`${product.title} added to cart!`);
}
