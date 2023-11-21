import React from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";
import { Caution } from "../module/Caution";

export function Restaurant5(){
    return(
        <>
            <SeasonalInfo  menu='restaurant5'/>
            {/* <RecommSeasonal/> */}
            <Caution caution='restaurantCaution' />
        </>
    )
}