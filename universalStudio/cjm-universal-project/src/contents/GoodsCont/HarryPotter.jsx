import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goodsData";
export function HarryPotter(){
    return(
        <GoodsItem cat={goods[2]} category='harryPotter' />
    )
}