"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
// Create a user
const user = (0, functions_1.createUser)("John Doe", 25);
// Create items
const itemA = (0, functions_1.createItem)("Item A", 10, "Description for Item A");
const itemB = (0, functions_1.createItem)("Item B", 15, "Description for Item B");
const itemC = (0, functions_1.createItem)("Item C", 20, "Description for Item C");
// Add Item A to the user's cart
(0, functions_1.addToCart)(itemA, user);
// Print the contents of the user's cart
(0, functions_1.printCart)(user);
// Print the total of the user's cart
console.log("Cart Total:", (0, functions_1.cartTotal)(user));
// Add 3 Items to the user's cart
(0, functions_1.addToCart)(itemB, user);
(0, functions_1.addToCart)(itemC, user);
(0, functions_1.addToCart)(itemC, user);
// Print the contents of the user's cart
(0, functions_1.printCart)(user);
// Print the total of the user's cart
console.log("Cart Total:", (0, functions_1.cartTotal)(user));
// Remove all of Item C from the user's cart
(0, functions_1.removeFromCart)(itemC, user);
// Print the contents of the user's cart
(0, functions_1.printCart)(user);
// Print the total of the user's cart
console.log("Cart Total:", (0, functions_1.cartTotal)(user));
