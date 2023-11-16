import { seasonalMenu } from "../../data/seasonalMenu";
export function SeasonalMuLink() {
    // const seasonMenu = seasonalMenu;
    console.log(seasonalMenu);
    return seasonalMenu.map((v, i) => (
        <>
            <ul>
                {
                    <li key={i}>
                        <a href="#">
                            <div class="menu_block">
                                <span>{v.idx}</span>
                                <div>
                                    <span>{v.location}</span>
                                    {/* <!-- 이미지 --> */}
                                </div>
                                <div>
                                    <i class="fa-solid fa-square-up-right"></i>
                                </div>
                            </div>
                        </a>
                    </li>
                }
            </ul>
        </>
    ));
}
