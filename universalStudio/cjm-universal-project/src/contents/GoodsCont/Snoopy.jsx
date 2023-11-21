import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { Caution } from "../module/Caution";
import { GoodsSwiper } from "../pages/plugin/Swiper";
export function Snoopy(){
    return(
        <>
            <GoodsSwiper />
            <GoodsItem cat={goods[1]} category ='snoopy'/>
            <Caution caution="goodsCaution" />
        </>
    )
}