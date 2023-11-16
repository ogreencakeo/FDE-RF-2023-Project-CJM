// 시즈널 메뉴 링크 이동
import React from "react";
import { Link } from "react-router-dom";
import { seasonalMenu } from "../../data/seasonalMenu";
export function SeasonalMuLink() {
    // const seasonMenu = seasonalMenu;
    console.log(seasonalMenu);
    return seasonalMenu.map((v, i) => (
        <>
            <ul>
                {
                    <li key={i}>
                        <Link to={v.link}>
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
                        </Link>
                    </li>
                }
            </ul>
        </>
    ));
}
