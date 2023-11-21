import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { Caution } from "../module/Caution";
import { GoodsSwiper } from "../pages/plugin/Swiper";
export function HarryPotter(){
    return(
        <>
            <GoodsSwiper />
            <GoodsItem cat={goods[2]} category='harryPotter' />
            <Caution caution="goodsCaution" />
        </>
    )
}