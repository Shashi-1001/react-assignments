import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

const products = require('./Data.json'); // Import the JSON data

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
        <Route path="/cart" element={<Cart cartItems={[]} />} />
      </Routes>
    </Router>
  );
}

export default App;

