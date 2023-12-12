import { Banner } from "../modules/Banner";
import {SurviceCont} from '../modules/SurviceCont';
import '../../css/main.css';

import {surviceData} from '../data/serviceData.js';
import { VidSwiper } from "../plugin/swiper/VidSwiper.jsx";

export function Main(){
    return(
        <>
            <Banner category='main' />
            <SurviceCont category='main' />
            <VidSwiper category='main' />
        </>
    );
}