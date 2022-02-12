import React from "react";


const ZerolossBinance = () => {

function importAll(r) {
  r.keys().forEach(r);
}

 const images = importAll(require.context("./", true, /\.js$/));

  return (
    <>
      <section
        className="space--bottom pt-4 hidden"
        id="adoption"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto text-center reveal">
              <h2
                className="mb-3 font-size--20 font-w--100"
                style={{ color: "white", fontWeight: "light" }}
              >
                The Binance Smart Chain as a scaling solution to ethereum is a
                great tool for crypto users and investors to get lower
                transaction fees and faster speeds. However, the incessant exit
                scams and rug pools are currently deterring the progressive
                growth of DeFi on Binance Smart Chain. ZEROLOSS was created with
                a clear focus centered on solving these problems and bring a
                sense of security, to Binance Smart Chain with ZEROLOSS rug
                checker. We're building a platform that will ensure the safety
                of all user funds, for both projects and investors.
              </h2>

              <p
                className="mb-1 pb-2 px-lg-6"
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                TRUSTED dAPPs on BINANCE SMART CHAIN
              </p>

              <div className="icon-fill--wide text-center d-lg-flex justify-content-lg-center flex-wrap reveal">
                <a
                  className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary"
                  href="https://poocoin.app"
                  target="_blank"
                  style={{ border: "4px solid white" }}
                >
                  <img src={"images/poocoin1.jpg"} alt="" />
                  <span
                    className="t-icon__brand-name h5-font font-w--500 text-color--700"
                    style={{ color: "white" }}
                  >
                    Poocoin Chart
                  </span>
                </a>

                <a
                  className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary"
                  href="https://cbridge.celer.network/"
                  target="_blank"
                  style={{ backgroundColor: "gold" }}
                >
                  <img src={"images/cBridge1.jpg"} alt="" />
                  <span
                    className="t-icon__brand-name h5-font font-w--500"
                    style={{ color: "black" }}
                  ></span>
                </a>

                <a
                  className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary"
                  href="https://apeboard.finance"
                  target="_blank"
                  style={{ backgroundColor: "gold" }}
                >
                  <img src={"images/Apeboard.jpg"} alt="" />
                  <span
                    className="t-icon__brand-name h5-font font-w--500"
                    style={{ color: "black" }}
                  >
                    Apeboard Portfolio Check
                  </span>
                </a>

                <a
                  className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary"
                  href="https://bscscan.com/token/0xc1ed8d529f5fe85837349f7dd57715a3904a5f21"
                  target="_blank"
                  style={{ border: "4px solid white" }}
                >
                  <span className="t-icon__brand-icon h4-font color--primary">
                    <i className="cf cf-bnb color--yellow"></i>
                  </span>
                  <span
                    className="t-icon__brand-name h5-font font-w--500 text-color--700"
                    style={{ color: "white" }}
                  >
                    Binance Smart Chain
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space bg-white hidden" id="developer">
        <div className="container position-relative z-index2">
          <div className="row">
            <div className="col-12 col-lg-6 mb-3 mx-auto text-center reveal">
              <div className="section-title">
                <h2 className="mb-3 font-size--40 font-w--700">
                  Officially Supported Wallets
                </h2>
                <p className="text-color--100">
                  Wallets for BEP20 and ERC20 Tokens
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <div className="border--bottom pb-1 reveal">
                <span className="m-2 m-lg-4">
                  <a href="https://www.trustwallet.com/" target="_blank">
                    <img
                      src={"images/trustwallet.png"}
                      height="50"
                      alt="logo"
                    />
                  </a>
                </span>
                <span className="m-2 m-lg-4">
                  <a href="https://metamask.io/" target="_blank">
                    <img src={"images/metamask.png"} height="50" alt="logo" />
                  </a>
                </span>
                <span className="m-2 m-lg-4">
                  <a href="https://safepal.io/" target="_blank">
                    <img src={"images/safe.png"} height="50" alt="logo" />
                  </a>
                </span>
                <span className="m-2 m-lg-4">
                  <a href="https://token.im/" target="_blank">
                    <img src={"images/imtoken.png"} height="50" alt="logo" />
                  </a>
                </span>
                <span className="m-2 m-lg-4">
                  <a href="https://www.coinomi.com/" target="_blank">
                    <img src={"images/coinomi.png"} height="50" alt="logo" />
                  </a>
                </span>
                <span className="m-2 m-lg-4">
                  <a href="https://www.ledger.com/" target="_blank">
                    <img src={"images/ledger.png"} height="50" alt="logo" />
                  </a>
                </span>
              </div>
              <button
                href="faq.html"
                className="mt-3 btn"
                style={{
                  backgroundColor: "gold",
                  height: "70px",
                }}
              >
                <span className="btn__text d-flex justify-content-between">
                  How add to wallet?
                  <i className="icon icon-arrow-right font-size--20"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-1" style={{ backgroundColor: "black" }}>
        <div className="background-holder background--top--left">
          <img
            src={"images/layout/oval.png"}
            alt="wave"
            className="background-image-holder svg w-100"
          />
        </div>

        <div className="svg-shape w-100 jsElement" data-push="250">
          <img
            src={"images/layout/wave-13.svg"}
            alt="wave"
            className="svg w-100"
          />
        </div>

        <div
          className="section-overlap bg-color--primary-light--1 d-lg-none d-xl-block pos-abs-bottom jsElement"
          data-height="170"
        ></div>

        <div className="container">
          <div className="row text-center text-md-left justify-content-between align-items-lg-center align-items-xl-end mb-6">
            <div className="col-12 col-sm-10 col-md-7 mb-5 mb-md-0 mx-auto mx-md-0 reveal">
              <h2
                className="mb-2 h3-font font-w--700"
                style={{ color: "white" }}
              >
                Top BEP20 DEX Platforms
              </h2>
              <p className="opacity--80">
                <b />
                Best DEXs for token exchange on BSC
              </p>
            </div>

            <div className="col-12 col-sm-8 col-md-5 col-xl-4 d-inline-flex d-lg-block align-items-center justify-content-center mx-auto mx-md-0"></div>

            <div className="row justify-content-between align-items-lg-start">
              <div className="col-12 col-lg-7 col-xl-7 d-flex flex-wrap flex-column flex-sm-row align-items-center justify-content-center align-items-lg-start justify-content-lg-start justify-content-xl-between mb-4 mb-lg-0 reveal">
                <div className="border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                  <span>
                    <a
                      href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xc1ed8d529f5fe85837349f7dd57715a3904a5f21"
                      target="_blank"
                    >
                      <img src={"images/pancake.png"} alt="partner" />
                    </a>
                  </span>
                </div>

                <div className="border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-sm-1 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                  <span>
                    <a href="https://www.bakeryswap.org/" target="_blank">
                      <img src={"images/bakeryswap.png"} alt="partner" />
                    </a>
                  </span>
                </div>

                <div className=" border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                  <span>
                    <a href="https://apeswap.finance/" target="_blank">
                      <img src={"images/apeswap.png"} alt="partner" />
                    </a>
                  </span>
                </div>

                <div className="border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                  <span>
                    <a href="https://home.babyswap.finance/" target="_blank">
                      <img src={"images/babyswaps.png"} alt="partner" />
                    </a>
                  </span>
                </div>
              </div>

              <div className="col-12 col-md-10 col-lg-5 col-xl-4 mx-auto mx-lg-0 pb-10">
                <div className="testimonials testimonals--v2 position-relative pb-7">
                  <div className="card box-shadow--5 p-3 mb-10">
                    <p className="text-center mb-1 text-dark">
                      and more exchanges
                    </p>
                    <button
                      href="https://exchange.pancakeswap.finance/#/swap?outputCurrency="
                      className="btn btn-size--sm btn-border btn-hover--splash color--green"
                    >
                      <span className="btn__text font-w--700">Buy ZLT</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ZerolossBinance;
