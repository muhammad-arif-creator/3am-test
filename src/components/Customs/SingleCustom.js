import React from "react";

const SingleCustom = ({ custom }) => {
  return (
    <div className="custom-single">
      <div className="image-div">
        <img src={custom.src} alt={custom.title} />
      </div>
      <h3>{custom.title}</h3>
      <p>{custom.desc}</p>
    </div>
  );
};

export default SingleCustom;
