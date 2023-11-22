// 비디오 스와이프 하위 스와이퍼 플러그인 컴포넌트
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

/* 제이쿼리 넣기 */
import $ from "jquery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

/* 폰트어썸 임포트 */
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 스와이퍼 CSS
// import "./css/swiper_vid.css";

import { Navigation } from "swiper/modules";

export function SwiperSec(props) {
    return (
        <>
            <Swiper
                slidesPerView={4}
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
                {selData.map((v, i) => (
                    <SwiperSlide key={i}>
                        {/* 비디오 보이기 함수 호출 ( 비디오 경로, 제목을 보내줌! ) */}
                        <section className="sw-inbox" onClick={() => showVid(v.vsrc, v.tit)}>
                            {/* 동영상 이미지 박스 */}
                            <div className="vid-img">
                                <img src={v.isrc} alt={v.tit} />
                                {/* 폰트어썸 아이콘 */}
                                <FontAwesomeIcon
                                    icon={faCirclePlay}
                                    style={{
                                        position: "absolute",
                                        bottom: "55%",
                                        left: "10%",
                                        color: "#fff",
                                        fontSize: "50px",
                                    }}
                                />
                            </div>
                            {/* 동영상 타이틀 박스 */}
                            <div className="vid-tit">
                                <h4>{v.cat}</h4>
                                <h3>{v.tit}</h3>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
} // SwiperApp 컴포넌트 //////////
