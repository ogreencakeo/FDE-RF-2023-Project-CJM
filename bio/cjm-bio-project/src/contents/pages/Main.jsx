import { Banner } from "../modules/Banner";
import { SurviceCont } from '../modules/SurviceCont';
import '../../css/main.css';

import { surviceData } from '../data/serviceData.js';
import { VidSwiper } from "../plugin/swiper/VidSwiper.jsx";


import { BusinessValue } from "../modules/BusinessValue.jsx";
import { BusinessCont } from "../modules/BusinessCont.jsx";

export function Main() {

    return (
        <>
            <Banner category='main' />
            <SurviceCont category='main' />
            {/* 인재상 */}
            <BusinessCont cat='main' />
            {/* 핵심가치 */}
            <BusinessValue cat='핵심가치' />
            <VidSwiper category='main' />
        </>
    );
}