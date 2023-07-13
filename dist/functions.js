"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCart = exports.cartTotal = exports.removeQuantityFromCart = exports.removeFromCart = exports.addToCart = exports.createItem = exports.createUser = void 0;
const uuid_1 = require("uuid");
function createUser(name, age) {
    const user = {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: []
    };
    return user;
}
exports.createUser = createUser;
function createItem(name, price, description) {
    const item = {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description,
        quantity: 0
    };
    return item;
}
exports.createItem = createItem;
function addToCart(item, user) {
    user.cart.push(item);
}
exports.addToCart = addToCart;
function removeFromCart(item, user) {
    user.cart = user.cart.filter(cartItem => cartItem.id !== item.id);
}
exports.removeFromCart = removeFromCart;
function removeQuantityFromCart(item, user, quantity) {
    const itemIndex = user.cart.findIndex(cartItem => cartItem.id === item.id);
    if (itemIndex !== -1) {
        user.cart[itemIndex].quantity -= quantity;
        if (user.cart[itemIndex].quantity <= 0) {
            user.cart.splice(itemIndex, 1);
        }
    }
}
exports.removeQuantityFromCart = removeQuantityFromCart;
function cartTotal(user) {
    let total = 0;
    for (const item of user.cart) {
        total += item.price;
    }
    return total;
}
exports.cartTotal = cartTotal;
function printCart(user) {
    console.log("Items in the cart:");
    for (const item of user.cart) {
        console.log(`${item.name} - $${item.price}`);
    }
}
exports.printCart = printCart;
