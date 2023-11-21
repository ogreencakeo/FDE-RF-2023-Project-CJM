import React from "react";
import { Link, Route, Routes } from "react-router-dom";

// 데이터
import { moveImgData } from '../data/move_img_data'

// GoodsCont
import { Supermario } from "./GoodsCont/Supermario";
import { Snoopy } from "./GoodsCont/Snoopy";
import { HarryPotter } from "./GoodsCont/HarryPotter";
import { Spiderman } from "./GoodsCont/Spiderman";
import { Sesame } from "./GoodsCont/Sesame";
import { JurassicPark } from "./GoodsCont/JurassicPark";

// 모듈 가져오기
import { GoodsLink} from "./module/GoodsLink";
import { ImgMoveSlide } from "./module/ImgMoveSlide";

// CSS
import "../css/goods.css";

// 스와이퍼
import { GoodsSwiper } from "./pages/plugin/Swiper";
import { GoodsCaution } from "../contents/module/GoodsCaution";
import { VidSection } from "./module/VidSection";
// import { Banner } from './module/Banner';

export function Goods() {
    const goodsmove = moveImgData['goods'];
    return (
        <>
            <div className="goods_wrap">
                {/* <Banner option='goodsList' /> */}
                <GoodsSwiper />
                <GoodsLink/>
                <div className="goods_bx_wrap">
                    <Routes>
                        <Route index element={<Supermario />} />
                        <Route path="supermario" element={<Supermario />} />
                        <Route path="snoopy" element={<Snoopy />} />
                        <Route path="harryPotter" element={<HarryPotter />} />
                        <Route path="sesame" element={<Sesame />} />
                        <Route path="spiderman" element={<Spiderman />} />
                        <Route path="jurassicPark" element={<JurassicPark />} />
                    </Routes>
                </div>
                {/* <VidSection />  */}
                <GoodsCaution caution="goodsCaution" />
                <button className="goodsmove">×</button>
                <ImgMoveSlide imgMove={goodsmove} />
            </div>
        </>
    );
}
