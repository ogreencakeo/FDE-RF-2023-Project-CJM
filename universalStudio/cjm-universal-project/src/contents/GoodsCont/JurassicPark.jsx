import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { Caution } from "../module/Caution";
export function JurassicPark() {
    return (
        <>
            <GoodsSwiper />
            <GoodsItem cat={goods[5]} category="jurassicPark" />
            <Caution caution="goodsCaution" />
        </>
    );
}
