import React from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";
import { RecommSeasonal } from "./RecommSeasonal";
import { cartData } from "../../data/module_data/cart_data"; 

import {Caution} from '../module/Caution';
import { SwiperSec } from "../pages/plugin/SwiperSec";

export function Restaurant1(){
    return(
        <>
            {/* <h2>레스토랑1페이지</h2> */}
            <SeasonalInfo  menu='restaurant1' color='#483591'/>
            <SwiperSec category='restaurant1' arry={cartData[0]} />
            {/* <RecommSeasonal category='restaurant1'/> */}
        </>
    )
}