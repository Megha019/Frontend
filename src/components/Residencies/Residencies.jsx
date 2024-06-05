import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"; // Add this line to import Swiper styles
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColstart">
          <span className="orangeText">Best Choices</span>
          <br/>
          <span className="primaryText">Popular Residences</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColstart r-card">
                <img src={card.image} alt="home" />
                <br/>
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" } }>$</span>
                  <span>{card.price}</span>
                </span>
                <br/>
                <span className="primaryText">{card.name}</span>
                <br/>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}