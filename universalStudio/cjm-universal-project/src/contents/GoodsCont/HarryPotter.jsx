import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
export function HarryPotter(){
    return(
        <GoodsItem cat={goods[2]} category='harryPotter' />
    )
}