import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-navbar">
        <div className="container">
          <Link
            className="navbar-brand fw-bolder"
            to="/home"
            style={{ color: "whitesmoke", fontFamily: "Montserrat" }}
          >
            <span style={{ fontSize: "30px" }}>E</span>pisode{" "}
            <span style={{ fontSize: "30px" }}>R</span>andomizer
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"></ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
