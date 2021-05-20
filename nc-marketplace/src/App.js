// import { useEffect, useState } from "react";
// import axios from "axios";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://nc-marketplace.herokuapp.com/api/items")
  //     .then((response) => {
  //       console.log(response.data.items);
  //       setData(response.data.items);
  //     });
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>NC Marketplace</h1>
        <h3>Your one-stop-shop for knic-knacs and tic-tacs</h3>
      </header>
      <ProductList/>
      {/* <ul className="product-list">
        {data.map((item) => {
          return (
            <li key={item.item_id}>
              <img
                className="product-image"
                src={item.img_url}
                alt={`a ${item.item_name}`}
              />
              <p>{item.item_name}</p>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default App;
