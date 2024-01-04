import React, { memo, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

import { navMenu } from "../data/navMenu";
import { Logo } from "../contents/module/Logo";

// import '../css/nav.css';

// 폰트어썸
// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 컨텍스트 API
import { universalCon } from "../contents/module/universalContext";

export const TopArea = memo(({ chgPageFn, logSts, logMsg, logOut }) => {
    // enterKey
    const enterKey = (e) => {
        if (e.key === "Enter" || e.keyCode === 13 || e.code === "Enter") {
            console.log("e.target :", e.target);
            let txt = $(e.target).val().trim();
            console.log("enterKey txt :", txt);
            if (txt !== "") {
                $(e.target).val("").parent().hide();
                console.log("go");
                goSerach(txt);
            }
        }
    };
    const goPage = (e) => {
        console.log("goPage");
        const tg = $(e.currentTarget).siblings("#schinGnb");
        console.log("tg", tg);
        let tgTxt = tg.val().trim();
        if (tgTxt !== "") {
            $(tg).val("").parent().hide();
            goSerach(tgTxt);
        }
    };
    // showSerach
    const showSerach = (e) => {
        e.preventDefault();
        $(".searchingGnb").show();
        $("#schinGnb").focus();
        let txt = $("#schinGnb").val().trim();
        console.log(txt);
        // if (txt !== "") {
        //     $(e.target).val("").parent().hide();
        //     goSerach(txt);
        // }
    };

    const goSerach = (txt) => {
        $(".top-show-nav").slideUp().removeClass("on");
        chgPageFn("/schpage", { state: { keyword: txt } });
    };

    const showMenu = () => {
        $(".top-show-nav").slideToggle().toggleClass("on");
    };

    useEffect(() => {
        $(".gnb2 a[href!='#']").on("click", () => {
            $(".top-show-nav").slideUp().removeClass("on");
        });
        // window.scrollTo(0, 0);
    }); // useEffect

    useEffect(() => {
        const handleGnbClick = (e) => {
            const gnb_smenu = e.target.closest(".smenu_toggle");
            // 찾은 smenu_toggle 다음에 있는 형제 요소를 가져옴 (smenu2)
            const smenu = gnb_smenu ? gnb_smenu.nextElementSibling : null;
            const gnb_icon = e.target.children[0];
            // console.log('gnb_icon :', gnb_icon);
            if (gnb_icon) {
                gnb_icon.classList.toggle("on");
            }
            if (smenu) {
                // 다음 형제 요소 (smenu2)에 'on' 클래스를 토글
                smenu.classList.toggle("on");
                // gnb_icon.classList.toggle('on');
                // gnb_icon.style.transform = 'rotate(180deg)';
            }
        };

        document.addEventListener("click", handleGnbClick);

        return () => {
            document.removeEventListener("click", handleGnbClick);
        };
    }, []);

    useEffect(() => {
        // top-area 숨기고 사라지기 반복
        const topArea = document.querySelector(".top-area");

        if (topArea) {
            let lastScrollTop = 0;

            const handelScroll = () => {
                const scrollTop = window.scrollY || window.pageYOffset;
                if (scrollTop > lastScrollTop) {
                    // 아래로 스크롤할 때
                    topArea.classList.add("hide");
                } else {
                    // 위로 스크롤할 때
                    topArea.classList.remove("hide");
                }
                lastScrollTop = scrollTop;
            };

            window.addEventListener("scroll", handelScroll);
            return () => {
                window.removeEventListener("scroll", handelScroll);
            };
        }
    }, []);

    useEffect(() => {
        const hambBtnFn = () => {
            console.log("hi");
            const top_area = document.querySelector(".top-area");
            const a = top_area.nextElementSibling;
            console.log("a", a);
            const isOn = a.classList.contains("on");
            console.log("isOn", isOn);
        };

        const hamBtn = document.querySelector(".hambtn");
        if (hamBtn) {
            hamBtn.addEventListener("click", hambBtnFn);
        }

        return () => {
            hamBtn.removeEventListener('click', hambBtnFn);
        };
    }, []);

    return (
        <>
            <header className="top-area">
                <div className="logmsg">{logMsg}</div>
                <nav className="gnb">
                    <ul>
                        <li>
                            <Logo />
                        </li>

                        {navMenu.map((v, i) => (
                            <li key={i}>
                                {v.sub ? (
                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                        {v.txt}
                                    </a>
                                ) : (
                                    <Link to={v.link}>{v.txt}</Link>
                                )}
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
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="schbtnGnb"
                                    title="Open Search"
                                    onClick={goPage}
                                />
                                <input type="text" style={{ display: "none" }} />
                                <input id="schinGnb" type="text" placeholder="어트랙션 검색" onKeyUp={enterKey} />
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
                        {logSts !== null && (
                            <>
                                <li>
                                    <a href="#" onClick={logOut}>
                                        LOGOUT
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                    <button className="hambtn" onClick={showMenu}></button>
                </nav>
            </header>
            <div className="top-show-nav">
                <nav className="gnb2">
                    <ul>
                        <li style={{ marginLeft: "auto" }}>
                            <div className="searchingGnb">
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="schbtnGnb"
                                    title="Open Search"
                                    onClick={goPage}
                                />
                                <input type="text" style={{ display: "none" }} />
                                <input id="schinGnb" type="text" placeholder="어트랙션 검색" onKeyUp={enterKey} />
                            </div>
                            <a href="#" onClick={showSerach}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        {navMenu.map((v, i) => (
                            <li key={i}>
                                {v.sub ? (
                                    <a className="smenu_toggle" href="#">
                                        {v.txt}
                                        <span className="arrow-icon">▼</span>
                                    </a>
                                ) : (
                                    <Link to={v.link}>{v.txt}</Link>
                                )}
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
                            {logSts !== null && (
                                <>
                                    <li>
                                        <a href="#" onClick={logOut}>
                                            LOGOUT
                                        </a>
                                    </li>
                                </>
                            )}
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    );
});
