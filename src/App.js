import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: "Lenovo", price: "73893" },
    { name: "MacBook", price: "733493" },
    { name: "HP", price: "7893" },
    { name: "ACER", price: "3893" },
  ];

  return (
    <div className="App" >
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="Laptop" price="34000"></Product>
      <Product name="Mobile" price="4000"></Product>
    </div>
  );
}
function Product(props) {
  return (
    <div className="product">
      <h3>Name:{props.name}</h3>
      <h4>Price:{props.price}</h4>
    </div>
  )
}

export default App;
