import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { Caution } from "../module/Caution";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
export function Snoopy(){
    return(
        <>
            <GoodsSwiper />
            <GoodsItem cat={goods[1]} category ='snoopy'/>
            <GoodsAd ad='snoopy' bg_color = '#d3eaf2'/>
            <Caution caution="goodsCaution" />
        </>
    )
}