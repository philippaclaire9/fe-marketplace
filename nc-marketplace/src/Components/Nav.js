import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="Nav">
      <Link className="Nav-link" to="/products">
        Products
      </Link>
      <Link className="Nav-link" to="/sell">
        Sell
      </Link>
      <Link className="Nav-link" to="/topics">
        Topics
      </Link>
    </nav>
  );
};

export default Nav;
