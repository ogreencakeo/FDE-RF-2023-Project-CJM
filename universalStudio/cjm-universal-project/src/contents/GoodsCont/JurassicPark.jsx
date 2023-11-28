import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
export function JurassicPark() {
    return (
        <>
            <GoodsAd ad='jurassicPark' bg_color = '#91e39f'/>
            <GoodsSwiper />
            <GoodsItem cat={goods[5]} category="jurassicPark" />
        </>
    );
}
