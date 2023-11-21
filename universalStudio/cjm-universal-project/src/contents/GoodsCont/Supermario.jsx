import React from 'react';
import { GoodsItem } from "../module/GoodsItem";
import { goods } from "../../data/goods/goodsData";
import { Caution } from '../module/Caution';
import { ImgMoveSlide } from '../module/ImgMoveSlide';
import { GoodsSwiper } from '../pages/plugin/Swiper';

export function Supermario(){
    return(
        <>
            <GoodsSwiper />
            <GoodsItem cat={goods[0]} category="supermario" />
            <Caution caution="goodsCaution" />
        </>
    )
    
}