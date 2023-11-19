import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { seasonalMenu } from "../../data/seasonalMenu";
import { Restaurant1 } from "./Restaurant1";
import { Restaurant2 } from "./Restaurant2";
import { Restaurant3 } from "./Restaurant3";

export function SeasonalMuLink() {
    console.log('seasonalMenu' , seasonalMenu);

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
                                        <Link to={`/seasonalMenu/${v.link}`}>
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

export function SeasonalMenuRoutes() {
    return (
        <Routes>
            <Route path='/seasonalMenu/restaurant1' element={<Restaurant1 />} />
            <Route path='/seasonalMenu/restaurant2' element={<Restaurant2 />} />
            <Route path='/seasonalMenu/restaurant3' element={<Restaurant3 />} />
        </Routes>
    )
}
