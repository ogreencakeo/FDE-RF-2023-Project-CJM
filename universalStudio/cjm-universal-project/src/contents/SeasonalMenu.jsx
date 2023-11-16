import { seasonalMenu } from "../data/seasonalMenu";
import { RecommSeasonal } from "./SeasonalCont/RecommSeasonal";
import { SeasonalMuLink } from "./SeasonalCont/SeasonalMuLink";

export function SeasonalMenu() {
    return (
        <>
            {/*  추천 시즈널 메뉴 대특집  */}
            <RecommSeasonal />
            {/*시즈널 메뉴 링크 */}
            <div class="seasonal_menu_wrap">
                <div class="seasonal_menu_bx">
                    <div class="seasonal_menu_tit">
                        <h1>시즈널 메뉴</h1>
                        <div></div>
                    </div>
                    <SeasonalMuLink />
                </div>
            </div>
        </>
    );
}
