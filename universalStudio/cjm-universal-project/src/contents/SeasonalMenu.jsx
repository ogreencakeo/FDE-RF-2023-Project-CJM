import { Route, Routes } from "react-router-dom";
// import { seasonalMenu } from "../data/seasonalMenu";
import { RecommSeasonal } from "./SeasonalCont/RecommSeasonal";
import { SeasonalMuLink, SeasonalMenuRoutes } from "./SeasonalCont/SeasonalMuLink";
import { SeasonalLink } from "./module/SeasonalLink";
import { Restaurant1 } from "./SeasonalCont/Restaurant1";
import { Restaurant2 } from "./SeasonalCont/Restaurant2";
import { Restaurant4 } from "./SeasonalCont/Restaurant4";
import { Restaurant3 } from "./SeasonalCont/Restaurant3";
import { Restaurant5 } from "./SeasonalCont/Restaurant5";
import { Restaurant6 } from "./SeasonalCont/Restaurant6";
export function SeasonalMenu() {
    return (
        <>
            {/*  추천 시즈널 메뉴 대특집  */}
            {/* <RecommSeasonal /> */}
            <SeasonalLink />
            {/* <SeasonalMu /> */}

            {/*시즈널 메뉴 링크 */}
            {/* <SeasonalMuLink /> */}
            <Routes>
                <Route index element={<Restaurant1 />} />
                <Route path="restaurant1" element={<Restaurant1 />} />
                <Route path="restaurant2" element = {<Restaurant2 />} />
                <Route path="restaurant3" element = {<Restaurant3 />} />
                <Route path="restaurant4" element = {<Restaurant4 />} />
                <Route path="restaurant5" element = {<Restaurant5 />} />
                <Route path="restaurant6" element = {<Restaurant6 />} />
            </Routes>
            
        </>
    );
}
