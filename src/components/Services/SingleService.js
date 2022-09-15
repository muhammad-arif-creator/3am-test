import React from "react";

const SingleService = ({ service, index }) => {
  return (
    <div className="col-md-4 " key={index}>
      <div className="service-single">
        <div className="image-div">
          <img src={service.src} alt={service.title} />
        </div>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </div>
    </div>
  );
};

export default SingleService;
