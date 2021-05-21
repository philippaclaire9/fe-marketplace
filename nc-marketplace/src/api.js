import axios from 'axios';

export const fetchProducts = (category) => {
  return axios
    .get(`https://nc-marketplace.herokuapp.com/api/items`, {
      params: {
        category_name: category,
      },
    })
    .then(({ data: { items } }) => {
      return items;
    });
};

export const fetchProduct = (item_id) => {
  return axios
    .get(`https://nc-marketplace.herokuapp.com/api/items/${item_id}`)
    .then((response) => {
      return response.data.item;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchCategories = () => {
  return axios
    .get('https://nc-marketplace.herokuapp.com/api/categories')
    .then((response) => {
      return response.data.categories;
    });
};

export const postItem = (
  item_name,
  description,
  img_url,
  price,
  category
) => {};
