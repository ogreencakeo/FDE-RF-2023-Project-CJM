import React from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";
import { UniverReInfo } from "../module/UniverReInfo";

export function Restaurant1(){
    return(
        <>
            <SeasonalInfo  menu='restaurant1' color='#483591'/>
            {/* <UniverReInfo category="food" color='#483591' /> */}
        </>
    )
}