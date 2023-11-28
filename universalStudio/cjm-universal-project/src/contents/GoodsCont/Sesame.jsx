import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
export function Sesame() {
    return (
        <>
            <GoodsAd ad='sesame' bg_color = '#e1bae8'/>
            <GoodsSwiper />
            <GoodsItem cat={goods[3]} category="sesame" />
        </>
    );
}
