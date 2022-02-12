import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer(props) {
  return (
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
                      href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xc1ed8d529f5fe85837349f7dd57715a3904a5f21"
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
                      href="https://t.me/+ea-5HwPvFRcyM2Q0"
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
                      href="https://www.reddit.com/r/thezerolosscommunity/"
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
                <p className="mb-1">Made with ❤️ for the ZEROLOSS Community</p>
                <p className="mb-1">
                  For all marketing and advertising, please contact our
                  Marketing team:
                  <a className="mb-2 mb-lg-1" href="mailto:info@zeroloss.org">
                    {" "}
                    marketing@zeroloss.org
                  </a>
                </p>
                <p className="mb-1">
                  For general inquiries, please contact:
                  <a className="mb-2 mb-lg-1" href="mailto:info@zeroloss.org">
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
  );
}

export default Footer;
