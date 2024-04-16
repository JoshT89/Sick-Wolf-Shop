import React, { useState } from 'react';
import Product from './Components/Product';
import Basket from './Components/Basket';
import Checkout from './Components/Checkout';
import './Components/Product.css';
import './Components/Checkout.css';
import './Components/Basket.css';
import './App.css';

function App() {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (product) => {
    setBasket(currentBasket => [...currentBasket, product]);
  };

  return (
    <div className="container">
      <div className="content">
        <header className="App-header">
          <img src={`${process.env.PUBLIC_URL}/sikwolf text.png`} className="sikwolf-text" alt="Sik Wolf Text" />
          <Product onAddToBasket={handleAddToBasket} />
          <Basket items={basket} />
          <Checkout />
        </header>
      </div>
    </div>
  );
}

export default App;