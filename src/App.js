import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {


  return (
    <div className="App" >
      {/* <Counter></Counter> */}
      <Externalusers></Externalusers>
    </div>
  );
}
function Externalusers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h2>External User</h2>
      <h3>{users.length}</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
};
function User(props) {
  return (
    <div className="user">
      <h4>Name:{props.name}</h4>
      <h4>Email:{props.email}</h4>
    </div>
  )
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
