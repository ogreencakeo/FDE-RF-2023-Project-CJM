import React from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";
import { Caution } from "../module/Caution";

export function Restaurant6(){
    return(
        <>
            <SeasonalInfo  menu='restaurant6'/>
            {/* <RecommSeasonal/> */}
            <Caution caution='restaurantCaution' />
        </>
    )
}