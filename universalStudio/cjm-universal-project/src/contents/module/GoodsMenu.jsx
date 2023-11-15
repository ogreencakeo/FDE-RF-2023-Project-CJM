import { BrowserRouter, Routes } from "react-router-dom"
import { GoodsItem } from "../GoodsCont/GoodsItem"
import { useState } from "react"
import { goods } from "../../data/유니버설-굿즈";
export function GoodsMenu(){
    const [goodscat, setGoodscat] = useState('supermario');
    const goodscatFn = (data) => setGoodscat(goodscat);
    return(
        <>
            <div class="goods_menu">
                <ul>
                    <li><a href="#">슈퍼 닌텐도 월드™</a></li>
                    <li><a href="#">스누피</a></li>
                    <li><a href="#">위저딩 월드 오브 해리 포터™</a></li>
                    <li><a href="#">세서미 스트리트™</a></li>
                    <li><a href="#">스파이더맨</a></li>
                    <li><a href="#">쥬라기 월드</a></li>
                </ul>
            </div>
            <div class="goods_bx_wrap">
                {/* <GoodsItem cat = {()=>goodscat(goods[])}/> */}
            </div>
        </>
    )
}