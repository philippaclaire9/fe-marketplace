import { useEffect, useState } from 'react';

import React from 'react';
import ProductCard from './ProductCard';
import { fetchCategories, fetchProducts } from '../api';
import CategoriesDropdown from './CategoriesDropdown';

const ProductList = ({
  categories,
  selectedCat,
  setSelectedCat,
  setCategories,
}) => {
  const [products, setProducts] = useState([]);
  //const [categories, setCategories] = useState([]);
  // const [selectedCat, setSelectedCat] = useState('');

  useEffect(() => {
    // should extract the api call...

    fetchProducts(selectedCat).then((products) => {
      setProducts(products);
    });

    fetchCategories().then((categoriesFromApi) => {
      //console.log(categoriesFromApi);
      setCategories(categoriesFromApi);
    });
  }, [selectedCat, setCategories]);

  return (
    <main>
      <CategoriesDropdown
        categories={categories}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
      />

      <ul className="product-list">
        <ProductCard products={products} />
      </ul>
    </main>
  );
};

export default ProductList;
