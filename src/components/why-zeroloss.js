import React from "react";
import { useSpring } from "react-spring";
import { Animatedcontainer, calc, trans } from "./animated-countainer";

function WhyChooseUs() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));
  return (
    <>
      <section className="space" style={{ backgroundColor: "dimgray" }}>
        <div className="position-relative pb-7 py-xl-10">
          <div className="container">
            <div className="row flex-column-reverse flex-lg-row align-items-center text-center">
              <div className="col-12 col-md-10 col-lg-6 text-lg-left">
                <h2
                  className="mb-3 h3-font font-b--700"
                  style={{ color: "white" }}
                >
                  Why{" "}
                  <span className="color" style={{ color: "gold" }}>
                    ZEROLOSS
                  </span>
                </h2>
                <h4 style={{ fontWeight: "bold", color: "white" }}>
                  The Future of Stable Decentralized Finance
                </h4>
                <p className="opacity--70" style={{ color: "white" }}>
                  {" "}
                  ZEROLOSS is a smart <b>DeFi dApp</b> and exchange platform
                  built for a sustainable future for every crypto user with the
                  POE and Proactive Market Making (PMM) algorithm. it was
                  developed entirely in-house by the DODO team and is an
                  elegant, on-chain generalization of orderbook trading. It is
                  adapted and optimized for operations on the blockchain and has
                  proven itself to be highly performant and capital-efficient
                  (as its high volume/TVL ratio can attest) with many
                  innovative, flexible use cases in market making with very
                  reduced risk.
                  <br />
                  <br />
                  ZLT is a great asset to earn value on your long term
                  stablecoins, BTC, ETH, BNB and and other crypto holdings, all
                  interoperable, unstoppable and onchain through our PMMe stake
                  pool! There's a time lock on the zeroloss utility contract,
                  IZO and other Defi Blue Chips, which makes ZLT sustainable.
                  <br />
                  <br />
                  Zeroloss is a fork in the road. It takes us from where we’ve
                  been to where we’re destined to go: a global society that is
                  secure, transparent, and fair, and which serves the many as
                  well as the few. Like the technological revolutions that have
                  come before, it offers a new template for how we work,
                  interact, and create, as individuals, businesses, and
                  societies.
                  <br />
                  Leap on the ZEROLOSS <b>Rug-proof</b> dApp to <b>Profit</b> in
                  Defi 3.0.
                </p>
              </div>
              <div
                className="col-12 col-lg-6 mt-5 mt-lg-0 mb-3 mb-lg-0 pl-lg-10
              pos-abs-lg-vertical-center pos-right text-lg-left"
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
                    src="images/Zeroloss_inside.png"
                    alt="hero-image"
                    className="img-fluid reveal d-flex align-items-center "
                  />
                </Animatedcontainer>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="space--bottom jsElement"
        style={{ marginTop: "-30px" }}
        data-pull="-30"
      >
        <div className="container">
          <div className="row">
            <Animatedcontainer
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{
                transform: props.xys.interpolate(trans),
              }}
              className="col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0"
            >
              <div className="card border--none bg-white text-center box-shadow--4 py-4 px-2 d-flex align-items-center card-hover--shadow-3d">
                <span className="icon--lg color--primary bg-color--primary-opacity--10 rounded--full mb-2">
                  <img src="images/worlds.png" />
                </span>
                <h3 className="h5-font font-w--700 mb-1">Decentralized</h3>
                <p className="font-size--16">
                  DeFi protocol, focused on the purpose of value creation, with
                  a new financial algorithm to make the store of value
                  appreciate with time and interoperability at its core.
                </p>
              </div>
            </Animatedcontainer>
            <Animatedcontainer
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{
                transform: props.xys.interpolate(trans),
              }}
              className="col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0"
            >
              <div className="card border--none bg-white text-center box-shadow--4 py-4 px-2 d-flex align-items-center card-hover--shadow-3d">
                <span className="icon--lg color--primary bg-color--primary-opacity--10 rounded--full mb-2">
                  <img src="images/togetherz.png" />
                </span>
                <h3 className="h5-font font-w--700 mb-1">POE</h3>
                <p className="font-size--16">
                  {" "}
                  The core interoperability Algorithm model of ZEROLOSS <br />
                  As users stake there crypto assets the POE algorithm
                  redistributes profits and a drip pool is constantly grown
                </p>
              </div>
            </Animatedcontainer>
            <Animatedcontainer
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{
                transform: props.xys.interpolate(trans),
              }}
              className="col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0"
            >
              <div className="card border--none bg-white text-center box-shadow--4 py-4 px-2 d-flex align-items-center card-hover--shadow-3d">
                <span className="icon--lg color--primary bg-color--primary-opacity--10 rounded--full mb-2">
                  <img src="images/unbankedz.png" />
                </span>
                <h3 className="h5-font font-w--700 mb-1">Global Adoption</h3>
                <p className="font-size--16">
                  {" "}
                  ZEROLOSS is focused on redesigning the way decentralized
                  finance (DeFi) is structured to work. We are evolving how DeFi
                  works completely while delivering the most robust ecosystem
                  ever seen in Defi's future advancements DeFi 3.0.
                </p>
              </div>
            </Animatedcontainer>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
