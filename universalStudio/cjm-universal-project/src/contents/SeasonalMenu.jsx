import { Route, Routes } from "react-router-dom";
// import { seasonalMenu } from "../data/seasonalMenu";
import { RecommSeasonal } from "./SeasonalCont/RecommSeasonal";
import { SeasonalMuLink, SeasonalMenuRoutes } from "./SeasonalCont/SeasonalMuLink";
export function SeasonalMenu() {
    return (
        <>
            {/*  추천 시즈널 메뉴 대특집  */}
            <RecommSeasonal />
            {/* <SeasonalMu /> */}

            {/*시즈널 메뉴 링크 */}
            {/* <SeasonalMuLink /> */}
            
        </>
    );
}
