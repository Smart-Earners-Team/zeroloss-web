import React from 'react';
import NavBar from '../components/nav-bar';

const Idolaunchpad = () => {
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
                  <h2 className="mb-3">IDO LaunchPad</h2>
                  <p className="mb-5 opacity--100">
                    Use <span className="color--yellow">Zeroloss</span> Token
                    ZLT, to buy in early in IDO projects.
                    <br />
                    ZEROLOSS IDO will require new projects to lock a large share
                    of their liquidity and team tokens on our third party
                    partner’s locker platform. We make it easy, safe and secure
                    to lock any BEP-20 based token in seconds protecting
                    investors from ‘rug pulls’.
                    <br /> Hold 2000 ZLT to get whitelisted for IDO's
                  </p>
                  <a
                    data-fancybox="preorder"
                    data-src="#preorder"
                    href="javascript:;"
                    className="btn btn-bg--cta--yellow btn-hover--3d"
                  >
                    <span className="btn__text">
                      {" "}
                      <i className="fa fa-shopping-basket pr-1"></i> buy ZLT for
                      IDO
                    </span>
                  </a>
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

          <section className="space">
            <div className="container">
              <div className="row flex-column-reverse flex-lg-row-reverse align-items-center text-center">
                <div className="col-12 reveal">
                  <h2 className="mb-3 font-size--40 font-w--700">
                    No fees, Low risk, No rug polls, only rewards
                  </h2>

                  <p className="mb-1 pb-2 px-lg-6">
                    Zero risk IDO enables promising projects to raise capital on
                    the BSC. Investors are safe to invest in early-stage
                    projects through our KYC system and strict due diligence. We
                    make sure only audited, carefully vetted, and analyzed
                    blockchain projects will be chosen for IDO.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space--bottom bg-color--primary hidden">
            <div className="svg-shape--top w-100 z-index1">
              <img
                src="images/layout/mask-9.svg"
                alt="mask"
                className="svg w-100"
              />
            </div>

            <div className="svg-shape">
              <img src="images/layout/wave-6.svg" alt="wave" className="svg" />
            </div>

            <div className="container position-relative z-index2">
              <div className="row mb-3 mb-lg-8">
                <div className="col-12">
                  <picture>
                    <img
                      className="img-fluid"
                      src="images/launch2.png"
                      alt="device"
                    />
                  </picture>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-lg-6 mb-3 mx-auto text-center reveal">
                  <div className="section-title">
                    <h2 className="mb-2">
                      <span className="color--yellow">
                        THE SAFEST LAUNCHPAD ON BSC
                      </span>
                    </h2>
                    <p>
                      Zeroloss developers We will check for exploits and
                      vulnerabilities in any smart contracts, such as: Minting,
                      Proxies and Backdoors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <form
            id="preorder"
            action="#"
            className="form"
            method="post"
            style={{ display: "none", width: "100%", maxWidth: "660px" }}
          >
            <h2 className="mb-3"></h2>
            <div className="form-content">
              <div className="input-group mb-2 d-flex">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required=""
                />
              </div>
              <div className="input-group mb-2 d-flex">
                <input
                  name="company"
                  type="text"
                  className="form-control"
                  placeholder="Enter company name"
                />
              </div>
              <div className="input-group mb-2 d-flex">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required=""
                />
              </div>
              <div className="input-group mb-4 d-flex">
                <input
                  name="quantity"
                  type="number"
                  className="form-control"
                  placeholder="Quantity"
                />
              </div>

              <p className="mb-0 text-left">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Order now"
                />
              </p>
            </div>

            <div id="success" style={{ display: "none" }}>
              <p className="mb-0 text-left color--green"></p>
            </div>
          </form>

          <section className="bg-color--primary space--top">
            <footer className="section--dark footer footer--v1 position-relative">
              <div className="container text-center">
                <div className="row">
                  <div className="col-12 mb-2">
                    <span className="mb-2">
                      <img src="images/Zerolossrtagolds.png" alt="brand-logo" />
                    </span>
                    <div className="widget widget-nav">
                      <ul>
                        <li className="nav-item " />
                        <li>
                          <a href="defi.html">Launch App</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="https://" className="color--yellow">
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
                            <i className="fab fa-telegram-plane"></i>
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="https://twitter.com/Zeroloss_defi"
                            target="_blank"
                            className="color--white"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="https://www.reddit.com/r/thezerolosscommunity/"
                            target="_blank"
                            className="color--white"
                          >
                            <i className="fab fa-reddit"></i>
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
                        Made with ❤️ for the ZERO Community
                      </p>
                      <p className="mb-1">
                        For all marketing and advertising, please contact our
                        Marketing team
                        <a
                          className="mb-2 mb-lg-1"
                          href="mailto:info@zeroloss.org"
                        >
                          marketing@zeroloss.org
                        </a>
                      </p>
                      <p className="mb-1">
                        For general inquiries, please contact
                        <a
                          className="mb-2 mb-lg-1"
                          href="mailto:info@zeroloss.org"
                        >
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

export default Idolaunchpad;