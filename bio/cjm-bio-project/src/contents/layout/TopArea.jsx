import { memo } from "react";
import { Link } from "react-router-dom";
// 제이쿼리
import $ from "jquery";
import { useEffect } from "react";

import { NavMenu } from "../modules/NavMenu";
import { Logo } from "../modules/Logo";

import { navData } from "../data/navData.js";

export const TopArea = memo(({ chgPageFn, logSts, logMsg, logOut, }) => {
    const selData = navData['top'];
    console.log("TopArea selData :", selData);
    const showMenu = () => {
        $(".ham-nav-bx, .ham-btn").toggleClass("on");
    };
    useEffect(() => {
        $(".footer-li>a").on("click", () => {
            $(".ham-nav-bx.on, .ham-btn.on").removeClass("on");
        });
        $(".logo").on("click", () => {
            $(".ham-nav-bx.on, .ham-btn.on").removeClass("on");
        });
    }, []);
    return (
        <>
            <div className="top-area-wrap">
                <div className="logmsg">{logMsg}</div>
                <div className="logo">
                    <Logo />
                </div>
                <div className="ham-btn" onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="ham-nav-bx">
                <nav>
                    <ul>
                        {selData.map((v, i) => (
                            <li className="footer-li" key={i}>
                                {v.sub ? <span>{v.txt}</span> : <Link to={v.link}> {v.txt}</Link>}
                                {v.sub && (
                                    <div className="smenu">
                                        <ol>
                                            {v.sub.map((v, i) => (
                                                <li key={i}>
                                                    <Link to={v.link}>{v.txt}</Link>
                                                </li>
                                            ))}
                                            {logSts === null && (
                                                <li>
                                                    <Link to="/member">JOIN US</Link>
                                                    <Link to="/login">LOGIN</Link>
                                                </li>
                                            )}
                                        </ol>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
});
