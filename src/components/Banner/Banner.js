import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="banner d-flex align-items-center position-relative">
        <div className="banner-image">
          <img src="images/banner.png" alt="banner" />
        </div>
        <div className="banner-content position-absolute w-100">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-left ">
                  <h1 className="title">
                    Headache on complex customs matters for your business?
                  </h1>
                  <p>
                    Customs Support is your neutral full-service customs broker
                    for complex customs matters with 20+ years of expertise in
                    Europe and over 400 customs specialists who are happy to
                    take the load off your mind!
                  </p>
                  <button className="btn btn-primary">
                    Get your quote now
                  </button>
                </div>
              </div>
              <div className="col-md-6 ps-5 d-flex align-items-center">
                <div className="banner-right">
                  <ul>
                    <li>Fast and accurate customs clearance delivery</li>
                    <li>Fast and accurate customs clearance delivery</li>
                    <li>Fast and accurate customs clearance delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
