import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import "../../../css/img_slide.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
export function ImgSlide() {

    const imgArr = [
        "foodSlide1",
        "foodSlide2",
        "foodSlide3",
    ];

    return (
        <div className="goods-top-cont-wrap">
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                autoplay ={{
                    delay :2500,
                    disableOnInteraction : false,
                }}
            >
                {imgArr.map((v, i) => (
                    <SwiperSlide key={i}>
                        <img src={"../../../../images/seasonal/foodSlide/" + v + '.jpg'} alt="시즈널메뉴배너" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
