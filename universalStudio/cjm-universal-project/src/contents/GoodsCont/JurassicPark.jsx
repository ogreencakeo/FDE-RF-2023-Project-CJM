import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
import { Map } from "../module/Map";
export function JurassicPark() {
    return (
        <>
            <GoodsAd ad='jurassicPark' bg_color = '#91e39f'/>
            <GoodsSwiper cat='goods' />
            <GoodsItem cat={goods[5]} category="jurassicPark" />
            <Map shop_info='map6' shop_location='쥬라기 월드' cat='goods' />
        </>
    );
}
