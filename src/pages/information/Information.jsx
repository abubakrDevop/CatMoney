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
  const slides_info = [
    {
      id: 1,
    },
  ]
  
  return (
    <div className={cls.information}>
      <div className="example">
        <Swiper
          pagination={false}
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
          {range(1, 8).map((n) => (
            <SwiperSlide key={n}>
              <div className="Box">
                {
                  slides_info.map(item => (
                    <div key={item.id}>

                    </div>
                  ))
                }
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}