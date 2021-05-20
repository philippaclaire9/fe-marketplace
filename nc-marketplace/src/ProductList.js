import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
const ProductList = () => {

const [data, setData] = useState([]);

useEffect(() => {
  axios
    .get("https://nc-marketplace.herokuapp.com/api/items")
    .then((response) => {
      console.log(response.data.items);
      setData(response.data.items);
    });
}, []);

  return (
    <ul className="product-list">
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
    </ul>
  );
};

export default ProductList;
