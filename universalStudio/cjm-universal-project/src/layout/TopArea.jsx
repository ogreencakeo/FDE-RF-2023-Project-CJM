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

        $('.top-show-nav').slideToggle().toggleClass('on');
        window.scrollTo(0, 0);

    }


    useEffect(() => {

        $(".gnb2 a[href!='#']").on('click', () => {
            $('.top-show-nav').slideToggle().removeClass('on');
        });



    }); // useEffect



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
            <div className="top-show-nav">
                <nav className="gnb2">
                    <ul>
                        <li style={{ marginLeft: "auto" }}>
                            <div className="searchingGnb">
                                <FontAwesomeIcon icon={faSearch} className="schbtnGnb" title="Open Search" />
                                <input id="schinGnb" type="text" placeholder="Filter by keyword" onKeyUp={enterKey} />
                            </div>
                            <a href="#" onClick={showSerach}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        {navMenu.map((v, i) => (
                            <li key={i}>
                                {v.sub ? <a href="#">{v.txt}</a> : <Link to={v.link}>{v.txt}</Link>}
                                {v.sub && (
                                    <div className="smenu2">
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
                        <div className="member-join">
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
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    );
});
