import React from "react";
import "./Partner.css";
const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="partners-logo">
              <img src="images/partners.png" alt="partner" />
            </div>
          </div>
          <div className="col-md-6 ps-5">
            <div className="partners-content">
              <h2 className="title">Who we work with</h2>
              <p>
                We are the trusted partner for customs matters of more than 7000
                companies across Europe. Since 20 years we successfully operate
                with customers from small and large good owners to freight
                forwarders and digital platforms across various industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
