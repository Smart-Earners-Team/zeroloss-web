import React, {useState} from "react";
import { Link } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../components/themes";
import ContentLayout from "./content-layout";
import "../assets/styles/navbar.css"



function NavBar(props) {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
 const [dropDown, setDropDown] = useState(false);



  return (
    <nav
      className="navbar navbar-expand-lg navbar-mainbg"
      style={{ backgroundColor: "black", position:"fixed", height: "auto" }}
    >
      <a className="navbar-brand navbar-logo" href="/">
        <img
          className="navbar-brand__regular"
          src="images/Zeroloss_logo.png"
          alt="sticky brand-logo"
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
                   <li className="nav-item ">
            <Link
              className="nav-link"
              // href="/"
              style={{ color: "white" }}
              activeClassName="is-active"
              to="/"
              exact
            >
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              className="nav-link"
              // href="/defi"
              style={{ color: "white" }}
              activeClassName="is-active"
              to="/defi"
              exact
            >
              Launch App
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              className="nav-link"
              // href=
              style={{ color: "white" }}
              activeClassName="is-active"
              to="/idolaunchpad"
              exact
            >
              ZerolossPad
            </Link>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link"
              href="https://front.herokuapp.com/rugchecker"
              style={{ color: "white" }}
              activeClassName="is-active"
              exact
            >
              Rug Checker
            </a>
          </li>
          <li className="nav-item ">
            <a
              className="nav-link"
              href="https://drive.google.com/file/d/1KvACbgj-2-ZrsM8v_UHj7BuV__OjoewV/view?usp=drivesdk"
              style={{ color: "white" }}
              activeClassName="is-active"
              exact
            >
              LightPaper
            </a>
          </li>
          <li className="nav-item ">
            <Link
              className="nav-link"
              // href=
              style={{ color: "white" }}
              activeClassName="is-active"
              to="/faq"
              exact
            >
              FAQ
            </Link>
          </li>

          <div className="mr-5 mr-lg-0 ml-lg-2 mt-1">
          <Link
            to="/defi"
            className="btn btn-size--sm btn-border btn-hover--danger color--white mr-5" 
          >
            <span className="btn__text font-w--500">Buy</span>
          </Link>
          <Link
            to="/defi"
            className="btn btn-size--sm btn-hover--splash mr-5"
            style={{ backgroundColor: "gold" }}
          >
            <span className="btn__text">DeFi</span>
          </Link>
          </div>
        </ul>
      </div>
    </nav>
    
  );
}

export default NavBar;
