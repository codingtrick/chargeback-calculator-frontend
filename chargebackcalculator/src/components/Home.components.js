import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
const HomeComponents = () => {
  return (
    <>
      <div className="main-banner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="banner-content">
                <h1>Modern Age Banking for Modern People</h1>
                <p>Operate your bank on your fingertips</p>
                <Link to="/userselection" className="btn btn-primary">
                  Click Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-boxes-area">
        <div className="container">
          <div className="featured-boxes-inner">
            <div className="row m-0">
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon color-fb7756">
                    <i className="flaticon-piggy-bank"></i>
                  </div>
                  <h3>Transparent Pricing</h3>
                  <p>
                    Lorem ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                  <a href="link.com" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon color-facd60">
                    <i className="flaticon-data-encryption"></i>
                  </div>
                  <h3>Fully Encrypted</h3>
                  <p>
                    Lorem ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                  <a href="link.com" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon color-1ac0c6">
                    <i className="flaticon-wallet"></i>
                  </div>
                  <h3>Instant Cashout</h3>
                  <p>
                    Lorem ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                  <a href="link.com" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon">
                    <i className="flaticon-shield"></i>
                  </div>
                  <h3>Safe and Secure</h3>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                  <a href="link.com" className="read-more-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="introduction-area ptb-70 pt-0">
        <div className="container-f p-0">
          <div className="overview-box">
            <div className="overview-content">
              <div className="content left-content">
                <span className="sub-title">Introduction</span>
                <h2>Chargeback Calculator</h2>
                <div className="bar"></div>
                <p>
                  With the growth of internet and wireless communication
                  technologies, telecommunications etc. in recent years, the
                  structure and nature of banking and financial services have
                  gone for a sea change. E-banking is the latest in this series
                  of technological wonders in the recent past which involves use
                  of internet for delivery of banking products and services.
                  However, customers using this online application faces
                  multiple issues like transaction stuck or rollback. They have
                  lot of queries to answer about their issues and chargebacks.
                  In this project customer will be able ask their issue and also
                  ask for a chargeback in case of any stuck or rolled back
                  transactions. This project provides the solution for the
                  customer issues and give detailed information with the
                  solution.
                </p>
              </div>
            </div>
            <div className="overview-image">
              <div className="image">
                <img alt="images" src={require("../assets/feature4.jpg")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="how-it-works-area ptb-70">
        <div className="container">
          <div className="section-title">
            <h2>How It Works</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-how-it-works">
                <img
                  alt="images"
                  src={require("../assets/how-it-works/how-it-work1.png")}
                />
                <h3>1. Register/Login </h3>
                <p>Register/Login using your Customer Id and Password </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-how-it-works">
                <img
                  alt="images"
                  src={require("../assets/how-it-works/how-it-work2.png")}
                />
                <h3>2. Apply for Chargeback</h3>
                <p>
                  Apply for chargeback by providing all the necessary details.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-how-it-works">
                <img
                  alt="images"
                  src={require("../assets/how-it-works/how-it-work3.png")}
                />
                <h3>3. Verification</h3>
                <p>
                  Our team will verify will verify information provided by you.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-how-it-works">
                <img
                  alt="images"
                  src={require("../assets/how-it-works/how-it-work4.png")}
                />
                <h3>4. Chargeback Conclusion</h3>
                <p>Our team will update status of chargeback.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-how-it-works">
                <img
                  alt="images"
                  src={require("../assets/how-it-works/how-it-work5.png")}
                />
                <h3>5. Receive Acceptance/Decline</h3>
                <p>
                  Successful = Amount Received <br></br>Unsuccessful = Decline
                  Message
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-how-it-works">
                <img
                  alt="images"
                  src={require("../assets/how-it-works/how-it-work6.png")}
                />
                <h3>6. Enjoy Shopping</h3>
                <p>Enjoy using our banking facility for doing transaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-area pt-70 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Meet our team</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-member">
                <div className="member-image">
                  <img alt="images" src={require("../assets/team1.jpg")}></img>
                </div>
                <div className="member-content">
                  <h3>Himanshu Gupta</h3>
                  <span>Memeber 1</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-member">
                <div className="member-image">
                  <img alt="images" src={require("../assets/team2.jpg")}></img>
                </div>
                <div className="member-content">
                  <h3>Lavanya Panyam</h3>
                  <span>Member 2</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-member">
                <div className="member-image">
                  <img alt="images" src={require("../assets/team3.jpg")}></img>
                </div>
                <div className="member-content">
                  <h3>Palash Joshi</h3>
                  <span>Member 3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-member">
                <div className="member-image">
                  <img alt="images" src={require("../assets/team1.jpg")}></img>
                </div>
                <div className="member-content">
                  <h3>Burhan Shaik</h3>
                  <span>Memeber 4</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-member">
                <div className="member-image">
                  <img alt="images" src={require("../assets/team2.jpg")}></img>
                </div>
                <div className="member-content">
                  <h3>Niharika Timiri</h3>
                  <span>Member 5</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-member">
                <div className="member-image">
                  <img alt="images" src={require("../assets/team3.jpg")}></img>
                </div>
                <div className="member-content">
                  <h3>Abhay Chauhan</h3>
                  <span>Member 6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComponents;
