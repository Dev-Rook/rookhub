import React, { useEffect, useRef} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="Page-Section Portfolio-Section">
      <div className="Header-Container">
        <h1 data-aos="fade-right"data-aos-duration="1000" className="Header-Text">
          My <span className="Red-Letter">P</span>ortfolio
        </h1>

        <div className="Section-Description">
          <span className="Red-Letter">-</span> &nbsp; This is a small collection of
          recents projects hand picked by me. I have done them solo or in
          collaboration with other developers and or teams.
        </div>

        <ViewMoreButton />
      </div>

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
    </div>
  );
};

export default Portfolio;
