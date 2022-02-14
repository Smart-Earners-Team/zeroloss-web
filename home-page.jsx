import React from 'react';
import NavBar from '../common/components/nav-bar';

function Homepage(props) {
    return <>
           {/* <body className="theme-royal-blue" data-spy="scroll" data-target="#navbar-nav" data-animation="true"
      data-appearance="light"> */}

<div className="preloader">
    <div className="wrapper">
        <div className="blobs">
            <div className="blob-center"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
        </div>
        <div>
            <div className="loader-canvas canvas-left"></div>
            <div className="loader-canvas canvas-right"></div>
        </div>
    </div>
</div>




<main className="main">

<header className="navbar navbar-sticky navbar-expand-lg navbar-dark" style="background-color: black;">
    <div className="container position-relative">
        <a className="navbar-brand" href="index.html">
            <img className="navbar-brand__regular" src="img/Zerolosscy.png" alt="brand-logo" />
            <img className="navbar-brand__sticky" src="img/Zerolosscy.png" alt="sticky brand-logo" />
        </a>

        <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-inner ml-lg-auto pl-lg-2 pl-xl-6">

            <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <nav>
                <ul className="navbar-nav" id="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html" style="color: white;">Home</a>
                    </li>

                    <li className="nav-item ">
                        <a className="nav-link" href="defi.html" style="color: white;">Launch App</a>
                    </li>
                    
                    <li className="nav-item ">
                        <a className="nav-link" href="zerolosspad.html" style="color: white;">IDO Launchpad</a>
                    </li>
                    
                    <li className="nav-item ">
                        <a className="nav-link" href="rugchecker.html" style="color: white;">Rug Checker</a>
                    </li>
                    
                    <li className="nav-item ">
                        <a className="nav-link" href="https://drive.google.com/file/d/16bC22RMgPc5hUMIYpJELsNtWB6GMCLgb/view?usp=sharing" style="color: white;">LightPaper</a>
                    </li>
                    
                    <li className="nav-item ">
                        <a className="nav-link" href="faq.html" style="color: white;">FAQ</a>
                    </li>
                </ul>

            </nav>
        </div>
        <div className="mr-5 mr-lg-0 ml-lg-2">
            <a href="https://" className="btn btn-size--sm btn-border btn-hover--danger color--white"><span
                        className="btn__text font-w--500" >Buy</span></a>
            <a href="defi.html" target="_blank" className="btn btn-size--sm btn-hover--splash" style=" background-color: gold;"><span className="btn__text" >DeFi</span></a>
        </div>

    </div>

</header>

    <section className="hero hero--full hero--v9 d-flex align-items-center hidden" style="background-color: black;">
       

        <div className="container">
            <div className="row flex-column-reverse flex-lg-row">
                <div className="col-12 col-md-10 col-lg-7 mx-auto mx-lg-0 text-center text-lg-left z-index2">
                    <div className="hero-content reveal letters scale cd-intro">
                        <h1 className="hero__title h2-font font-w--700 mb-2 cd-headline letters scale" style=" color: white;">
                             <br />This is
                            <span className="cd-words-wrapper color--white">
                            <b className="is-visible" style=" color: gold;">Zero loss</b>
                            <b style=" color: gold;">Freedom</b>
                            </span></h1>
                        <p className="hero__description font-size--20 mb-3 mb-lg-5 pr-xl-10">DeFi 2.0 dApp and LAUNCHPAD POWERED BY ZEROLOSS</p>
<div style="">
    <p style="color: white; font-weight: bolder; font-size: 20px;">
        Zeroloss is the utility, $ZLT is the currency with hybrid Auto-yield algorithm to Hold and Grow your crypto portfolio
    </p>
</div>
<br /><br />
                        <a href="https://" className="btn btn-size--sm btn-border btn-hover--splash" style="color: gold;"><span
                        className="btn__text font-w--700">Buy ZLT</span></a>

                    </div>

                    <div className="features features--v2 d-flex justify-content-center justify-content-lg-start flex-wrap remove-space--x mt-4 mt-lg-8 reveal" style="color: gold;">
                        
                        <div className="single-item m-1 m-sm-4">
<span className="h2-font">
<i className="icon icon-handshake"></i>
</span>
                            <p className="h4-font">FAIR AND RUG-PROOF</p>
                            <p className="h8-font">KYC checks for projects launching on ZEROLOSS will give them the “low risk” badge and give investors the confidence.</p>
                        </div>
                        
                        <div className="single-item m-1 m-sm-4">
<span className="h2-font">
<i className="icon icon-security"></i>
</span>
                            <p className="h4-font">LOCKED LIQUIDITY</p>
                            <p className="h8-font">Blue chip projects will be required to lock a percentage of their liquidity with a trusted third party for a period of time.</p>
                             
                        </div>

                        <div className="single-item m-1 m-sm-4">
<span className="h2-font">
<i className="icon icon-key"></i>
</span>
                            <p className="h4-font">INTEROPERABLE</p>
                            <p className="h8-font">Get early-access to private and pre-sales for safe high-quality projects on Binance Smart Chain, without the need for large sums of capital.</p>
                            
                        </div>

                        <div className="single-item m-1 m-sm-4">
<span className="h2-font">
<i className="icon icon-money-bag"></i>
</span>
                            <p className="h4-font">IDO LAUNCHPAD</p>
                            <p className="h8-font">
                            ZLT token HOLDERS get access to IDO pools and the opportunity to get into new projects fairly without bots or whales eating the allocation.</p>
                        </div>

                    </div>
                </div>

                <div className="col-12 col-lg-6 mt-6 mt-lg-0 mb-2 mb-lg-0 pl-lg-4 pos-abs-lg-vertical-center pos-right hero__image">
                    <picture><img src="img/hero-11.png" alt="media-thumb" className="img-fluid" /></picture>
                </div>

            </div>

        </div>
    </section>
    



    <section className="space" style=" background-color: dimgray;">
        <div className="position-relative pb-7 py-xl-10">
            <div className="container">
                <div className="row flex-column-reverse flex-lg-row align-items-center text-center">
                    <div className="col-12 col-md-10 col-lg-6 text-lg-left">
                        <h2 className="mb-3 h3-font font-b--700" style="color: white;">Why <span className="color" style="color: gold;">ZEROLOSS</span></h2>
                        <h4 style="font-weight: bold; color: white;">The Future of Stable Decentralized Finance</h4> 
                        <p className="opacity--70" style="color: white;"> ZEROLOSS is a smart <b>DeFi dApp</b> and exchange platform built for a sustainable future for every crypto user with the Proactive Market Making (PMM) algorithm. it was developed entirely in-house by the DODO team and is an elegant, on-chain generalization of orderbook trading. It is adapted and optimized for operations on the blockchain and has proven itself to be highly performant and capital-efficient (as its high volume/TVL ratio can attest) with many innovative, flexible use cases in market making with very reduced risk. 
                        <br /><br />ZLT is a great asset to earn value on your long term stablecoins, BTC, ETH, BNB and and other crypto holdings, all interoperable, unstoppable and onchain through our PMM stake pool! 
There's a time lock on the zeroloss utility contract, IDO and other Defi Blue Chips, which makes ZLT sustainable.<br />
                        <br />Zeroloss is a fork in the road. It takes us from where we’ve been to where we’re destined to go: a global society that is secure, transparent, and fair, 
                        and which serves the many as well as the few.
                        Like the technological revolutions that have come before, it offers a new template for how we work, interact, and create, as individuals, businesses, and societies.
                        <br/>Leap on the ZEROLOSS <b>Rug-proof</b> dApp to <b>Profit</b> in Defi 2.0.</p>

                    </div>
                    <div className="col-12 col-lg-6 mt-5 mt-lg-0 mb-3 mb-lg-0 pl-lg-10 pos-abs-lg-vertical-center pos-right text-lg-left">
                        <picture><img src="img/Defi.png" alt="hero-image" className="img-fluid reveal" /></picture>
                    </div>

                </div>

            </div>

        </div>

    </section>


    <section className="space--bottom jsElement" data-pull="-60">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0">
                    <div className="card border--none bg-white text-center box-shadow--4 py-4 px-2 d-flex align-items-center card-hover--shadow-3d">
                        <span className="icon--lg color--primary bg-color--primary-opacity--10 rounded--full mb-2"><img src="img/worlds.png" /></span>
                        <h3 className="h5-font font-w--700 mb-1">Global Adoption</h3>
                        <p className="font-size--16">ZEROLOSS is focused on redesigning the way decentralized finance (DeFi) 
                        is structured to work. We are evolving how DeFi works completely while delivering the most robust 
                        ecosystem ever seen in Defi's future advancements DeFi2.0.</p>
                    </div>

                </div>

                <div className="col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0">
                    <div className="card border--none bg-white text-center box-shadow--4 py-4 px-2 d-flex align-items-center card-hover--shadow-3d">
                        <span className="icon--lg color--primary bg-color--primary-opacity--10 rounded--full mb-2"><img src="img/togetherz.png" /></span>
                        <h3 className="h5-font font-w--700 mb-1">POE</h3>
                        <p className="font-size--16"> The core interoperability Algorithm model of ZEROLOSS <br />
                        As users stake their crypto assets the POE algorithm redistributes profits and a drip pool is constantly grown</p>
                    </div>

                </div>

                <div className="col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0">
                    <div className="card border--none bg-white text-center box-shadow--4 py-4 px-2 d-flex align-items-center card-hover--shadow-3d">
                        <span className="icon--lg color--primary bg-color--primary-opacity--10 rounded--full mb-2"><img src="img/unbankedz.png" /></span>
                        <h3 className="h5-font font-w--700 mb-1">Decentralized</h3>
                        <p className="font-size--16"> DeFi protocol, focused on the purpose of value creation, with a new financial algorithm to make 
                        the store of value appreciate with time and interoperability at its core.</p>
                    </div>



            </div>
            </div>
        </div>
    </section>

  

        <section className="space--bottom pt-4 hidden" id="adoption" style="background-color: black;">




            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto text-center reveal">
                        <h2 className="mb-3 font-size--20 font-w--100" style="color: white; font-weight: light;">The Binance Smart 
                        Chain is a great tool for investors to get lower transaction fees and faster speeds. However, constant rugs 
                        and exit scams are currently hurting the progress of DeFi on Binance Smart Chain.

                        ZEROLOSS was created with a clear focus centered on solving these problems and bring a sense of security, to 
                        Binance Smart Chain. We're building a platform that will ensure the safety of all funds, for both investors and
                         projects.

                        </h2>

                        <p className="mb-1 pb-2 px-lg-6" style="color: white; font-weight: bolder; font-size: 20px;">TRUSTED dAPPs on BINANCE SMART CHAIN</p>

                        <div className="icon-fill--wide text-center d-lg-flex justify-content-lg-center flex-wrap reveal">
                            <a className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary" href="https://poocoin.app" target="_blank" style=" border: 4px solid white;">
                                <img src="img/poocoin1.jpg" alt="" />
                            <span className="t-icon__brand-name h5-font font-w--500 text-color--700" style="color: white;">Poocoin Chart</span>
                            </a>
                            
                            <a className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary" href="https://cbridge.celer.network/" target="_blank" style="background-color: gold;">
                                <img src="img/cBridge1.jpg" alt="" />
                                <span className="t-icon__brand-name h5-font font-w--500" style=" color: black;"></span>
                            </a>
                            
                             <a className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary" href="https://apeboard.finance" target="_blank" style="background-color: gold;">
                                 <img src="img/Apeboard.jpg" alt="" />
                                <span className="t-icon__brand-name h5-font font-w--500" style=" color: black;">Apeboard Portfolio Check</span>
                            </a>
                            
                            <a className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary" href="https://bscscan.com/token/0xc1ed8d529f5fe85837349f7dd57715a3904a5f21" target="_blank" style=" border: 4px solid white;">
                                <span className="t-icon__brand-icon h4-font color--primary"><i className="cf cf-bnb color--yellow"></i></span>
                                <span className="t-icon__brand-name h5-font font-w--500 text-color--700" style="color: white;">Binance Smart Chain</span>
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
                            <h2 className="mb-3 font-size--40 font-w--700">Officially Supported Wallets</h2>
                            <p className="text-color--100">Wallets for BEP20 and ERC20 Tokens</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <div className="border--bottom pb-1 reveal">
                            <span className="m-2 m-lg-4"><a href="https://www.trustwallet.com/" target="_blank"><img src="img/trustwallet.png" height="50" alt="logo" /></a></span>
                            <span className="m-2 m-lg-4"><a href="https://metamask.io/" target="_blank"><img src="img/metamask.png" height="50" alt="logo" /></a></span>
                            <span className="m-2 m-lg-4"><a href="https://safepal.io/" target="_blank"><img src="img/safe.png" height="50" alt="logo" /></a></span>
                            <span className="m-2 m-lg-4"><a href="https://token.im/" target="_blank"><img src="img/imtoken.png" height="50" alt="logo" /></a></span>
                            <span className="m-2 m-lg-4"><a href="https://www.coinomi.com/" target="_blank"><img src="img/coinomi.png" height="50" alt="logo" /></a></span>
                            <span className="m-2 m-lg-4"><a href="https://www.ledger.com/" target="_blank"><img src="img/ledger.png" height="50" alt="logo" /></a></span>
                            
                        </div>
                        <a href="faq.html" className="mt-3 btn" style=" background-color: gold;">
                        <span className="btn__text d-flex align-items-center"> How add to wallet? <i className="icon icon-arrow-right font-size--20"></i>
                        </span>
                        </a>
                    </div>
                </div>



            </div>

        </section>


    <section className="pt-5 pb-1" style="background-color: black;">
        <div className="background-holder background--top--left">
            <img src="img/layout/oval.png" alt="wave" className="background-image-holder" />
        </div>

        <div className="svg-shape w-100 jsElement" data-push="250">
            <img src="img/layout/wave-13.svg" alt="wave" className="svg w-100" />
        </div>

        <div className="section-overlap bg-color--primary-light--1 d-lg-none d-xl-block pos-abs-bottom jsElement" data-height="170"></div>

        <div className="container">
            <div className="row text-center text-md-left justify-content-between align-items-lg-center align-items-xl-end mb-6">
                <div className="col-12 col-sm-10 col-md-7 mb-5 mb-md-0 mx-auto mx-md-0 reveal">
                    <h2 className="mb-2 h3-font font-w--700" style="color: white;">Top BEP20 DEX Platforms</h2>
                    <p className="opacity--80"><b />Best DEXs for token exchange on BSC</p>
                </div>

                <div className="col-12 col-sm-8 col-md-5 col-xl-4 d-inline-flex d-lg-block align-items-center justify-content-center mx-auto mx-md-0">
                    
                </div>

            <div className="row justify-content-between align-items-lg-start">
                <div className="col-12 col-lg-7 col-xl-7 d-flex flex-wrap flex-column flex-sm-row align-items-center justify-content-center align-items-lg-start justify-content-lg-start justify-content-xl-between mb-4 mb-lg-0 reveal">
                    <div className="card d-inline-flex border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                        <span><a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xc1ed8d529f5fe85837349f7dd57715a3904a5f21" target="_blank"><img src="img/pancake.png" alt="partner" /></a></span>
                    </div>
                    
                    <div className="card d-inline-flex border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-sm-1 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                        <span><a href="https://www.bakeryswap.org/" target="_blank"><img src="img/bakeryswap.png" alt="partner" /></a></span>
                    </div>

                    <div className="card d-inline-flex border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                        <span><a href="https://apeswap.finance/" target="_blank"><img src="img/apeswap.png" alt="partner" /></a></span>
                    </div>
                    
                    <div className="card d-inline-flex border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                        <span><a href="https://home.babyswap.finance/" target="_blank"><img src="img/babyswaps.png" alt="partner" /></a></span>
                    </div>
                    
                </div>


                <div className="col-12 col-md-10 col-lg-5 col-xl-4 mx-auto mx-lg-0 pb-10">


                    <div className="testimonials testimonals--v2 position-relative pb-7">
                        <div className="card box-shadow--5 p-3 mb-10">
                            <p className="text-center mb-1 text-dark">and more exchanges</p>
                            <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" className="btn btn-size--sm btn-border btn-hover--splash color--green">
                                <span
                        className="btn__text font-w--700">Buy ZLT</span></a>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </div>

    </section>





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
                                    <p>ZeroLoss was created<br />
                                    Project Design was developed</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="timeline_box complete current">
                                <div className="timeline_inner">
                                    <div className="timeline_circle"></div>
                                    <h6>Q2 2021</h6>
                                    <p>Architecting of DeFi platform<br/> Developing POE Algorithm</p>
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
                                    <p>Token Presale <br />
                                    Launch of <b>ZEROLOSS.FINANCE</b>; Liquidity minig, Stake, Swap and Farm
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="item">
                            <div className="timeline_box ">
                                <div className="timeline_inner">
                                    <div className="timeline_circle"></div>
                                    <h6>Q2 2022</h6>
                                    <p>Architecting of ZEROLOSS NFT Minting and Exchange Platform <br/>Begin development of cross-chain platform</p>
                                </div>
                            </div>
                        </div>
                        
                <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-10 mx-auto reveal">
                    <div className="testimonials__pattern background-holder background--auto background--top--left opacity--40">
                        <img src="img/layout/vertical-pattern-1.png" alt="wave" className="background-image-holder" />
                    </div>

                    <div className="carosuel-slider--v7 testimonial bg-white border--around rounded--10">
                        <div className="slide">
                            <div className="d-md-flex p-3 py-lg-5 pl-lg-4 pr-lg-10">
                                <span className="testimonial__quote color--primary mr-3"><i className="icon icon-quote"></i></span>
                                <div>
                                    <blockquote className="blockquote mb-3">The ZEROLOSS platform is focused on exposing the unbanked population 
                                    to the use of cryptocurrency in Defi through our POE Algorithm, and to switch from fiat-digital-fiat funds.
                                    Holders of zeroloss token ZLT earn value interoperably on every transaction.</blockquote>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column">
                                            <span className="client-name font-size--17 font-w--600"><img src="img/Medium.svg" style="width: 120px;" /></span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    </div>
                </div>
            </div>
        

        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="newsletter-form form--v3 position-relative d-lg-flex align-items-center rounded--10 py-4 p-lg-4 p-xl-7" style="background-color: black;">
                        <div className="svg-shape--top--right h-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="683" height="304" viewBox="0 0 683 304" className="svg h-100 replaced-svg">
                                <defs>
                                    <linearGradient id="diagonal-shape-7-a" x1="50%" x2="50%" y1="0%" y2="100%">
                                        <stop offset="0%" stop-color="#FFF" stop-opacity="0"></stop>
                                        <stop offset="100%" stop-color="#FFF" stop-opacity=".062"></stop>
                                    </linearGradient>
                                </defs>
                                <g fill="url(#diagonal-shape-7-a)" fill-rule="evenodd" transform="translate(-33.359 -398.859)">
                                    <rect width="283" height="812" x="246" y="146" transform="rotate(-45 387.5 552)"></rect>
                                    <rect width="283" height="812" x="349" y="-18" transform="rotate(-45 490.5 388)"></rect>
                                </g>
                            </svg>
                        </div>

                        <div className="col-12 col-lg-10 pr-lg-5 mb-3 mb-lg-0 text-center text-lg-left reveal">
                            <h2 className="h3-font color--white">The official fundraiser for ZEROLOSS
                            </h2>
                            <p>We raise funds from our community for Charity and Community Building</p>

                        </div>

                        <div className="col-12 col-md-10 col-lg-2 mx-md-auto text-right">
                            <a href="https://zeroloss.fund/" target="_blank" className="btn btn-hover--splash" type="submit" style="background-color: gold;"><span className="btn__text">GO! <i className="icon icon-arrow-right"></i></span></a>

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
                <div className="col-12 col-lg-5 mb-2">
                    <div className="card card--double card-hover--shadow">
                        <div className="card-body px-3 py-4">
                            <a href="https://twitter.com/ZerolossToken" className="text-color--700 text-hover--transparent font-w--500 h5-font mb-2"> The total circulatung supply of ZLT is fixed and will linerly grow value interoperably with our PMM Algorithm as we continue to grow globally</a>
                            <a href="https://twitter.com/ZerolossToken" className="btn btn-size--md btn--transparent" style=" color: gold;">
                            <span className="btn__text p-0"> Read more <i className="icon icon-arrow-right"></i>
                            </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-5 mb-2">
                    <div className="card card--double bg-white card-hover--shadow">
                        <div className="card-body px-3 py-4">
                            <a href="https://twitter.com/ZerolossToken" className="text-color--700 text-hover--transparent font-w--500 h5-font mb-2">Team ZEROLOSS 
                            is happy to announce our ZLT Token Listing on CoinMarketCap HERE</a>
                            <a href="https://twitter.com/ZerolossToken" className="btn btn-size--md btn--transparent " style=" color: gold;">
                            <span className="btn__text p-0"> Read more <i className="icon icon-arrow-right"></i>
                            </span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


<section className=" space--top" style="background-color: black;">




    <footer className="section--dark footer footer--v1 position-relative">
        <div className="container text-center">
            <div className="row">
                <div className="col-12 mb-2">
<span className="mb-2">
<img src="img/Zerolossrtagolds.png" alt="brand-logo" />
</span>
                    <div className="widget widget-nav">
                        <ul>
                            <li className="nav-item " />
                            <li><a href="defi.html">Launch App</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xc1ed8d529f5fe85837349f7dd57715a3904a5f21" className="color--yellow">Buy</a></li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="row">
                <div className="col-12">
                    <div className="footer-border py-3">
                        <ul className="icon-group icon--2x justify-content-center mb-0">
                            <li className="p-2"><a href="https://t.me/+ea-5HwPvFRcyM2Q0" target="_blank" className="color--white"><i className="fab fa-telegram-plane"></i></a></li>
                            <li className="p-2"><a href="https://twitter.com/Zeroloss_defi" target="_blank" className="color--white"><i className="fab fa-twitter"></i></a></li>
                            <li className="p-2"><a href="https://www.reddit.com/r/thezerolosscommunity/" target="_blank" className="color--white"><i className="fab fa-reddit"></i></a></li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="row">
                <div className="col-12">
                    <div className="footer-bottom pt-5 pb-3 d-lg-flex justify-content-between">
                        <p className="mb-1">Made with ❤️ for the ZEROLOSS Community</p>
                        <p className="mb-1">For all marketing and advertising, please contact our Marketing team:
                        <a className="mb-2 mb-lg-1" href="mailto:info@zeroloss.org"> marketing@zeroloss.org</a>
                        </p>
                        <p className="mb-1">For general inquiries, please contact:
                        <a className="mb-2 mb-lg-1" href="mailto:info@zeroloss.org"> info@zeroloss.org</a>
                        </p>
                        <ul className="footer-languages list-unstyled d-flex justify-content-center" style="display:none !important;">
                            <li><a href="#">English</a></li>
                            <li><a href="#">中文 (简体)</a></li>
                            <li><a href="#">বাংলা</a></li>
                            <li><a href="#">русский язык</a></li>
                            <li><a href="#">العَرَبِيَّة</a></li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>

    </footer>
</section>

</main>
{/* </body> */}
       </>
    
}

export default Homepage;