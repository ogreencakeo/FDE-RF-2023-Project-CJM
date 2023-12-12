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
            {/* 인재상 */}
            <div className="ideal-talent-wrap">
                <div className="ideal-talent-img">
                    <img src="../images/main/cont/develope.png" alt="" />
                </div>
            </div>
            <VidSwiper category='main' />
        </>
    );
}