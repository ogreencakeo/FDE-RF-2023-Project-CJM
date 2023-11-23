import { Caution } from "../module/Caution";
import { GoodsItem } from "../module/GoodsItem";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { goods } from "../../data/goods/goodsData";
import { GoodsAd } from "./GoodsAd";

export function HelloKitty(){
    return (
        <>
            <GoodsSwiper />
            <GoodsItem cat={goods[6]} category="helloKitty" />
            <GoodsAd ad='helloKitty' bg_color = '#fcc7f4'/>
            <Caution caution="goodsCaution" />
        </>
    );
}