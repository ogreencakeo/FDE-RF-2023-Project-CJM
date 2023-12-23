import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicroscope, faPills, faEyeDropper }
    from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/researchfield.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export function ResearchField() {
    const bioData = [
        {
            img: '../images/main/researchfield/1.jpg',
            txt: '바이오 시밀러'
        },
        {
            img: '../images/main/researchfield/2.jpg',
            txt: '바이오 신약'
        },
        {
            img: '../images/main/researchfield/3.jpg',
            txt: '케미컬 개량 신약'
        },
    ]
    return (

        <div className="research-field-wrap">
            <div className="research-field-img">
                {/* <img src="../images/main/researchfield/chemistry-lab.png" alt="과학자" /> */}
                <h2><FontAwesomeIcon icon={faMicroscope} /> 바이오 시밀러</h2>
                <h2><FontAwesomeIcon icon={faPills} /> 바이오 신약</h2>
                <h2><FontAwesomeIcon icon={faEyeDropper} /> 케미컬 개량 신약</h2>
            </div>
            <div className="research-field-swiper-wrap">
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    // navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        bioData.map((v, i) =>
                            <SwiperSlide>
                                <div className='research-field-image-bx'>
                                    <img src={v.img} alt="연구분야이미지" />
                                    {/* <h2>{v.txt}</h2> */}
                                </div>
                            </SwiperSlide>
                        )

                    }

                </Swiper>
            </div>
        </div>
    );
}
