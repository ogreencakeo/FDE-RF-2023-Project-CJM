import React from 'react';
import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { GoodsSwiper } from '../pages/plugin/Swiper';
import { GoodsAd } from './GoodsAd';
import { Map } from '../module/Map';
// 데이터
import { goodsAdData } from "../../data/goods/goodsAdData";
import { MoveAgency } from '../module/MoveAgency';

export function Supermario(){
    const selData = goodsAdData['supermario'];
    return(
        <>
            <GoodsAd ad='supermario' bg_color = '#ed7777'/>
            <MoveAgency />
            <GoodsSwiper cats='goods'/>
            <GoodsItem cat={goods[0]} category="supermario" />
            <Map shop_info='map1' shop_location='슈퍼마리오' cat='goods' />
        </>
    )
    
}