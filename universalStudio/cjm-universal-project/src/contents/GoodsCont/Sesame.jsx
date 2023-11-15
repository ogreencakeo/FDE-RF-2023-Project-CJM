import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
export function Sesame(){
    return(
        <GoodsItem cat={goods[3]} category='sesame' />
    )
}