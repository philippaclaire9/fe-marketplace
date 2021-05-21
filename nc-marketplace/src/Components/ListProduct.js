import { useEffect, useState } from 'react';
import CategoriesDropdown from './CategoriesDropdown';
import { fetchCategories } from '../api';

const ListProduct = ({
  categories,
  selectedCat,
  setSelectedCat,
  setCategories,
}) => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    console.log(itemName, description, price, selectedCat);
  };

  useEffect(() => {
    fetchCategories().then((categories) => setCategories(categories));
  }, [setCategories]);

  return (
    <form onSubmit={() => handleSubmit()}>
      <label htmlFor="item_name">Product Name:</label>
      <input
        id="item_name"
        name="item_name"
        value={itemName}
        onChange={(event) => {
          setItemName(event.target.value);
        }}
      />
      <br />
      <label htmlFor="description">Product Description:</label>
      <input
        id="description"
        name="description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <br />
      <label htmlFor="price">Price:</label>
      <input
        id="price"
        name="price"
        value={price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <br />
      <label htmlFor="image_url">Image Url:</label>
      <input
        id="image_url"
        name="image_url"
        value={imageUrl}
        onChange={(event) => {
          setImageUrl(event.target.value);
        }}
      />
      <br />
      <CategoriesDropdown
        categories={categories}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
        setCategories={setCategories}
      />
      <button>Submit</button>
    </form>
  );
};

export default ListProduct;
