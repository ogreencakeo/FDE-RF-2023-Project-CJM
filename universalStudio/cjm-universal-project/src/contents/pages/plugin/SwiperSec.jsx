import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../../css/swiper_sec.css";

import { Navigation } from "swiper/modules";
// 데이터
import { cartData } from "../../../data/module_data/cart_data";
import { Link } from "react-router-dom";

export function SwiperSec(props) {
    const selData = cartData[props.category];
    console.log("스와이프 selData :", selData);

    return (
        <div className="swiper-sec-wrap">
            <h1 className="swiper-sec-main-tit">
                {props.category == "restaurant" ? "푸드&레스토랑 카트보기" : ""}
            </h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                }}
                className="mySwiper2"
            >
                {selData.map((v, i) => (
                    <SwiperSlide className="swiper_sec" key={i}>
                        <Link to={`/seasonalMenu/restaurant${i + 1}`}>
                            <li key={i}>
                                <div className="swiper-sec-img">
                                    <img src={v.img} alt={v.title} />
                                </div>
                                <h2 className="swipe_sec_cat">{v.category}</h2>
                                <h2 className="swipe_sec_tit">{v.title}</h2>
                            </li>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
} // SwiperApp 컴포넌트 //////////
