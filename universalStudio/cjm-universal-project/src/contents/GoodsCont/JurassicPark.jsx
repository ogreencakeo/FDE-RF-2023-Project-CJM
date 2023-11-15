import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
export function JurassicPark(){
    return(
        <GoodsItem cat={goods[5]} category='jurassicPark' />
    )
}