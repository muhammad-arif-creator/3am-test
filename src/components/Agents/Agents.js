import React from "react";
import "./Agent.css";

const Agents = () => {
  return (
    <section className="agent">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="title text-center">
              The leading customs agent in Europe and UK
            </h2>
            <div className="specification-wrapper">
              <div className="experience inner">
                <h1>20 +</h1>
                <p>years of experience</p>
              </div>
              <div className="specialists inner">
                <h1>400</h1>
                <p>qualified customs specialists</p>
              </div>
              <div className="locations inner">
                <h1>20</h1>
                <p>strategic locations</p>
              </div>
              <div className="countries inner">
                <h1>5</h1>
                <p>countries</p>
              </div>
            </div>
            <button className="btn btn-primary">Get in touch</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
