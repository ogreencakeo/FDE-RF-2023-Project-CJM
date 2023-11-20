import { Route, Routes } from "react-router-dom";
// import { seasonalMenu } from "../data/seasonalMenu";
import { RecommSeasonal } from "./SeasonalCont/RecommSeasonal";
import { SeasonalMuLink, SeasonalMenuRoutes } from "./SeasonalCont/SeasonalMuLink";

import { SeasonalLink } from "./module/SeasonalLink";

import {ImgSlide} from '../contents/pages/plugin/ImgSlide';
import '../css/seasonal_menu.css';

// 레스토랑 라우터 
import { Restaurant1 } from "./SeasonalCont/Restaurant1";
import { Restaurant2 } from "./SeasonalCont/Restaurant2";
import { Restaurant4 } from "./SeasonalCont/Restaurant4";
import { Restaurant3 } from "./SeasonalCont/Restaurant3";
import { Restaurant5 } from "./SeasonalCont/Restaurant5";
import { Restaurant6 } from "./SeasonalCont/Restaurant6";
import { SeasonalMuContent } from "./SeasonalCont/SeasonalMuContent";
// import { GoodsSwiper } from "./pages/plugin/Swiper";
export function SeasonalMenu() {
    return (
        <>
            {/* 스와이프 배너 */}
            {/* <GoodsSwiper /> */}
            {/*  추천 시즈널 메뉴 대특집  */}
            <RecommSeasonal />
            {/* <Swiper /> */}
            {/* <SeasonalMu /> */}

            {/*시즈널 메뉴 링크 */}
            <SeasonalLink />
            {/* <SeasonalMuLink /> */}

            {/* 시즈널 메뉴 콘텍츠 */}
            <SeasonalMuContent />
            
            <Routes>
                <Route index element={<Restaurant1 />} />
                <Route path="restaurant1" element={<Restaurant1 />} />
                <Route path="restaurant2" element = {<Restaurant2 />} />
                <Route path="restaurant3" element = {<Restaurant3 />} />
                <Route path="restaurant4" element = {<Restaurant4 />} />
                <Route path="restaurant5" element = {<Restaurant5 />} />
                <Route path="restaurant6" element = {<Restaurant6 />} />
            </Routes>
            
        </>
    );
}
