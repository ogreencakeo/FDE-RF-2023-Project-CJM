import { memo } from "react";
// 제이쿼리
import $ from 'jquery';
import { useEffect } from "react";

import { NavMenu } from "../modules/NavMenu";
import { Logo } from "../modules/Logo";

export const TopArea = memo(({ chgPageFn,logSts, logMsg, logOut}) => {
    const showMenu = () => {
        $('.ham-nav-bx, .ham-btn').toggleClass('on');
    }
    useEffect(() => {
        $('.footer-li>a').on('click', ()=>{
            $('.ham-nav-bx.on, .ham-btn.on').removeClass('on');
        });
        $('.logo').on('click', ()=>{
            $('.ham-nav-bx.on, .ham-btn.on').removeClass('on');
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
                    <NavMenu cat='top' />
                </nav>
            </div>
        </>
    );
});