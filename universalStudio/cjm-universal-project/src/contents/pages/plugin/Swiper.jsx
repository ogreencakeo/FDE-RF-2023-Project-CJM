import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import "../../../css/swiper.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
export function GoodsSwiper() {

    const imgArr = [
        "supermarioLogo",
        "snoopyLogo",
        "harryPotterLogo",
        "sesaemeLogo",
        "spidermanLogo",
        "jurassicParkLogo",
    ];

    return (
        <div className="goods-top-cont-wrap">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
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
                        <img src={"../../../images/goods/logo/" + v + '.jpg'} alt="Logo image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
