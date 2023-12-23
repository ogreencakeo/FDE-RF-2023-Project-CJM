import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/vid_swiper.css";

import { vidData } from '../../data/vid_data.js';

import $ from 'jquery';


// import required modules
import { Navigation, Pagination } from "swiper/modules";
export function VidSwiper() {
    const selData = vidData;
    const goPlayer = () => {
        $('.vid-player-wrap').display = 'block';
    }
    return (
        <>
            <div className="vid-swiper-wrap">
                <Swiper
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
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
                        1300: {
                            slidesPerView: 4,
                        },
                    }}
                    className="mySwiper1"
                >
                    {
                        selData.map((v, i) => 
                            <>
                                <SwiperSlide className="vid-swiper-bx" key={i}>
                                    <li key={i}>
                                        <div className="vid-swiper-img" onClick={goPlayer}>
                                            <img src={v.src} alt={`동영상 ${i + 1}이미지`} />
                                        </div>
                                        <p>{v.tit}</p>
                                    </li>
                                </SwiperSlide>
                                <div className="vid-player-wrap">
                                    <iframe src={v.link} frameborder="0" style={{
                                        width : '500px', height : '500px'
                                    }}></iframe>
                                </div>
                            </>
                        )}
                </Swiper>
            </div>
        </>
    );
}