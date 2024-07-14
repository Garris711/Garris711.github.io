import { useState } from 'react'
import './App.css'

function App(){
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [grossPrice, setGrossPrice] = useState(0);
  const [vat, setVat] = useState(0);

  function handlePriceChange(e) {
    let p = parseFloat(e.target.value);
    setPrice(p);
    let gp = p - (p * discount / 100);
    setGrossPrice(gp);
    setVat(gp * 0.07);
  }

  function handleDiscountChange(e) {
    let d = parseFloat(e.target.value);
    setDiscount(d);
    let gp = price - (price * d / 100);
    setGrossPrice(gp);
    setVat(gp * 0.07);
  }

  return (
    <>
      <h2>Price</h2>
      <input 
        type="number" 
        value={price}
        onChange={handlePriceChange}
        style={{fontSize: '20pt'}}
      />
      <h2>Discount</h2>
      <input 
        type="number" 
        value={discount}
        onChange={handleDiscountChange}
        style={{fontSize: '20pt'}}
      />
      <p>Gross Price = {grossPrice}</p>
      <p>VAT = {vat}</p>
    </>
  )
}

export default App
