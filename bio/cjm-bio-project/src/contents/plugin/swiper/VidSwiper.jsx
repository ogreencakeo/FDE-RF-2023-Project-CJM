import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/vid_swiper.css";

import {vidData} from '../../data/vid_data.js';

// import required modules
import { Navigation, Pagination } from "swiper/modules";
export function VidSwiper() {
    const selData = vidData;
    return (
        <div className="vid-swiper-wrap">
                <Swiper
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        550: {
                            slidesPerView: 2,
                        },
                        1000: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                    className="mySwiper1"
                >
                    {
                        selData.map((v, i) =>
                            <div className="vid-swiper-bx">
                                <img src={v.src} alt={`동영상 ${i+1}이미지`} />
                                <p>{v.tit}</p>
                            </div>
                        )

                    }
                </Swiper>

        </div>
    );
}