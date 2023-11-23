import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { Caution } from "../module/Caution";
import { GoodsAd } from "./GoodsAd";
export function JurassicPark() {
    return (
        <>
            <GoodsSwiper />
            <GoodsItem cat={goods[5]} category="jurassicPark" />
            <GoodsAd ad='jurassicPark' bg_color = '#91e39f'/>
            <Caution caution="goodsCaution" />
        </>
    );
}
