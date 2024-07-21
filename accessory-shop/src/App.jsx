import { useState,useRef } from 'react'
import {Button,Container,Row,Col} from 'react-bootstrap'; 
import Form from 'react-bootstrap/Form';
import productList from './accessory-products.json';


function App() {


  const pRef=useRef()
  const qRef=useRef()
  const [price,setPrice]=useState(productList[0].price)


  

  const handleAdd=(e) => {
    const p=pRef.current.value
    const q=qRef.current.value
    console.log(p,q)
  }
  const handleProductChanged = (e) => {
    const pid = e.target.value
    const product=productList.find(p=> p.id ==pid)
    const p=product.price
    console.log(p)
    setPrice(p)
  }
return (
  <>
  <Container>
    <Row>

    <Col xs={2}>
      <span>Product</span>
      </Col>
      <Col>
      <Form.Select ref={pRef} onChnage={handleProductChanged}>{
        productList.map((p)=>(
          <option key={p.id} value={p.id}>{p.name}</option>
          ) 
           )
        }
    </Form.Select>
      </Col>
    </Row>
    <Row>
    <Col xs={2}>
      Price:
      </Col>
      <Col>
      {price}
     </Col>
     </Row>
    <Row>
    <Col xs={2}>
      <span>Quantity</span>
      </Col>
      <Col>
      <input type = "number"
      ref={qRef}
      defaultValue={1}/>
     </Col>
     </Row>
  <Button variant="dark">Add</Button>
  <DataTable data={productList}/>
  </Container>
  
  </>

)
}

export default App
