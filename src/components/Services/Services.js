import React from "react";
import "./Services.css";
import SingleService from "./SingleService";

const services = [
  {
    src: "images/fast-and-accurate.png",
    title: "Fast and accurate",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
  {
    src: "images/strict-compliance.png",
    title: "Strict compliance",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
  {
    src: "images/qualified-professionals.png",
    title: "Qualified-professionals",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
  {
    src: "images/online.png",
    title: "Online and real-time control",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
  {
    src: "images/eu-wide.png",
    title: "EU-wide coverage",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
  {
    src: "images/innovation.png",
    title: "Innovation & digitalisation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
];
const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="service-top">
          <h2 className="title">
            We offer end-to-end customs services with fast, accurate and
            compliant customs in multiple countries
          </h2>
          <button className="btn btn-primary">Get in touch</button>
        </div>
        <div className="services-wrapper">
          <div className="row">
            {services.map((service, index) => {
              return <SingleService service={service} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="service-image">
        <img src="images/service-banner.png" alt="service" />
      </div>
    </section>
  );
};

export default Services;
