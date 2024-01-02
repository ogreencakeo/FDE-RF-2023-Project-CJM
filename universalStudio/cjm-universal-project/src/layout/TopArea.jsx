import React, { memo, useEffect } from "react";
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



export const TopArea = memo(({ chgPageFn, logSts, logMsg, logOut }) => {
    // enterKey
    const enterKey = (e) => {
        if (e.key === "Enter" || e.keyCode === 13 || e.code === "Enter") {
            console.log('e.target :', e.target);
            let txt = $(e.target).val().trim();
            console.log('enterKey txt :', txt);
            if (txt !== "") {
                $(e.target).val("").parent().hide();
                console.log('go');
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

    // const gnb_smenu = document.querySelector('.gnb2 .smenu');
    // if(gnb_smenu){
    //     document.querySelector('.gnb2>ul>li').onClick = function(){
    //         gnb_smenu.style.display = 'block';
    //     }
    // }

    // useEffect(()=>{
    //     const gnb_list = document.querySelector('.gnb2>ul>li');
    //     gnb_list.addEventListener('click', ()=>{
            
    //         console.log(hi);
    //     });
    // }, []);

    // useEffect(() => {
    //     const gnb_list = document.querySelector('.gnb2>ul>li').currentTarget;
    //     const gnb_smenu = document.querySelector('.smenu2');
    //     gnb_list.onclick = function(){
    //         if(gnb_smenu){
    //             gnb_smenu.toggleClass('on');
    //         }
    //     }
    // }, []);

    // useEffect(()=>{
    //     const handleGnbClick = () =>{
    //         const gnb_smenu = document.querySelector('.smenu_toggle');
    //         const smenu = document.querySelector('.smenu2');
    //         if(gnb_smenu){
    //             smenu.classList.toggle('on');
    //         }
    //     };
    //     const tg = document.querySelector('.smenu_toggle').currentTarget();
    //     tg.addEventListener('click', handleGnbClick);

    //     return() => {
    //         tg.removeEventListener('click', handleGnbClick);
    //     }
        
    // });
    // useEffect(() => {
    //     const handleGnbClick = (e) => {
    //         const gnb_smenu = document.querySelectorAll('.smenu_toggle');
    //         const smenu = document.querySelectorAll('.smenu2');
    //         if (gnb_smenu && e.target === gnb_smenu) {
    //             smenu.classList.toggle('on');
    //         }
    //     };
    
    //     document.addEventListener('click', handleGnbClick);
    
    //     return () => {
    //         // Cleanup: 이 컴포넌트가 언마운트되면 이벤트 핸들러 제거
    //         document.removeEventListener('click', handleGnbClick);
    //     };
    // }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 함

    useEffect(() => {
        const handleGnbClick = (e) => {
            const gnb_smenu = e.target.closest('.smenu_toggle');
            const smenu = e.target.closest('.smenu2');
    
            if (gnb_smenu && smenu) {
                // Toggle the 'on' class for the closest smenu2 element
                smenu.classList.toggle('on');
            }
        };
    
        document.addEventListener('click', handleGnbClick);
    
        return () => {
            // Cleanup: Remove the event listener when the component unmounts
            document.removeEventListener('click', handleGnbClick);
        };
    },[]);    
    
    

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
                                {v.sub ? <a className="smenu_toggle" href="#">{v.txt}</a> : <Link to={v.link}>{v.txt}</Link>}
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
