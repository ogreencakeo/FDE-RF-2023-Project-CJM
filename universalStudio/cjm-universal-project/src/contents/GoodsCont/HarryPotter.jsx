import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from "../pages/plugin/Swiper";
import { GoodsAd } from "./GoodsAd";
import { Map } from "../module/Map";
export function HarryPotter(){
    return(
        <>
            <GoodsAd ad='harryPotter' bg_color = '#30738a'/>
            <GoodsSwiper/>
            <GoodsItem cat={goods[2]} category='harryPotter' />
            <Map shop_info='map3' shop_location='위저딩 월드 오브 해리 포터™' cat='goods' />
        </>
    )
}