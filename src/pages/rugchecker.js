import React from "react";
import Footer from "../components/footer";
import NavBar from "../components/nav-bar";

const Rugchecker = () => {
  return (
    <>
     <body className="theme-royal-blue" data-spy="scroll" data-target="#navbar-nav" data-animation="true"
      data-appearance="light">

{/* <div className="preloader">
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
</div> */}




 <main className="main">
<NavBar />

    <section className="space--top bg-color--primary team team--v1" id="team">
        <div className="pb-6 pb-lg-10">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-8 mx-auto reveal">
                        <div className="text-center mb-5 mb-lg-7">
                            <h2 className="h3-font font-w--600 mb-2">Our team</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <div className="card card-hover--3d align-items-center border--none text-center pt-5 reveal bg-gradient--darkblue--1">
                            <img src="images/rumo.jpg" alt="mamber" className="img-fluid"/>
                            <div className="card-body align-items-center">

                                <h6 className="font-w--600 color--yellow">Fawcett Johnpioq</h6>
                                <span className="font-size--14 opacity--80 font-w--500 color--white">Lead Advisor, Social Media Director</span>


                                <ul className="icon-group justify-content-center my-1">
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-telegram-plane"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <div className="card card-hover--3d align-items-center border--none text-center pt-5 reveal bg-gradient--darkblue--1">
                            <img src="images/puntar.jpg" alt="mamber" className="img-fluid"/>
                            <div className="card-body align-items-center">
                                <h6 className="font-w--600 color--yellow">Anselem Michigan</h6>
                                <span className="font-size--14 opacity--80 font-w--500 color--white">Online Marketing<br/>ZeroLoss</span>
                                <ul className="icon-group justify-content-center my-1">
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-telegram-plane"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <div className="card card-hover--3d align-items-center border--none text-center pt-5 reveal bg-gradient--darkblue--1">
                            <img src="images/ben.jpg" alt="mamber" className="img-fluid"/>
                            <div className="card-body align-items-center">
                                <h6 className="font-w--600 color--yellow">Joel Benedict</h6>
                                <span className="font-size--14 opacity--80 font-w--500 color--white">External Advisor<br/>Europe</span>
                                <ul className="icon-group justify-content-center my-1">
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-telegram-plane"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <div className="card card-hover--3d align-items-center border--none text-center pt-5 reveal bg-gradient--darkblue--1">
                            <img src="images/ocon.jpg" alt="mamber" className="img-fluid"/>
                            <div className="card-body align-items-center">
                                <h6 className="font-w--600 color--yellow">Sophia Richard</h6>
                                <span className="font-size--14 opacity--80 font-w--500 color--white">External Advisor<br/>Asia</span>
                                <ul className="icon-group justify-content-center my-1">
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-telegram-plane"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <div className="card card-hover--3d align-items-center border--none text-center pt-5 reveal bg-gradient--darkblue--1">
                            <img src="images/zhuravlev.jpg" alt="mamber" className="img-fluid"/>
                            <div className="card-body align-items-center">
                                <h3 className="h6-font font-w--600 color--yellow">Arrym Michslyd</h3>
                                <span className="font-size--14 opacity--80 font-w--500 color--white">CTO</span>
                                <ul className="icon-group justify-content-center my-1">
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#" className="color--primary opacity--70 px-1"><i className="fab fa-telegram-plane"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>



    </section>



<Footer />

</main>
</body>
    </>
  );
};

export default Rugchecker;
