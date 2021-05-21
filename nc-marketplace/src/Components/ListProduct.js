import { useEffect, useState, useContext } from 'react';
import CategoriesDropdown from './CategoriesDropdown';
import { fetchCategories } from '../api';
import { postItem } from '../api';
import { UserContext } from '../context/user';

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
  const [hasPosted, setHasPosted] = useState(false);

  // const user = useContext(UserContext);
  // console.log(user);
  //absolutely unecessary but there to remind you!

  const handleSubmit = (event) => {
    event.preventDefault();
    postItem(itemName, description, imageUrl, price, selectedCat).then(
      (response) => {
        setHasPosted(true);
      }
    );

    console.log(itemName, description, imageUrl, price, selectedCat);
  };

  useEffect(() => {
    fetchCategories().then((categories) => setCategories(categories));
  }, [setCategories]);

  return hasPosted ? (
    <p>Success! Your item has been listed! </p>
  ) : (
    <form onSubmit={(event) => handleSubmit(event)}>
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
