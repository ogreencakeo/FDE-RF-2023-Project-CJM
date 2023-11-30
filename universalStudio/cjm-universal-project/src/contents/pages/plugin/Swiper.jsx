import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../css/swiper.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
export function GoodsSwiper(props) {
    const attractionImg = [
        "../../../images/attraction/img/attraction2.jpg",
        "../../../images/attraction/img/attraction15.jpg",
        "../../../images/attraction/img/attraction18.jpg",
        "../../../images/attraction/img/attraction24.jpg",
        "../../../images/attraction/img/attraction32.jpg",
    ];

    const makeCod = () => {
        const temp = [];
        for (let i = 0; i < 7; i++) {
            temp[i] = (
                <SwiperSlide key={i}>
                    <img src={"../../../images/goods/logoSwipe/" + (i + 1) + ".jpg"} alt="Logo image" />
                </SwiperSlide>
            );
        }
        return temp;
    };
    const makeCod2 = () => {
        const temp = [];
        for (let i = 0; attractionImg.length < 7; i++) {
            temp[i] = (
                <SwiperSlide key={i}>
                    <img src={attractionImg[i]} alt="ticket image" />
                </SwiperSlide>
            );
        }
        return temp;
    };

    return (
        <>
            <div className="goods-top-cont-wrap">
                <h1>굿즈를 판매하고 있는 다른 숍!</h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {props.cat == 'ticket' && makeCod2()}
                    {props.cat == 'goods' && makeCod()}
                </Swiper>
            </div>
        </>
    );
}
