import React from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";
import { SwiperSec } from "../pages/plugin/SwiperSec";

export function Restaurant1(){
    return(
        <>
            <SeasonalInfo  menu='restaurant1' color='#483591'/>
            <SwiperSec category='restaurant1' />
        </>
    )
}