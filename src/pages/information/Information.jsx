import React from "react";
import cls from '../information/Information.module.scss'
import SwiperCore, { EffectCoverflow, EffectCards, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { range } from "ramda";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./styles.css";

SwiperCore.use([EffectCards, EffectCoverflow, Pagination]);

export const Information = () => {
  return (
    <div className={cls.information}>
      <div className="example">
        <h1>Cards</h1>
        <Swiper
          pagination={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="3"
          effect="cards"
        >
          {range(1, 10).map((n) => (
            <SwiperSlide key={n}>
              <div className="Card"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="example">
        <h1>Coverflow</h1>
        <Swiper
          pagination={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="3"
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 500,
            modifier: 1.25,
            slideShadows: true
          }}
        >
          {range(1, 10).map((n) => (
            <SwiperSlide key={n}>
              <div className="Box"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}