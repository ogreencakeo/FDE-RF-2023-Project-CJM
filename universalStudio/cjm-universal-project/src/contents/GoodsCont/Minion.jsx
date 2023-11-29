import { GoodsItem } from "../module/GoodsItem";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";

// 데이터
import { goods } from "../../data/goods/goodsData";

export function Minion() {
    return (
        <>
            <GoodsAd ad="minion" bg_color="#fac505" />
            <GoodsSwiper />
            <GoodsItem cat={goods[7]} category="minion" />
        </>
    );
}
