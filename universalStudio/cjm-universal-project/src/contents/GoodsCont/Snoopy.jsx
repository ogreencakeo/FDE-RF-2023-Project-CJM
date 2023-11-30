import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
import { Map } from "../module/Map";
export function Snoopy(){
    return(
        <>
            <GoodsAd ad='snoopy' bg_color = '#d3eaf2'/>
            <GoodsSwiper/>
            <GoodsItem cat={goods[1]} category ='snoopy'/>
            <Map shop_info='map2' shop_location='스누피' cat='goods' />
            
        </>
    )
}