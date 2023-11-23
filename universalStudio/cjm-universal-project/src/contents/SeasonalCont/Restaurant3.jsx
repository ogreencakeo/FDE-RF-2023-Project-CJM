import React from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";
import { SwiperSec } from "../pages/plugin/SwiperSec";

export function Restaurant3(){
    return(
        <>
            <SeasonalInfo  menu='restaurant3' color='#464a47'/>
            <SwiperSec category='restaurant3' />
        </>
    )
}