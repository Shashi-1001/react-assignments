import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart