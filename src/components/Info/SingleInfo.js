import React from "react";

const SingleInfo = ({ data }) => {
  return (
    <div className="row align-items-center ">
      <div className="col-md-6 p-0">
        <img src={data.img} alt={data.alt} />
      </div>
      <div className="col-md-6 p-0">
        <div className="info-content">
          <h2 className="title">{data.title}</h2>
          <p>{data.desc}</p>
          <button className="btn btn-primary">More information</button>
        </div>
      </div>
    </div>
  );
};

export default SingleInfo;
