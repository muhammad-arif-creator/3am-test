import React from "react";
import Menus from "./Menus";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  px-md-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand">
            <img src="images/logo.png" alt="logo" />
          </a>
          <Menus />
          <form className="d-flex">
            <button className="btn btn-primary" type="submit">
              Get in touch
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
