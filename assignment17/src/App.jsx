import React from 'react';
import ProductProvider from './ProductProvider';
import ProductList from './ProductList';
import './App.css';
const App = () => {
  return (
    <ProductProvider>
      <div className="App">
        <h1>Product List</h1>
        <ProductList />
      </div>
    </ProductProvider>
  );
};

export default App;
