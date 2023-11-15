import React from 'react';
import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goodsData";

export function Supermario(){
    return(
        <>
            {/* <h1>슈퍼마리오 클릭</h1> */}
            <GoodsItem cat={goods[0]} category="supermario" />
        </>
    )
    
}