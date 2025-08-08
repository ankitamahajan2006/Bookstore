if (!localStorage.getItem("loggedInUser")) {
    window.location.href = "login.html";
}

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.closest(".product");

      const title = product.querySelector("h4").textContent;
      const author = product.querySelector("p").textContent;
      const priceText = product.querySelectorAll("p")[1].textContent; 
      const price = parseInt(priceText.replace("₹", "").trim());
      const image = product.querySelector("img").getAttribute("src");

      const item = {
        title,
        author,
        price,
        image,
      };

      cartItems.push(item);

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      alert(`${title} added to cart!`);
      console.log(cartItems);
    });
  });
});


document.getElementById("logout-btn").addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    window.location.href = "login.html";
});
