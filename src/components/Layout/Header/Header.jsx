import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useUser } from "../../../context/UserContext";

import "./Header.css";

function Header() {
  const { user, logout } = useUser();
  console.log("iii", user);

  const isAuth = false;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light display-flex fixed-top">
      <NavLink className="navbar-brand" to="/">
        Navbar
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {!user && (
              <div  className="nav-links-container">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Signup
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link " to="/login">
                    Login
                  </NavLink>
                </li>

                <li className="nav-item ">
                  <NavLink className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/salle">
                    Salles <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/prestataire">
                    Prestataires <span className="sr-only">(current)</span>
                  </NavLink>
                </li>

                <button className="search-button-header">
               Ajouter votre salle
              </button>
         
              </div>
            )}
      <div className="collapse navbar-collapse ml" id="navbarSupportedContent">

   
        <ul className="navbar-nav  ">
          <div className="nav-list">
           
          </div>
        </ul>
        {user && (
          <form className="form-inline my-2 my-lg-0 ml-form">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
            <button
              onClick={logout}
              className="btn btn-outline-danger my-2 my-sm-0 ml-4"
              type="submit"
            >
              Se Deconnecter
            </button>
          </form>
        )}
      </div>
    </nav>
  );
}

export default Header;
