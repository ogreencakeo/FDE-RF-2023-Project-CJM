import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { Caution } from "../module/Caution";
export function Sesame() {
    return (
        <>
            <GoodsSwiper />
            <GoodsItem cat={goods[3]} category="sesame" />
            <Caution caution="goodsCaution" />
        </>
    );
}
