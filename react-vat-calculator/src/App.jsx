import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [count, setCount] = useState(0)
  const [a,setA] = useState(1)
  const [vat,setVat] = useState(0)


function addA() {
  setInterval(a+1)
  console.log(a)
}
function handle(e){
  let p = e.target.value
  console.log(p)
  let v= p * 0.07
  setVat(v)
}
  return (
    <>
<h2>Price</h2>
<input type="number" 
onChange={handle}
style={{fontSize: '20pt'}}/>
      <p>Vat = {vat}</p>
      <p>A = {a}</p>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
      </div>
    </>
  )
  }


export default App
