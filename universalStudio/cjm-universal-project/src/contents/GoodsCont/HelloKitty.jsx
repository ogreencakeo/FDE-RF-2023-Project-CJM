import { Caution } from "../module/Caution";
import { GoodsItem } from "../module/GoodsItem";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { goods } from "../../data/goods/goodsData";

export function HelloKitty(){
    return (
        <>
            <GoodsSwiper />
            <GoodsItem cat={goods[6]} category="helloKitty" />
            <Caution caution="goodsCaution" />
        </>
    );
}