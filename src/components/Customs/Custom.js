import React from "react";
import Slider from "react-slick";
import "./Customs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleCustom from "./SingleCustom";
const customs = [
  {
    src: "images/custom.png",
    title: "Import customs clearance",
    desc: "If you would like to import goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of import documents, classification of import goods with the correct HS code, coordination of physical inspection and duty management.",
  },
  {
    src: "images/custom.png",
    title: "Export customs clearance",
    desc: "If you would like to export goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of export documents, classification of export goods with the correct HS code, coordination of physical inspection and duty management.",
  },
  {
    src: "images/custom.png",
    title: "Export customs clearance",
    desc: "We assist you in all requirements for different types of transit procedures and ensure the correct handling of customs clearance. Our customs experts take care of T1 transit declarations and arrange the transport of the goods, accompanied by the correct transit documents.",
  },

  {
    src: "images/custom.png",
    title: "Import customs clearance",
    desc: "If you would like to import goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of import documents, classification of import goods with the correct HS code, coordination of physical inspection and duty management.",
  },
];
const Custom = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className="customs">
      <div className="container">
        <div className="custom-top">
          <h2 className="title text-center">
            Customs Support is a full-service provider for customs services and
            is here to help
          </h2>
        </div>
        <div className="row">
          <Slider {...settings}>
            {customs.map((custom) => {
              return <SingleCustom custom={custom} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Custom;
