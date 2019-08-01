var products = [];
var cart = [];
function initializeProduct() {
    products = [
        {
            name: "product a", color: "Red", qty: 0
        },
        {
            name: "product a", color: "Blue", qty: 0
        }
    ]
}

function clone(obj) {
  return JSON.parse(JSON.stringify());
}

function addProductToCart(productIndex) {
    cart.push(clone(products[productIndex]));
}

function changeCartProductQty(cartIndex, qty) {
    cart[cartIndex].qty = 3;
}

initializeProduct();
addProductToCart(0); // Add product index 0 to cart
changeCartProductQty(0, 3); // Change cart product qty to 3
addProductToCart(0); // Add again product index 0 to cart
console.log(cart);

