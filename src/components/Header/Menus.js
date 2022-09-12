import React from "react";

const Menus = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link px-3" aria-current="page">
          Quick Facts
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item">Quick Facts 1</a>
          </li>
          <li>
            <a className="dropdown-item">Quick Facts 2</a>
          </li>
          <li>
            <a className="dropdown-item">Quick Facts 3</a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link px-3" aria-current="page">
          Benifits
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item ">Benifits 1</a>
          </li>
          <li>
            <a className="dropdown-item">Benifits 2</a>
          </li>
          <li>
            <a className="dropdown-item">Benifits 3</a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link px-3">Contact</a>
      </li>
    </ul>
  );
};

export default Menus;
