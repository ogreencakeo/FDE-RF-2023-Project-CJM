import React from "react";
import { Link, Route, Routes } from "react-router-dom";



// GoodsCont
import { Supermario } from "./GoodsCont/Supermario";
import { Snoopy } from "./GoodsCont/Snoopy";
import { HarryPotter } from "./GoodsCont/HarryPotter";
import { Sesame } from "./GoodsCont/Sesame";
import { Spiderman } from "./GoodsCont/Spiderman";
import { JurassicPark } from "./GoodsCont/JurassicPark";

// 모듈 가져오기
import { GoodsLink } from "./module/GoodsLink";
import { ImgMoveSlide } from "./module/ImgMoveSlide";

// CSS
import "../css/goods.css";

// 스와이퍼
import { GoodsSwiper } from "./pages/plugin/Swiper";
import { Caution } from "./module/Caution";
import { VidSection } from "./module/VidSection";
import { GoodsMain } from "./GoodsCont/GoodsMain";
import { HelloKitty } from "./GoodsCont/HelloKitty.jsx";
// import { Banner } from './module/Banner';

export function Goods() {
    // const goodsmove = moveImgData["goods"];
    return (
        <>
            <div className="goods_wrap">
                {/* <Banner option='goodsList' /> */}
                
                {/* <GoodsLink/> */}
                {/* <div className="goods_bx_wrap">
                    <Routes>
                        <Route index element={<Supermario />} />
                        <Route path="supermario" element={<Supermario />} />
                        <Route path="snoopy" element={<Snoopy />} />
                        <Route path="harryPotter" element={<HarryPotter />} />
                        <Route path="sesame" element={<Sesame />} />
                        <Route path="spiderman" element={<Spiderman />} />
                        <Route path="jurassicPark" element={<JurassicPark />} />
                    </Routes>
                </div> */}
                {/* <VidSection />  */}
                
                <Routes>
                    <Route index element={<GoodsMain />} />
                    <Route path="supermario" element={<Supermario />} />
                    <Route path="snoopy" element={<Snoopy />} />
                    <Route path="harryPotter" element={<HarryPotter />} />
                    <Route path="sesame" element={<Sesame />} />
                    <Route path="spiderman" element={<Spiderman />} />
                    <Route path="jurassicPark" element={<JurassicPark />} />
                    <Route path="helloKitty" element={<HelloKitty />} />
                </Routes>

                <ImgMoveSlide imgMove="goods" />
            </div>
        </>
    );
}
