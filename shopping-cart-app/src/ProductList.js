import React from 'react';
import productData from './Data.json';

function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productData.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
