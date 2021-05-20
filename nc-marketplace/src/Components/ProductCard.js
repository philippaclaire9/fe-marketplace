import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {
  return products.map((item) => {
    return (
      <li key={item.item_id}>
        <Link to={`/products/${item.item_id}`}>
          <img
            className="product-image"
            src={item.img_url}
            alt={`a ${item.item_name}`}
          />{' '}
        </Link>
        <p>{item.item_name}</p>
      </li>
    );
  });
};

export default ProductCard;
