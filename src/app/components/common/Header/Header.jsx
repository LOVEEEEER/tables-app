import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/">
          List
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/add">
          Add
        </Link>
      </li>
    </ul>
  );
};

export default Header;
