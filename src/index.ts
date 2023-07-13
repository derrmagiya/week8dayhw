import { createUser, createItem, addToCart, printCart, cartTotal, removeFromCart } from './functions';

// Create a user
const user = createUser("John Doe", 25);

// Create items
const itemA = createItem("Item A", 10, "Description for Item A");
const itemB = createItem("Item B", 15, "Description for Item B");
const itemC = createItem("Item C", 20, "Description for Item C");

// Add Item A to the user's cart
addToCart(itemA, user);

// Print the contents of the user's cart
printCart(user);

// Print the total of the user's cart
console.log("Cart Total:", cartTotal(user));

// Add 3 Items to the user's cart
addToCart(itemB, user);
addToCart(itemC, user);
addToCart(itemC, user);

// Print the contents of the user's cart
printCart(user);

// Print the total of the user's cart
console.log("Cart Total:", cartTotal(user));

// Remove all of Item C from the user's cart
removeFromCart(itemC, user);

// Print the contents of the user's cart
printCart(user);

// Print the total of the user's cart
console.log("Cart Total:", cartTotal(user));