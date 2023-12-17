import { Banner } from "../modules/Banner";
import { SurviceCont } from '../modules/SurviceCont';
import '../../css/main.css';

import { surviceData } from '../data/serviceData.js';
import { VidSwiper } from "../plugin/swiper/VidSwiper.jsx";


import { BusinessValue } from "../modules/BusinessValue.jsx";

export function Main() {

    return (
        <>
            {/* <Banner category='main' /> */}
            <SurviceCont category='main' />
            {/* 인재상 */}
            <div className="ideal-talent-wrap">
                <div className="ideal-talent-img">
                    <img src="../images/main/cont/earth.png" alt="지구사진" />
                </div>
                <div className="deal-talent-cont">
                    <h2>바이오 인재상</h2>
                    <p>
                        회사 비전과 목표를 공유하며,
                        강한 열정과 책임감으로 해당분야 최고의 전문성과 실행력을 통해 성과창출을 극대화하고,
                        협업으로 집단지성을 추구하는 글로벌 인재
                    </p>
                    <div className="bio-talent-div">
                        <BusinessValue cat='BusinessDNA' />
                    </div>
                </div>

            </div>
            <VidSwiper category='main' />
        </>
    );
}