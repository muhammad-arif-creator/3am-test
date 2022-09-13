import React from "react";
import SingleInfo from "./SingleInfo";
import "./Info.css";

const infoData = [
  {
    img: "images/info.png",
    alt: "info",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    img: "images/info.png",
    alt: "info",
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
];

const Info = () => {
  return (
    <section className="info">
      <div className="container-fluid">
        {infoData.map((info, index) => {
          return <SingleInfo data={info} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Info;
