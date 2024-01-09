import React, { useEffect } from "react";
import { SeasonalInfo } from "../module/SeasonalInfo";

export function Restaurant2(){
    useEffect(()=>{
        window.scrollTo(0,0)
    }, []);
    return(
        <>
            <SeasonalInfo  menu='restaurant2' color='#c5d6c6'/>
        </>
    )   
}