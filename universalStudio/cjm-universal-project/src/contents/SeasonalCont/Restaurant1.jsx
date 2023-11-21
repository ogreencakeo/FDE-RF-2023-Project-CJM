import React from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";
import { RecommSeasonal } from "./RecommSeasonal";

export function Restaurant1(){
    return(
        <>
            {/* <h2>레스토랑1페이지</h2> */}
            <SeasonalInfo  menu='restaurant1'/>
            {/* <RecommSeasonal/> */}
            <Caution />
        </>
    )
}