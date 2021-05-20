import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductList from "./Components/ProductList";

function App() {

  return (
    <Router>
      {/* <div className="App"> */}
      <header className="App-header">
        <h1>NC Marketplace</h1>
        <h3>Your one-stop-shop for knic-knacs and tic-tacs</h3>
      </header>
      <nav className="Nav">
        <Link className="Nav-link" to="/">
          Home
        </Link>
        <Link className="Nav-link" to="/about">
          About
        </Link>
        <Link className="Nav-link" to="/topics">
          Topics
        </Link>
      </nav>
      <ProductList />
      {/* </div> */}
    </Router>
  );
}

export default App;
