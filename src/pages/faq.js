import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/nav-bar';

function Faq(props) {
    return (
    <>       
    <NavBar />
     <br/><br/>
    
<section className="space--top pb-1 team team--v1" id="team" style={{ backgroundColor: "black"}}>
        <div className="pb-1">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-8 mx-auto reveal">
                        <div className="text-center mb-5 mb-lg-7">
                            <h2 className="h3-font font-w--600 mb-2" style={{ color: "white"}}>FAQ</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section className="space bg-color--primary-light--1">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-12 col-md-5 col-lg-4 sidebar">
                    <div className="sticky-top mb-4 z-index1">
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action font-size--18" data-scroll-nav="1"><span>General</span></a>
                            <a href="#" className="list-group-item list-group-item-action font-size--18" data-scroll-nav="2"><span>Transferring / Trading in general</span></a>
                            <a href="#" className="list-group-item list-group-item-action font-size--18" data-scroll-nav="3"><span>How To Buy [buy/sell]</span></a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-7">
                    <div className="article-entry accordion accordion--v2 remove-space--bottom" id="accordion1">
                        <div className="mb-6" data-scroll-index="1">
                            <h2 className="headline font-size--30 font-w--600 mb-4">General</h2>
                            <div className="card mb-1">
                                <button className="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                    <span className="font-size--18 text-color--700 font-w--500">Introduction</span>
                                    <i className="icon icon-up-arrow"></i>
                                </button>
                                <div id="collapse1" className="collapse show" data-parent="#accordion1">
                                    <div className="card-body bg-white pl-3">
                                        <p className="text-dark">A disruptive Defi2.0 dApp.<br />
                                     <br />
                                            ZLT is the utility Token of ZEROLOSS digital platform and dApp that carries the store of value and interoperability
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-1">
                                <button className="btn btn-header btn-link bg-white" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    <span className="font-size--18 text-color--700 font-w--500">Contact Us</span>
                                    <i className="icon icon-up-arrow"></i>
                                </button>
                                <div id="collapse2" className="collapse" data-parent="#accordion1">
                                    <div className="card-body bg-white pl-3">
                                        <p className="text-dark">
                                            Join our <a href="https://t.me/+ea-5HwPvFRcyM2Q0" target="_blank" style={{color: "gold"}}>Telegram group</a> (ENG)<br />
                                            Join our <a href="https://t.me/ZerolossNews" target="_blank" style={{color: "gold"}}>Telegram News channel</a><br />
                                            Follow our official Twitter: <a href="https://twitter.com/Zeroloss_defi" target="_blank" style={{color: "gold"}}>Twitter Page</a><br />
                                            Follow our official Reddit: <a href="https://www.reddit.com/user/ZeroLoss" target="_blank" style={{color: "gold"}}>Reddit Page</a><br />
                                            Follow our official Medium: <a href="https://zeroloss.medium.com/" target="_blank" style={{color: "gold"}}>Medium Page</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-1">

                                <button className="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    <span className="font-size--18 text-color--700 font-w--500">Light Paper</span>
                                    <i className="icon icon-up-arrow"></i>
                                </button>
                                <div id="collapse3" className="collapse" data-parent="#accordion1">
                                    <div className="card-body bg-white pl-3">
                                        <p className="text-dark">ZEROLOSS Light Paper<br/><br/>
                                            PMM Algorithm is the core interoperability model of ZEROLOSS!<br /> 
                                            ZLT is the utility Token of ZEROLOSS digital blockchain ledger that carries the store of value and interoperability, 
                                            </p>
                                            <br/><br/>
                                            <a href="https://drive.google.com/file/d/1k9ONuohtVZF-g1uhiQd5q1VyEWQM-SYZ/view?usp=sharing" style={{color: "gold"}}> Read here </a>
                                            
                                            </div>
                                </div>
                            </div>

                        </div>

                        <div className="mb-6" data-scroll-index="2">
                            <h2 className="headline font-size--30 font-w--600 mb-1">Transferring / Trading in general</h2>
                            <p className="text-dark mb-4">ZLT Token can be bought, exchanged and stored in your wallet. Buy: <a href="https://zeroloss.org/defi.html" target="_blank" style={{color: "gold"}}>Here</a></p>
                            <div className="card mb-1">
                                <button className="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    <span className="font-size--18 text-color--700 font-w--500">Exchange listing, CEX and DEX </span>
                                    <i className="icon icon-up-arrow"></i>
                                </button>
                                <div id="collapse4" className="collapse" data-parent="#accordion1">
                                    <div className="card-body bg-white pl-3">
                                        <p className="text-dark">ZLT will be listed at TOP exchanges soon. check our website or at <a href="#" target="_blank" style={{color: "gold"}}>CMC</a>, <a href="#" target="_blank" style={{color: "gold"}}>COINLIST</a> or <a href="#" target="_blank" style={{color: "gold"}}>CoinGecko</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-1">
                                <button className="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                    <span className="font-size--18 text-color--700 font-w--500">Smart Contract Address</span>
                                    <i className="icon icon-up-arrow"></i>
                                </button>
                                <div id="collapse5" className="collapse" data-parent="#accordion1">
                                    <div className="card-body bg-white pl-3">
                                        <p className="text-dark"><b>Binance Smart Chain:</b> Click <a href="https://bscscan.com/token/" target="_blank" style={{color: "gold"}}>here</a></p>
                                        <p className="text-dark"><b>Polygon Network Soon</b> </p>
                                        <p className="text-dark"><b>Solana Network Soon</b> </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-1">
                                <button className="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                    <span className="font-size--18 text-color--700 font-w--500">Bridge</span>
                                    <i className="icon icon-up-arrow"></i>
                                </button>
                                <div id="collapse6" className="collapse" data-parent="#accordion1">
                                    <div className="card-body bg-white pl-3">
                                        <p className="text-dark">ZEROLOSS Blockchain Cross-Chain Bridge coming soon</p>
                                        

                                        <p className="text-dark"></p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mb-6" data-scroll-index="3">
                            <h2 className="headline font-size--30 font-w--600 mb-1">How TO Buy [buy/sell]</h2>
                            <p className="text-dark mb-4">This is a guide to trade, either to buy or to sell, ZLT.<br /><br />
                                </p>

                            <div className="card mb-1">
                                <button className="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                    <span className="font-size--18 text-color--700 font-w--500">How To Buy</span>
                                    <i className="icon icon-up-arrow"></i>
                                </button>
                                <div id="collapse7" className="collapse" data-parent="#accordion1">
                                    <div className="card-body bg-white pl-3">
                                        <p className="text-dark">
                                        If you are new to Crypto and DeFi, here's a guide on how to connect to Binance Smart Chain with Metamask or Trustwallet <br/><br/> 
                                            Step 1. Metamask<br/>Download <a href="https://www.metamask.io" target="_blank" style={{color: "gold"}}>Metamask Chrome Extension</a> or <br /> 
                                            Download <a href="https://www.metamask.io" target="_blank" style={{color: "gold"}}>Metamask on your phone</a> <br/><br/>Add extension and then you will get two options:<br/>
                                            1. Import Wallet 2. Create New Wallet.<br/>if You want to create new wallet.<br/>First Create Password<br/><br/>You will then be given your backup phrase. 
                                            Write this down somewhere safe. Don't give out your Recovry phrase<br/><br/>Connect Your MetaMask With Binance Smart Chain <br/> <br/> 
                                            </p>
                                            <div className="overlap-image--v1 position-relative">
                            <picture className="overlap-image__main">
                                <img className="img-fluid rounded--08 box-shadow--5" src="images/metamaskbsc.png" alt="screen"/>
                            </picture> 
                            <br/><br/> 
                            Click the red circle icon in the top right hand corner and go down to Settings.<br/>
                            Scroll down to select Networks and from the list select Add Network.<br/><br/>Add a new network<br/><br/>
                            <div className="overlap-image--v1 position-relative">
                            <picture className="overlap-image__main">
                                <img className="img-fluid rounded--08 box-shadow--5" src="images/metamaskbsc1.png" alt="screen"/>
                            </picture> 
                            <p>
                                <br/> Click save and click the X to head back to main view. You will notice the units are no longer showing in ETH but are now showing BNB. 
                                Your wallet is now ready and connected to the Binance Smart Chain main net.<br/><br/>Step 2. Send BNB to your Metamask Wallet<br/>
                                I will assume you already have a Binance account and have some BNB already. If not, register an account and buy some!<br/>
                                Go to your wallet, find BNB and click Withdraw.<br/><br/>Here you will need to enter your Metamask address into the recipients BNB address field. 
                                So head back to your Metamask wallet and hover over and click on Account 1 at the top of the page, this will copy your address.<br/>
                                Go back to your Binance withdrawal page and paste that address into the Recipient’s BNB Address field.<br/>
                                You then have two options for Transfer Network, you have to select Binance Smart Chain (BEP20).<br/>Then lastly enter the amount of BNB you wish to send 
                                to your Metamask wallet and click submit.<br/>It may take a couple of mins for your BNB to reach your Metamask wallet so don’t freak out if the 
                                balance in your wallet isn’t updated instantly.<br/><br/>
                                Step 3. Buy ZLT on Pancakeswap<br/><br/>Go to ZLT’s page on Pancakeswap 
                                <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xc1ed8d529f5fe85837349f7dd57715a3904a5f21" target="_blank"><img src="images/pancake.png" alt="partner"/></a><br/><br/>
                                On this page you will see a button saying Connect. Click on it and select Metamask.<br/><br/>
                                Enter how much BNB you would like to spend to buy ZLT.<br/><br/>Click on the settings icon and adjust Slippage Tolerance to 1% and close settings.<br/>
                                Then click Swap<br/><br/>If you get an error message, go back to settings and adjust Slippage Tolerance to 5%.<br/>You have now purchased PROFIT. 
                                But it won’t show up in your wallet just yet.<br/><br/>
                                Step 4. Get ZLT to show in your Metamask Wallet or Trust Wallet<br/><br/>Go back to Metamask/TrustWallet and on the main page click the 
                                Add Token button and the select Custom Token.<br/><br/>Then paste the token address into the Token address field. 
                                <br/><br/>
                                The two remaining fields should be filled out for you once you paste in the token address.<br/><br/>
                                Then click add token and once you have done that you will be able to see your PROFIT in your Metamask wallet or Trust Wallet.<br /><br />
                                    Also keep in mind that exchanges differ on minimal deposit and withdrawal fee.<br/>
                                        For now, use a decentralised exchange to which you can connect a personal wallet on the BEP-20 network.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-1">
                                <button className="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                    <span className="font-size--18 text-color--700 font-w--500">Personal wallets</span>
                                    <i className="icon icon-up-arrow"></i>
                                </button>
                                
                                <div id="collapse8" className="collapse" data-parent="#accordion1">
                                    <div className="card-body bg-white pl-3">
                                        <p className="text-dark">Personal wallets are used to store PROFIT (outside of exchanges) and to trade at decentralised exchanges.<br />
                                            Such wallets are <a href="https://metamask.io/" target="_blank">MetaMask</a>, <a href="https://trustwallet.com/" target="_blank">Trust Wallet</a>, 
                                            <a href="https://www.tronlink.org/" target="_blank">Tronlink</a> 
                                            choose one that suits you. Keep in mind though: choose a wallet that is in accordance with the blockchain you want to transfer/trade on.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-1">
                                <button className="btn btn-header btn-link collapsed bg-white" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                    <span className="font-size--18 text-color--700 font-w--500">Trading on centralised exchanges</span>
                                    <i className="icon icon-up-arrow"></i>
                                </button>
                                <div id="collapse9" className="collapse" data-parent="#accordion1">
                                    <div className="card-body bg-white pl-3">
                                        <p className="text-dark"><b>How to buy/trade PROFIT</b><br />
                                            If you already own crypto’s, you can skip step 1.<br />
                                            <b>[1]</b> – Buy your first crypto (USDT, BTC, ETH, whatever is possible), either through (1) a
                                            bank transfer or (2) the use of a credit card. <br />
                                            This can be done via a variety of sites, <a href="https://www.moonpay.com/" target="_blank">Moonpay</a> or <a href="https://www.binance.com/" target="_blank">Binance</a>.
                                            <br />
                                            It is highly recommended, in my opinion, buy via Binance and in particular BNB COIN (Binance’s Native Token).<br />
                                            </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </div></div>

    </section>



   <Footer />


        
        </>
    );
}

export default Faq;