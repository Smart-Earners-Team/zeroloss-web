import React from "react";

function Roadmap(props) {
  return (
    <>
      <section className="space--bottom pt-2 bg-color--primary-light--1 testimonials testimonials--v2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center mb-5">
                <h2 className="mb-3 font-size--40 font-w--700">Roadmap</h2>
              </div>

              <div className="timeline owl-carousel small_space">
                <div className="item">
                  <div className="timeline_box complete">
                    <div className="timeline_inner">
                      <div className="timeline_circle"></div>
                      <h6>Q1 2021</h6>
                      <p>
                        ZeroLoss was created
                        <br />
                        Project Design was developed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="timeline_box complete current">
                    <div className="timeline_inner">
                      <div className="timeline_circle"></div>
                      <h6>Q2 2021</h6>
                      <p>
                        Architecting of DeFi platform
                        <br /> Developing PMMe Algorithm
                      </p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="timeline_box ">
                    <div className="timeline_inner">
                      <div className="timeline_circle"></div>
                      <h6>Q3 2021</h6>
                      <p>Onboarding New Partnerships</p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="timeline_box ">
                    <div className="timeline_inner">
                      <div className="timeline_circle"></div>
                      <h6>Q1 2022</h6>
                      <p>
                        Token Presale <br />
                        Launch of <b>ZEROLOSS DeFi dAPP</b>; RugChecker, Stake,
                        SmartTrade, Pool, Mine and Farm
                      </p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="timeline_box ">
                    <div className="timeline_inner">
                      <div className="timeline_circle"></div>
                      <h6>Q2 2022</h6>
                      <p>
                        Architecting of ZEROLOSS NFT Minting and Exchange
                        Platform <br />
                        Begin development of cross-chain platform
                      </p>
                    </div>
                  </div>
                </div>

                {/*<div className="container mt-5">
                  <div className="row">
                    <div className="col-12 col-md-10 mx-auto reveal">
                      <div className="testimonials__pattern background-holder background--auto background--top--left opacity--40">
                        <img
                          src="images/layout/vertical-pattern-1.png"
                          alt="wave"
                          className="background-image-holder"
                        />
                      </div>

                      <div className="carosuel-slider--v7 testimonial bg-white border--around rounded--10">
                        <div className="slide">
                          <div className="d-md-flex p-3 py-lg-5 pl-lg-4 pr-lg-10">
                            <span className="testimonial__quote color--primary mr-3">
                              <i
                                class="fa fa-quote-right"
                                style={{ color: "black" }}
                              ></i>
                            </span>
                            <div>
                               <blockquote className="blockquote mb-3">
                                The ZEROLOSS platform is focused on exposing the
                                unbanked population to the use of cryptocurrency
                                in Defi through our POE Algorithm, and to switch
                                from fiat-digital-fiat funds. Holders of
                                zeroloss token ZLT earn value interoperably on
                                every transaction.
                              </blockquote> 
                              <div className="d-flex align-items-center">
                                <div className="d-flex flex-column">
                                  <span className="client-name font-size--17 font-w--600">
                                    <img
                                      src="images/Medium.svg"
                                      style={{ width: "120px" }}
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>*/}

                <div className="container mt-5">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="newsletter-form form--v3 position-relative d-lg-flex align-items-center rounded--10 py-4 p-lg-4 p-xl-7"
                        style={{ backgroundColor: "black" }}
                      >
                        <div className="svg-shape--top--right h-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="683"
                            height="304"
                            viewBox="0 0 683 304"
                            className="svg h-100 replaced-svg"
                          >
                            <defs>
                              <linearGradient
                                id="diagonal-shape-7-a"
                                x1="50%"
                                x2="50%"
                                y1="0%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stop-color="#FFF"
                                  stop-opacity="0"
                                ></stop>
                                <stop
                                  offset="100%"
                                  stop-color="#FFF"
                                  stop-opacity=".062"
                                ></stop>
                              </linearGradient>
                            </defs>
                            <g
                              fill="url(#diagonal-shape-7-a)"
                              fill-rule="evenodd"
                              transform="translate(-33.359 -398.859)"
                            >
                              <rect
                                width="283"
                                height="812"
                                x="246"
                                y="146"
                                transform="rotate(-45 387.5 552)"
                              ></rect>
                              <rect
                                width="283"
                                height="812"
                                x="349"
                                y="-18"
                                transform="rotate(-45 490.5 388)"
                              ></rect>
                            </g>
                          </svg>
                        </div>

                        <div className="col-12 col-lg-10 pr-lg-5 mb-3 mb-lg-0 text-center text-lg-left reveal">
                          <h2 className="h3-font color--white">
                            The official fundraiser for ZEROLOSS
                          </h2>
                          <p>
                            We raise funds from our community for Charity and
                            Community Building
                          </p>
                        </div>

                        <div className="col-12 col-md-10 col-lg-2 mx-md-auto text-right">
                          <a
                            // href="https://zeroloss.fund/"
                            href="/"
                            target="_blank"
                            className="btn btn-hover--splash"
                            type="submit"
                            style={{ backgroundColor: "gold" }}
                          >
                            <span className="btn__text">
                              GO! <i class="icon fa-arrowight"></i>
                              <i className="fa fa-arrow-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space--bottom bg-color--primary-light--1 ">
        <div className="container">
          <div className="row justify-content-center reveal">
            {/*<div className="col-12 col-lg-5 mb-2">
              <div className="card card--double card-hover--shadow">
                <div className="card-body px-3 py-4">
                   <a
                    href="https://twitter.com/Zeroloss_defi"
                    className="text-color--700 text-hover--transparent font-w--500 h5-font mb-2"
                  >
                    {" "}
                    The total circulatung supply of ZLT is fixed and will
                    linerly grow value interoperably with our PMMe Algorithm as
                    we continue to grow globally
                  </a>
                  <a
                    href="https://twitter.com/Zeroloss_defi"
                    className="btn btn-size--md btn--transparent"
                    style={{ color: "gold" }}
                  > 
                    <span className="btn__text p-0">
                      {" "}
                      Read more <i className="icon icon-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>*/}

            <div className="col-12 col-lg-5 mb-2">
              <div className="card card--double bg-white card-hover--shadow">
                <div className="card-body px-3 py-4">
                  <a
                    href="https://twitter.com/ZerolossToken"
                    className="text-color--700 text-hover--transparent font-w--500 h5-font mb-2"
                  >
                    ZEROLOSS is here to revolutionize how crypto users interact
                    with DeFi and web3.0
                  </a>
                  <a
                    href="https://twitter.com/Zeroloss_defi"
                    className="btn btn-size--md btn--transparent "
                    style={{ color: "gold" }}
                  >
                    <span className="btn__text p-0">
                      {" "}
                      Read more <i className="icon icon-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Roadmap;
