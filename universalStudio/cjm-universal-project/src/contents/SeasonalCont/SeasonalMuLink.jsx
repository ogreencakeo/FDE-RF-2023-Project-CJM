import React from "react";
import { Link } from "react-router-dom";
import { seasonalMenu } from "../../data/seasonalMenu";

export function SeasonalMuLink() {
    console.log(seasonalMenu);

    return (
        <>
            <div className="seasonal_menu_wrap">
                <div className="seasonal_menu_bx">
                    <div className="seasonal_menu_tit">
                        <h1>시즈널 메뉴</h1>
                        <div>
                            <ul>
                                {seasonalMenu.map((v, i) => (
                                    <li key={i}>
                                        <Link to={v.link}>
                                            <div className="menu_block">
                                                <span>{v.idx}</span>
                                                <div>
                                                    <span>{v.location}</span>
                                                    {/* 이미지 */}
                                                </div>
                                                <div>
                                                    <i className="fa-solid fa-square-up-right"></i>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
