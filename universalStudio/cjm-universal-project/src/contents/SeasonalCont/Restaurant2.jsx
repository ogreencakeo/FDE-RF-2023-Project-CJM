import React from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";
import { SwiperSec } from "../pages/plugin/SwiperSec";

export function Restaurant2(){
    return(
        <>
            <SeasonalInfo  menu='restaurant2' color='#c5d6c6'/>
            <SwiperSec category='restaurant2' />
        </>
    )   
}