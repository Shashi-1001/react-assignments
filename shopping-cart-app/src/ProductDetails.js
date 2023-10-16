import React from 'react';

function ProductDetails({ product }) {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      {/* Add an "Add to Cart" button here */}
    </div>
  );
}

export default ProductDetails;