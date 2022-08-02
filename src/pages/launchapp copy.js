import React from "react";
import NavBar from "../components/nav-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



const Launchapp = () => {
  return (
    <>
      <body
        className="theme-royal-blue"
        data-spy="scroll"
        data-target="#navbar-nav"
        data-animation="true"
        data-appearance="light"
      >
        <main className="main">
          <NavBar />
          <br />
          <br />
          <br />
          <br />
          <br />

          <section className="space bg-color--primary">
            <div className="container">
              <div className="row flex-column-reverse flex-lg-row-reverse align-items-center text-center">
                <div className="col-12 col-md-10 col-lg-6 text-lg-left reveal">
                  <h1 className="mb-3">
                   Zeroloss App
                  </h1>
                  <h2 className="mb-3">
                    <span className="color--yellow">Comming soon</span>
                  </h2>
                  <h3 className="mb-5 opacity--100">
                    We are bringing{" "}
                    <span className="color--yellow">Zeroloss App</span> your way
                    very soon.
                    <br />
                  </h3>
                  <Link
                    data-fancybox="preorder"
                    data-src="#preorder"
                    to="/home"
                    className="btn btn-size--sm btn-border btn-hover--splash"
                    style={{ color: "gold" }}
                  >
                    <span className="btn__text">
                      {" "}
                      <i className="fa fa-shopping-basket pr-1"></i> Go back
                      home
                    </span>
                  </Link>
                </div>

                <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                  <picture>
                    <img
                      className="img-fluid"
                      src="images/launchpadz.png"
                      alt="illustration"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </section>

          <section className=" space--top" style={{ backgroundColor: "black" }}>
            <footer className="section--dark footer footer--v1 position-relative">
              <div className="container text-center">
                <div className="row">
                  <div className="col-12 mb-2">
                    <span className="mb-2">
                      <img src="images/Zeroloss-footer.png" alt="brand-logo" />
                    </span>
                    <div className="widget widget-nav">
                      <ul>
                        <li className="nav-item " />
                        <li>
                          <a to="/defi">Launch App</a>
                        </li>
                        <li>
                          <a to="/faq">FAQ</a>
                        </li>
                        <li>
                          <a
                            href="https://app.zeroloss.org"
                            className="color--yellow"
                          >
                            Buy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="footer-border py-3">
                      <ul className="icon-group icon--2x justify-content-center mb-0">
                        <li className="p-2">
                          <a
                            href="https://t.me/zerolossofficial"
                            target="_blank"
                            className="color--white"
                          >
                            <FontAwesomeIcon icon={["fab", "telegram"]} />
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="https://twitter.com/Zeroloss_defi"
                            target="_blank"
                            className="color--white"
                          >
                            <FontAwesomeIcon icon={["fab", "twitter"]} />
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="https://"
                            target="_blank"
                            className="color--white"
                          >
                            <FontAwesomeIcon icon={["fab", "reddit"]} />
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="https://discord.gg/brUDkCb72M"
                            target="_blank"
                            className="color--white"
                          >
                            <FontAwesomeIcon icon={["fab", "discord"]} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="footer-bottom pt-5 pb-3 d-lg-flex justify-content-between">
                      <p className="mb-1">
                        Made with ❤️ for the ZEROLOSS Community
                      </p>
                      <p className="mb-1">
                        For all marketing and advertising, please contact our
                        Marketing team:
                        <a
                          className="mb-2 mb-lg-1"
                          href="mailto:info@zeroloss.org"
                        >
                          {" "}
                          marketing@zeroloss.org
                        </a>
                      </p>
                      <p className="mb-1">
                        For general inquiries, please contact:
                        <a
                          className="mb-2 mb-lg-1"
                          href="mailto:info@zeroloss.org"
                        >
                          {" "}
                          info@zeroloss.org
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </section>
        </main>
      </body>
    </>
  );
};

export default Launchapp;
