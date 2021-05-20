import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import ProductCard from "./ProductCard";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // should extract the api call...
    axios
      .get("https://nc-marketplace.herokuapp.com/api/items")
      .then(({ data: { items } }) => {
        // console.log(response.data.items);
        setProducts(items);
      });
  }, []);

  return (
    <ul className="product-list">
      <ProductCard products={products} />
    </ul>
  );
};

export default ProductList;
