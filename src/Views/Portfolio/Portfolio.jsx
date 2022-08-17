import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import "../../Components/Page Components/_Global-Page-Styles/GlobalPageStyles.css";
import "./Styles/Portfolio.css";

import ViewMoreButton from "../../Components/Page Components/Main-Button/ViewMoreButton";
import Project1 from "../../Components/Projects/Project1";

const Portfolio = () => {
  return (
    <div className="Page-Section Portfolio-Section">
      <div className="Header-Container">
        <h1 className="Header-Text">
          My <span className="Red-Letter">P</span>ortfolio
        </h1>

        <p className="Section-Description">
          <span className="Red-Letter">-</span> This is a small collection of
          recents projects hand picked by me. <br /> I have done them solo or in
          collaboration with other developers and or teams.
        </p>

        <ViewMoreButton />
      </div>

      <div className="Portfolio-Container">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation]}
          navigation={
            {
              // prevEl: swiperNavPrevRef.current,
              // nextEl: swiperNavNextRef.current,
            }
          }
          effect
          speed={800}
          slidesPerView={1}
          loop
          className="Swiper"

          // onInit={(swiper) => {
          //   swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          //   swiper.params.navigation.NextEl = swiperNavNextRef.current;
          //   swiper.navigation.init();
          //   swiper.navigation.update();
          // }}
        >
          <SwiperSlide className="SwiperSlide">
            <Project1 />
          </SwiperSlide>
          ...
        </Swiper>

        {/* {projectCard.map((value) => {
            const {Title, Image, Description, Code, Demo, Type, Status, id} = value;

            return (
              <div className="Project-Card" key={id}>
              <img src={Image} alt="" className="Card-Display-Image" />
  
              <div className="Card-Details">
                <h3 className="Card-Title">{Title}</h3>
                <p className="Card-Type">{Type}</p>
                <p className="Card-Description">{Description}</p>
  
                <div className="Code-Or-Demo-Container">
                  <a href={Code} target="_blank" id="Project-Link-Code">
                    Code
                  </a>
                  <a href={Demo} target="_blank" id="Project-Link-Demo">
                    Demo
                  </a>
                </div>
  
                <p className="Status">
                  {Status}
                </p>
              </div>
            </div>
            )
          })} */}
      </div>
    </div>
  );
};

export default Portfolio;
