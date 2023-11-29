import { GoodsItem } from "../module/GoodsItem";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";

// 데이터
import { goods } from "../../data/goods/goodsData";
import { Map } from "../module/Map";

export function Minion() {
    return (
        <>
            <GoodsAd ad="minion" bg_color="#fac505" />
            <GoodsSwiper />
            <GoodsItem cat={goods[7]} category="minion" />
            <Map shop_info='map8' shop_location='미니언' cat='goods' />
        </>
    );
}
