import React, { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [grossPrice, setGrossPrice] = useState(0);
  const [vat, setVat] = useState(0);

  function handlePriceChange(e) {
    let p = parseFloat(e.target.value);
    setPrice(p);
    let gp = p - discount;
    setGrossPrice(gp);
    setVat(parseFloat(gp * 0.07).toFixed(2))
  }

  function handleDiscountChange(e) {
    let d = parseFloat(e.target.value);
    setDiscount(d);
    let gp = price - d;
    setGrossPrice(gp);
    setVat(parseFloat(gp * 0.07).toFixed(2))
  }

  return (
    <div>
      <h2>Price</h2>
      <input 
        type="number" 
        value={price}
        onChange={handlePriceChange}
      />
      <h2>Discount</h2>
      <input 
        type="number" 
        value={discount}
        onChange={handleDiscountChange}
      />
      <p>Gross Price = {grossPrice}</p>
      <p>VAT = {vat}</p>
    </div>
  );
}

export default App;
