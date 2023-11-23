import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { Caution } from "../module/Caution";
import { GoodsAd } from "./GoodsAd";
export function Spiderman(){
    return(
        <>
            <GoodsSwiper />
            <GoodsItem cat={goods[4]} category='spiderman' />
            <GoodsAd ad='spiderman' bg_color = '#5f915d'/>
            <Caution caution="goodsCaution" />
        </>
    )
}