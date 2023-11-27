import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { pickUpData } from "../../../data/main/pickup.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faSquareFacebook, faSquareTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
    faMapMarkerAlt,
    faClock,
    faSquareParking,
    faCar,
    faGifts,
    faSpider,
    faChessKing,
    faHatWizard,
    faMountainSun,
    faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";

import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import "./drag_styles.css";

export function SwiperDrag() {
    // 사진 클릭 회전
    // 박스별 회전 상태를 저장하는 배열
    const [boxRotations, setBoxRotations] = useState(Array(pickUpData.length).fill(false));
    // const rotateAni = () => setClickAniFn((prev) => !prev);
    const rotateAni = (index) => {
        setBoxRotations((prevRotations) => {
            const newRotations = [...prevRotations];
            newRotations[index] = !newRotations[index];
            return newRotations;
        });
    };
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={80}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper3"
            >
                <SwiperSlide>
                    <div className="pick-up-wrap">
                        {pickUpData.map((v, i) => (
                            <div
                                className={`pick-up-img-box ${boxRotations[i] ? "on" : ""}`}
                                onClick={() => rotateAni(i)}
                                key={i}
                            >
                                <div className="pick-up-img">
                                    <div className="pick1">
                                        <img src={`./images/main/pickup/${v.img}`} alt={`${v.idx}번째 이미지`} />
                                        <h2>{v.title}</h2>
                                    </div>
                                    <div className="pick2">
                                        {v.emotion === "gifts" && <FontAwesomeIcon icon={faGifts} />}
                                        {v.emotion === "chessKing" && <FontAwesomeIcon icon={faSpider} />}
                                        {v.emotion === "spider" && <FontAwesomeIcon icon={faChessKing} />}
                                        {v.emotion === "hatWizard" && <FontAwesomeIcon icon={faHatWizard} />}
                                        <p>{v.cont}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
