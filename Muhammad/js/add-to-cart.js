const addToCartButtons = document.querySelectorAll(".add-to-cart");
let cart = [];

function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(item);
  }
//   for (let i = 0; i < cart.length; i++) {
//     console.log(`Item: ${cart[i].name}, Quantity: ${cart[i].quantity}`);
//   }
}

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const item = {
            id: button.getAttribute("data-id"),
            name: button.getAttribute("data-name"),
            price: parseFloat(button.getAttribute("data-price")),
            quantity: 1
        };
    addToCart(item);
  });
});

