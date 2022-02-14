import React from "react";
import Typewriter from "typewriter-effect";
import { useSpring } from "react-spring";
import { Animatedcontainer, calc, trans } from "./animated-countainer";
import { Link } from "react-router-dom";



const header = {
  fontFamily: "sans-serif",
  fontWeight: 800,
  fontSize: "40px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  color: "gold",
};



function Header() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));

  return (
    <section
      className="hero hero--full hero--v9 d-flex align-items-center hidden"
      style={{ backgroundColor: "black" }}
    >
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-12 col-md-10 col-lg-7 mx-auto mx-lg-0 text-center text-lg-left z-index2">
            <div className="hero-content reveal letters scale cd-intro">
              <h1
                className="hero__title h2-font font-w--700 mb-2 cd-headline letters scale"
                style={{ color: "white" }}
              >
                <br />
                <Typewriter
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: 800,
                    fontSize: "40px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    color: "gold",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Best DeFi experience Guaranteed!!")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        '<strong>This is <span style="color: gold;">Zeroloss</span></strong>'
                      )
                      .start();
                  }}
                />

                <span className="cd-words-wrapper color--white">
                  <b className="is-visible" style={{ color: "gold" }}></b>
                  <b style={{ color: "gold" }}>Freedom</b>
                </span>
              </h1>
              <p className="hero__description font-size--20 mb-3 mb-lg-5 pr-xl-10">
                DeFi 3.0 dApp and LAUNCHPAD POWERED BY ZEROLOSS
              </p>
              <div>
                <p
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontZize: "20px",
                  }}
                >
                  Zeroloss is the utility, $ZLT is the currency with PMMe
                  algorithm to Grow your crypto portfolio
                </p>
              </div>
              <br />
              <br />
              <Link
                to="/zerolosspad"
                className="btn btn-size--sm btn-border btn-hover--splash"
                style={{ color: "gold" }}
              >
                <span className="btn__text font-w--700">Buy ZLT</span>
              </Link>
            </div>

            <div
              className="features features--v2 d-flex justify-content-center justify-content-lg-start flex-wrap remove-space--x mt-4 mt-lg-8 reveal"
              style={{ color: "gold" }}
            >
              <div className="single-item m-1 m-sm-4">
                <span className="h2-font">
                  <i class="fas fa-handshake"></i>
                </span>
                <p className="h4-font">RUG-PROOF AND EQUITABLE</p>
                <p className="h8-font">
                  Projects launching on ZEROLOSSPAD will have KYC checks to give
                  investors the confidence and give the projects “low risk”
                  badge.
                </p>
              </div>

              <div className="single-item m-1 m-sm-4">
                <span className="h2-font">
                  <i className="fas fa-shield-alt"></i>
                </span>
                <p className="h4-font">LOCKED LIQUIDITY</p>
                <p className="h8-font">
                  IZO projects will lock more than 60% of their liquidity with a
                  verified trusted third party for a time period.
                </p>
              </div>

              <div className="single-item m-1 m-sm-4">
                <span className="h2-font">
                  <i className="fas fa-key"></i>
                </span>
                <p className="h4-font">INTEROPERABLE</p>
                <p className="h8-font">
                  Get very early-access to private and public pre-sales of safe
                  high-end and quality projects on Binance Smart Chain, with a
                  reasonable sum of capital.
                </p>
              </div>

              <div className="single-item m-1 m-sm-4">
                <span className="h2-font">
                  <i className="fas fa-money-check"></i>
                </span>
                <p className="h4-font">ZEROLOSSPAD</p>
                <p className="h8-font">
                  ZLT token HOLDERS comes first and have access to IZO pools and
                  the opportunity to get into new projects equitably without
                  whales and bots eating up the allocation.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-6 mt-6 mt-lg-0 mb-2 mb-lg-0 pl-lg-4 pos-abs-lg-vertical-center pos-right
           hero__image "
          >
            <Animatedcontainer
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{
                transform: props.xys.interpolate(trans),
              }}
            >
              <img
                src="images/zeroloss-dev1.png"
                alt="media-thumb"
                className="img-fluid d-flex card-hover--shadow-3d"
              />
            </Animatedcontainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
