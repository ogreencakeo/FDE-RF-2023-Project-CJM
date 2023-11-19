import { Route, Routes } from "react-router-dom";
import { seasonalMenu } from "../data/seasonalMenu";
import { RecommSeasonal } from "./SeasonalCont/RecommSeasonal";
import { SeasonalMuLink } from "./SeasonalCont/SeasonalMuLink";
import { Restaurant1 } from "./SeasonalCont/Restaurant1";
import { Restaurant2 } from "./SeasonalCont/Restaurant2";
import { Restaurant3 } from "./SeasonalCont/Restaurant3";

export function SeasonalMenu() {
    return (
        <>
            {/*  추천 시즈널 메뉴 대특집  */}
            <RecommSeasonal />

            {/*시즈널 메뉴 링크 */}
            <SeasonalMuLink />
            <Routes>
                <Route path='restaurant1' element={<Restaurant1 />} />
                <Route path='restaurant2' element={<Restaurant2 />} />
                <Route path='restaurant3' element={<Restaurant3 />} />
            </Routes>
        </>
    );
}
