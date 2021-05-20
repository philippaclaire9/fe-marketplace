import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import ProductList from './Components/ProductList';
import ProductPage from './Components/ProductPage';
import Nav from './Components/Nav';
import ListProduct from './Components/ListProduct';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState('');
  return (
    <Router>
      {/* <div className="App"> */}
      <header className="App-header">
        <h1>NC Marketplace</h1>
        <h3>Your one-stop-shop for knic-knacs and tic-tacs</h3>
      </header>
      <Nav />
      <Switch>
        <Route path="/products" exact>
          <ProductList
            categories={categories}
            selectedCat={selectedCat}
            setSelectedCat={setSelectedCat}
            setCategories={setCategories}
          />
        </Route>
        <Route path="/products/:product_id">
          <ProductPage />
        </Route>
        <Route path="/sell">
          <ListProduct
            categories={categories}
            selectedCat={selectedCat}
            setSelectedCat={setSelectedCat}
            setCategories={setCategories}
          />
        </Route>
      </Switch>

      {/* </div> */}
    </Router>
  );
}

export default App;
