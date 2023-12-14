import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";

// 제이쿼리
import $ from "jquery";

import { navMenu } from "../data/navMenu";
import { Logo } from "../contents/module/Logo";

// import '../css/nav.css';

// 폰트어썸
// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TopArea = memo(({ chgPageFn, logSts, logMsg, logOut }) => {
    // showSerach
    const showSerach = (e) => {
        e.preventDefault();
        $(".searchingGnb").show();
        $("#schinGnb").focus();
    };

    // enterKey
    const enterKey = (e) => {
        if (e.key === "Enter") {
            let txt = $(e.target).val().trim();
            if (txt !== "") {
                $(e.target).val("").parent().hide();
                goSerach(txt);
            }
        }
    };

    const goSerach = (txt) => {
        chgPageFn("/schpage", { state: { keyword: txt } });
    };

    const showMenu = () => {
        $('.top-area').toggleClass('on');
    }


    useEffect(()=>{
        // GNB a 요소 클릭시 전체메뉴 닫기
        // 대상 : .gnb a[href!='#']
        // -> href가 '#'이 아닌 gnb 하위 모든 a요소
        // -> !=은 제이쿼리 전용!
        $(".gnb a[href!='#']").on('click', ()=>{
            $('.top-area').removeClass('on')
        }); // click /////////

        
        // let hv = smenu.offsetHeight;
        // smenu.style.height = hv + 'px';
        
    }); // useEffect

    useEffect(()=>{
        let smenu = document.querySelectorAll('.smenu');
        let hv = smenu.querySelector('ol').innerHeight;
    })


    return (
        <>
            {
                logMsg && alert(`${logMsg}`)
            }
            <header className="top-area">
                <nav className="gnb">
                    <ul>
                        <li>
                            <Logo />
                        </li>

                        {navMenu.map((v, i) => (
                            <li key={i}>
                                {v.sub ? <a href="#">{v.txt}</a> : <Link to={v.link}>{v.txt}</Link>}
                                {v.sub && (
                                    <div className="smenu">
                                        <ol>
                                            {v.sub.map((v, i) => (
                                                <li key={i}>
                                                    <Link to={v.link}>{v.txt}</Link>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                            </li>
                        ))}
                        <li style={{ marginLeft: "auto" }}>
                            <div className="searchingGnb">
                                <FontAwesomeIcon icon={faSearch} className="schbtnGnb" title="Open Search" />
                                <input id="schinGnb" type="text" placeholder="Filter by keyword" onKeyUp={enterKey} />
                            </div>
                            <a href="#" onClick={showSerach}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        {logSts === null && (
                            <>
                                <li>
                                    <Link to="/member">회원가입</Link>
                                </li>
                                <li>
                                    <Link to="/login">로그인</Link>
                                </li>
                            </>
                        )}
                        {
                            logSts !== null && (
                                <>
                                    <li>
                                        <a href="#" onClick={logOut}>LOGOUT</a>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                    <button className="hambtn" onClick={showMenu}></button>
                </nav>
            </header>
        </>
    );
});
