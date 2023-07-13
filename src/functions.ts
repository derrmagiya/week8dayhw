import { v4 as uuidv4 } from 'uuid';
import { Item, User } from './types';

export function createUser(name: string, age: number): User {
  const user: User = {
    id: uuidv4(),
    name,
    age,
    cart: []
  };
  return user;
}

export function createItem(name: string, price: number, description: string): Item {
  const item: Item = {
    id: uuidv4(),
    name,
    price,
    description,
    quantity: 0
  };
  return item;
}

export function addToCart(item: Item, user: User): void {
  user.cart.push(item);
}

export function removeFromCart(item: Item, user: User): void {
  user.cart = user.cart.filter(cartItem => cartItem.id !== item.id);
}

export function removeQuantityFromCart(item: Item, user: User, quantity: number): void {
  const itemIndex = user.cart.findIndex(cartItem => cartItem.id === item.id);
  if (itemIndex !== -1) {
    user.cart[itemIndex].quantity -= quantity;
    if (user.cart[itemIndex].quantity <= 0) {
      user.cart.splice(itemIndex, 1);
    }
  }
}

export function cartTotal(user: User): number {
  let total = 0;
  for (const item of user.cart) {
    total += item.price;
  }
  return total;
}

export function printCart(user: User): void {
  console.log("Items in the cart:");
  for (const item of user.cart) {
    console.log(`${item.name} - $${item.price}`);
  }
}

