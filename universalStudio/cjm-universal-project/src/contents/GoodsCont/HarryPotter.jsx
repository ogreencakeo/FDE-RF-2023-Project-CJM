import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { Caution } from "../module/Caution";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
export function HarryPotter(){
    return(
        <>
            <GoodsSwiper />
            <GoodsItem cat={goods[2]} category='harryPotter' />
            <GoodsAd ad='harryPotter' bg_color = '#30738a'/>
            <Caution caution="goodsCaution" />
        </>
    )
}