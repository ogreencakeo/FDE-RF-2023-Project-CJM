import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
export function Snoopy(){
    return(
        <>
            <GoodsItem cat={goods[1]} category ='snoopy'/>
        </>
    )
}