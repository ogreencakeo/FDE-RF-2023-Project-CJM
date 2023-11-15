import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goodsData";
export function Spiderman(){
    return(
        <GoodsItem cat={goods[4]} category='spiderman' />
    )
}