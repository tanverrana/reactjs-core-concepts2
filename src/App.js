import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  return (
    <div className="App" >
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(55);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  /* function Counter() {
    const [count, setCount] = useState(55);
    const increaseCount = () => {
      const newCount = count + 1;
      setCount(newCount);
    } */
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

/* 
const products = [
    { name: "Lenovo", price: "73893" },
    { name: "MacBook", price: "733493" },
    { name: "HP", price: "7893" },
    { name: "ACER", price: "3893" },
  ];
*/
/* {
  products.map(product => <Product name={product.name} price={product.price}></Product>)
}
<Product name="Laptop" price="34000"></Product>
<Product name="Mobile" price="4000"></Product> 
*/
function Product(props) {
  return (
    <div className="product">
      <h3>Name:{props.name}</h3>
      <h4>Price:{props.price}</h4>
    </div>
  )
}

export default App;
