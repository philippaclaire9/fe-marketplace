import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../api';

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { product_id } = useParams();

  useEffect(() => {
    fetchProduct(product_id).then((productFromApi) => {
      setProduct(productFromApi);
      setIsLoading(false);
    });
  }, [product_id]);

  if (isLoading) return <p>Hang on there...</p>;
  return (
    <main className="product-page">
      <p>{product.item_name}</p>
      <p>{product.description}</p>
      <img
        src={product.img_url}
        alt={`a ${product.item_name}`}
        className="product-page-image"
      />
      <p>{`£${product.price}`}</p>
    </main>
  );
};

export default ProductPage;
