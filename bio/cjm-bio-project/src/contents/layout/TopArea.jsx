import { memo } from "react";
// 제이쿼리
import $ from 'jquery';
import { useEffect } from "react";

import { NavMenu } from "../modules/NavMenu";
import { Logo } from "../modules/Logo";

export const TopArea = memo(() => {
    const showMenu = () => {
        $('.ham-nav-bx, .ham-btn').toggleClass('on');
    }
    useEffect(() => {
        $('ham-nav-bx li a').on('click', ()=>{
            $('.ham-nav-bx, .ham-btn').removeClass('on');
        })
    })
    return (
        <>
            <div className="top-area-wrap">
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