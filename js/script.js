const cartBtn = document.querySelectorAll(".add-to-cart-btn");
cartBtn.forEach((cartBtn) => {
  cartBtn.addEventListener("click", function () {
    alert("Flower Added to Cart");
  });
});
