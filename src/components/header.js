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
                DeFi 3.0 dApp | ZeroVerse POWERED BY ZLT
              </p>
              <div>
                <p
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontZize: "20px",
                  }}
                >
                  Zeroloss is the utility, ZLT is the currency with PMM
                  algorithm. 
                </p>
              </div>
              <br />
              <br />
              <a
                href="https://app.dodoex.io/?outputCurrency=0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2&from=ZLT&to=BUSD"
                className="btn btn-size--sm btn-border btn-hover--splash"
                style={{ color: "gold" }}
              >
                <span className="btn__text font-w--700">Buy ZLT</span>
              </a>
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
                  Zeroloss is built with PMM reducing any risk of Impermanent Loss, Zero Taxation
                  and Low slippage 1% step into ZeroVerse with confidence badge.
                </p>
              </div>

              <div className="single-item m-1 m-sm-4">
                <span className="h2-font">
                  <i className="fas fa-shield-alt"></i>
                </span>
                <p className="h4-font">LOCKED LIQUIDITY</p>
                <p className="h8-font">
                  ZLT Tokens will be locked in to mint ZeroVerse.
                  60% of the total supply of ZLT will be locked as LP with a
                  verified trusted third party for a time period.
                </p>
              </div>

              <div className="single-item m-1 m-sm-4">
                <span className="h2-font">
                  <i className="fas fa-key"></i>
                </span>
                <p className="h4-font">INTEROPERABLE</p>
                <p className="h8-font">
                  POS utility platform with PMM algorithm and POE as the core interoperability model,
                  SmartTrade, Pools, Stake, Combiner Harvest Mining, NFT with ZLT
                </p>
              </div>

              <div className="single-item m-1 m-sm-4">
                <span className="h2-font">
                  <i className="fas fa-money-check"></i>
                </span>
                <p className="h4-font">ZEROLOSSPAD</p>
                <p className="h8-font">
                  ZLT token HOLDERS comes first and have access to IZO pools, Lands in ZeroVerse and
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
