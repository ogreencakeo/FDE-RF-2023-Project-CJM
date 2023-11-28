import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
export function HarryPotter(){
    return(
        <>
            <GoodsAd ad='harryPotter' bg_color = '#30738a'/>
            <GoodsSwiper />
            <GoodsItem cat={goods[2]} category='harryPotter' />
        </>
    )
}