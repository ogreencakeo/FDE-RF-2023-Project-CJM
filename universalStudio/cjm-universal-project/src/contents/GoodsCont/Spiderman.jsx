import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
export function Spiderman(){
    return(
        <GoodsItem cat={goods[4]} category='spiderman' />
    )
}