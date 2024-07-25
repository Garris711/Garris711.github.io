import { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import productList from './accessory-products.json';
import DataTable from './components/DataTable';
import './App.css';

function App() {
  const pRef = useRef();
  const qRef = useRef();
  const [price, setPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredSelectedItems, setFilteredSelectedItems] = useState([]);

  const handleAdd = () => {
    const pid = pRef.current.value;
    const product = productList.find((p) => p.id == pid);
    const q = parseInt(qRef.current.value, 10);

    if (product && q > 0) {
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: q,
        total: product.price * q,
      };
      const newItems = [...selectedItems, newItem];
      setSelectedItems(newItems);
      setFilteredSelectedItems(newItems); // Update filtered list
    }
  };

  const handleProductChange = (e) => {
    const pid = e.target.value;
    const product = productList.find((p) => p.id == pid);
    const p = product ? product.price : 0;
    setPrice(p);
  };

  const deleteItemByIndex = (index) => {
    const newItems = selectedItems.filter((_, i) => i !== index);
    setSelectedItems(newItems);
    setFilteredSelectedItems(newItems);
  };

  const search = (keyword) => {
    setFilteredSelectedItems([
      ...selectedItems.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      ),
    ]);
  };

  return (
    <Container className="app-container">
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formProduct">
            <Form.Label>Product</Form.Label>
            <Form.Control as="select" ref={pRef} onChange={handleProductChange}>
              <option value="">Select a product</option>
              {productList.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" value={price} readOnly />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" ref={qRef} min="1" />
          </Form.Group>
        </Col>
        <Col className="align-self-end">
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <DataTable
            data={filteredSelectedItems}
            onDelete={deleteItemByIndex}
            onSearch={search}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
