
import { GoodsItem } from "../module/GoodsItem";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
// 데이터
import { goods } from "../../data/goods/goodsData";

export function HelloKitty(){
    return (
        <>
            <GoodsAd ad='helloKitty' bg_color = '#fcc7f4'/>
            <GoodsSwiper />
            <GoodsItem cat={goods[6]} category="helloKitty" />
        </>
    );
}