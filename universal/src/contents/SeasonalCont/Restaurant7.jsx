import React, { useEffect } from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";

export function Restaurant7(){
    useEffect(()=>{
        window.scrollTo(0,0)
    }, []);
    return(
        <>
            <SeasonalInfo  menu='restaurant7' color='#f0e92e'/>
        </>
    )
}