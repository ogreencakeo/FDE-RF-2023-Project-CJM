import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
import { Map } from "../module/Map";
export function Spiderman(){
    return(
        <>
            <GoodsAd ad='spiderman' bg_color = '#5f915d'/>
            <GoodsSwiper />
            <GoodsItem cat={goods[4]} category='spiderman' />
            <Map shop_info='map5' shop_location='스파이더맨' cat='goods' />
        </>
    )
}