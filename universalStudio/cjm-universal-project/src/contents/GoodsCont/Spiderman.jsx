import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { Caution } from "../module/Caution";
export function Spiderman(){
    return(
        <>
            <GoodsSwiper />
            <GoodsItem cat={goods[4]} category='spiderman' />
            <Caution caution="goodsCaution" />
        </>
    )
}