import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
import { Map } from "../module/Map";
export function Sesame() {
    return (
        <>
            <GoodsAd ad='sesame' bg_color = '#e1bae8'/>
            <GoodsSwiper />
            <GoodsItem cat={goods[3]} category="sesame" />
            <Map shop_info='map4' shop_location='세서미 스트리트™' cat='goods' />
        </>
    );
}
