import { seasonalMenu } from "../data/seasonalMenu";
import { RecommSeasonal } from "./SeasonalCont/RecommSeasonal";
import { SeasonalMuLink } from "./SeasonalCont/SeasonalMuLink";

export function SeasonalMenu() {
    return (
        <>
            {/*  추천 시즈널 메뉴 대특집  */}
            <RecommSeasonal />
            {/*시즈널 메뉴 링크 */}
            <SeasonalMuLink />
        </>
    );
}
