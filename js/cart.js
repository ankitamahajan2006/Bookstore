if (!localStorage.getItem("loggedInUser")) {
    alert("Please login to access the cart.");
    window.location.href = "login.html";
}

window.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    const placeOrderBtn = document.getElementById("place-order");
    const summaryContainer = document.getElementById("summary");

    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p class='empty'>Your cart is empty.</p>";
        summaryContainer.style.display = "none";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("cart-item");

        const quantity = item.quantity || 1;
        const rawPrice = typeof item.price === "string" ? item.price.replace(/[^\d.]/g, "") : item.price;
        const price = parseFloat(rawPrice);

        const subtotal = price * quantity;
        total += subtotal;

        bookDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}" />
            <h3>${item.title}</h3>
            <p>${item.author}</p>
            <p>₹${price}</p>
            <p>Quantity: ${quantity}</p>
            <p>Subtotal: ₹${subtotal}</p>
        `;

        cartItemsContainer.appendChild(bookDiv);
    });

    totalElement.innerText = `Total: ₹${total}`;
    summaryContainer.style.display = "block";

    placeOrderBtn.addEventListener("click", () => {
        alert(`🎉 Order placed successfully! Total: ₹${total}`);
        localStorage.removeItem("cartItems");
        window.location.href = "index.html";
    });
});
