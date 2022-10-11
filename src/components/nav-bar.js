import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../components/themes";

function NavBar(props) {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div
      className="theme"
      data-spy="scroll"
      data-target="#navbar-nav"
      data-animation="true"
      data-appearance="light"
    >
      <button onClick={() => themeToggler()}>Change Theme</button>
      <header
        className="navbar navbar-sticky navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "black", position: "fixed" }}
      >
        <div className="container position-relative">
          <Link className="navbar-brand" to="/">
            <img
              className="navbar-brand__regular"
              style={{ height: "120px" }}
              src="images/Zeroloss_logo.png"
              alt="brand-logo"
            />
            <img
              className="navbar-brand__sticky"
              src="images/Zeroloss_logo.png"
              style={{ height: "120px" }}
              alt="sticky brand-logo"
            />
          </Link>

          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-white"></i>
          </button> */}

          {/* <div className="navbar-inner ml-lg-auto pl-lg-2 pl-xl-6"> */}
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
            <nav>
              <ul className="navbar-nav" id="navbar-nav">
                <li className="nav-item active">
                  <Link
                    className="nav-link"
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
                    to="/launchapp"
                    style={{ color: "white" }}
                  >
                    Launch App
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link
                    className="nav-link"
                    to="/zerolosspad"
                    style={{ color: "white" }}
                  >
                    ZerolossPad
                  </Link>
                </li>

                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="https://scamsniper.net"
                    style={{ color: "white" }}
                  >
                    Rug Checker
                  </a>
                </li>

                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="https://drive.google.com/file/d/1KvACbgj-2-ZrsM8v_UHj7BuV__OjoewV/view?usp=drivesdk"
                    style={{ color: "white" }}
                  >
                    LightPaper
                  </a>
                </li>

                <li className="nav-item ">
                  <Link
                    className="nav-link"
                    to="/faq"
                    style={{ color: "white" }}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mr-5 mr-lg-0 ml-lg-2">
            <a
              href="https://www.dextools.io/app/bnb/pair-explorer/0xcdee9978ac7549c755b58849ed7e1648efac6ca7"
              className="btn btn-size--sm btn-border btn-hover--danger color--white"
            >
              <span className="btn__text font-w--500">Buy</span>
            </a>
            <a
              href="https://app.zeroloss.finance"
              target="_blank"
              className="btn btn-size--sm btn-hover--splash"
              style={{ backgroundColor: "gold" }}
            >
              <span className="btn__text">DeFi</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
