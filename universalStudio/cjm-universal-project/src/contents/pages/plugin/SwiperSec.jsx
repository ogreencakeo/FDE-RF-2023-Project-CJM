// 비디오 스와이프 하위 스와이퍼 플러그인 컴포넌트
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

/* 제이쿼리 넣기 */
import $ from "jquery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '../../../css/swiper.css';

/* 폰트어썸 임포트 */
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 스와이퍼 CSS
// import "./css/swiper_vid.css";

import { Navigation } from "swiper/modules";

// 데이터
import { cartData } from "../../../data/module_data/cart_data";

export function SwiperSec(props) {
    const selData = cartData[props.category];
    console.log("스와이프 selData :", selData);
    const category_info = cartData[props.cat];
    const title_info = cartData[props.title];
    const img_info = cartData[props.img];
    return (
        <>
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
                    1000: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                className="mySwiper"
            >
                    <SwiperSlide>
                        <section>
                            <div>
                                {
                                    selData.img.map((v, i) =>
                                    <li key={i}>
                                        <img src={v} alt={selData.title} />
                                    </li>
                                    )
                                }
                            </div>
                            <div>
                                <h4>{selData.category}</h4>
                                <h3>{selData.title}</h3>
                            </div>
                        </section>
                    </SwiperSlide>

            </Swiper>
        </>
    );
} // SwiperApp 컴포넌트 //////////
