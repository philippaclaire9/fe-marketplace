//import { useState } from 'react';

const CategoriesDropdown = ({ categories, selectedCat, setSelectedCat }) => {
  // const [selected, setSelected] = useState('');

  return (
    <section>
      <label htmlFor="categories">Select category</label>
      <select
        name="categories"
        id="categories"
        value={selectedCat}
        onChange={(event) => {
          setSelectedCat(event.target.value);
        }}
      >
        {categories.length
          ? categories.map((category) => {
              return (
                <option
                  key={category.category_name}
                  value={category.category_name}
                >
                  {category.category_name}
                </option>
              );
            })
          : null}
      </select>
    </section>
  );
};

export default CategoriesDropdown;
