import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faSquareFacebook, faSquareTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFaceLaughSquint } from "@fortawesome/free-regular-svg-icons";
import {
    faMapMarkerAlt,
    faClock,
    faSquareParking,
    faCar,
    faGifts,
    faSpider,
    faChessKing,
    faHatWizard,
    faMountainSun,
    faCalendarDays,
    faGhost,
    faBoltLightning,
    faEarthAsia,
    faEarthEurope,
    faEarthAfrica,
    faGlobe,
    faMobileScreenButton,
    faCalendarCheck,
    faIcons,
    faLightbulb
} from "@fortawesome/free-solid-svg-icons";

// 데이터
import { pickUpData } from "../data/main/pickup.js";

import WaveText from "./module/WaveText.jsx";
import { useState } from "react";

// dragFn
import { dragFn } from "../Function/dragFn.js";
// jquery
import "jquery-ui-dist/jquery-ui";
import { ImgMoveSlide } from "./module/ImgMoveSlide.jsx";
import { SwiperSec } from "./pages/plugin/SwiperSec.jsx";

// import { SwiperDrag } from "./pages/plugin/SwiperDrag.jsx";

export function Main() {

    const text = "#ENJOY 피크를 즐기는 방법";

    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (visibleIndex < text.length) {
                setVisibleIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, 200);

        return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval 정리
    }, [visibleIndex, text]);

    useEffect(() => {
        const mainImgStage = document.querySelector(".header-main-img-wrap");
        setTimeout(() => {
            mainImgStage.classList.add("on");
        }, 1500);

        // pick up 드래그
        dragFn();
    }, []);

    useEffect(() => {
        // 이전 코드 생략

        // 페이지 2 배경색 변경을 위한 함수
        const changeBackgroundColor = () => {
            const page2Ele = document.querySelector(".main-video");
            const colorChange = ["#ebe3de", "#cadbb8",  "whitesmoke", "#cebfd6", "#c5dfe3"];
            const randomColor = colorChange[Math.floor(Math.random() * colorChange.length)];
            page2Ele.style.backgroundColor = randomColor;
            page2Ele.style.transition = "backgroundColor 0.5s ease-in-out";
        };

        // 페이지 2 배경색 초기 설정
        changeBackgroundColor();

        // 일정 간격으로 페이지 2 배경색 변경
        const backgroundColorInterval = setInterval(() => {
            changeBackgroundColor();
        }, 1000); // 1000밀리초(5초) 간격으로 변경, 원하는 시간으로 조절

        return () => {
            clearInterval(backgroundColorInterval); // 컴포넌트가 언마운트될 때 interval 정리
        };
    }, []);


    // setTimeout(() => {
    //     const page2Ele = document.querySelector(".page2");
    //     const colorChange = ["#000", "#333b35"];
    //     const randomColor = colorChange[Math.floor(Math.random() * colorChange.length)];
    //     // page2Element.style.transition = 'background 0.5s';
    //     page2Ele.style.backgroundColor = randomColor;
    //     page2Ele.style.transition = "backgroundColor 0.5s ease-in-out";
    // }, 1000);

    // 사진 클릭 회전
    // 박스별 회전 상태를 저장하는 배열
    const [boxRotations, setBoxRotations] = useState(Array(pickUpData.length).fill(false));
    // const rotateAni = () => setClickAniFn((prev) => !prev);
    const rotateAni = (index) => {
        setBoxRotations((prevRotations) => {
            const newRotations = [...prevRotations];
            newRotations[index] = !newRotations[index];
            return newRotations;
        });
    };
    return (
        <>
            {/* Header */}
            {/* <div className={`${isMainVisible ? 'visible' : 'hidden'}`}> */}
            <div>
                <div className="header">
                    <div className="header-img">
                        <div className="header-img-wrap">
                            {/* Main Image */}
                            <div className="header-main-img-wrap">
                                <div className="header-main-img"></div>
                            </div>
                            {/* Main Content */}
                            <WaveText />
                            <div className="universal_link">
                                <a href="https://www.usj.co.jp/web/ko/kr" target="_blank">
                                    GO TO SITE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Section 1 */}
                <div className="main1 page1 page">
                    <div className="universal_sns">
                        <div className="universal_instagram">
                            <Link
                                to="https://www.instagram.com/universal_studios_japan/?ref=badge"
                                target="_blank"
                                title="인스타그램 바로가기"
                            >
                                <FontAwesomeIcon className="fa-square-instagra fa-brands" icon={faSquareInstagram} />
                            </Link>
                        </div>
                        <div className="universal_facebook">
                            <Link
                                to="https://www.facebook.com/UniversalStudiosJapan"
                                target="_blank"
                                title="인페이스북 바로가기"
                            >
                                <FontAwesomeIcon className="fa-brands fa-square-facebook" icon={faSquareFacebook} />
                            </Link>
                        </div>
                        <div className="universal_twitter">
                            <Link to="https://twitter.com/USJ_Official" target="_blank" title="트위터 바로가기">
                                <FontAwesomeIcon className="fa-brands fa-square-twitter" icon={faSquareTwitter} />
                            </Link>
                        </div>
                        <div className="universal_youtube">
                            <Link to="https://www.youtube.com/user/usjTV" target="_blank" title="유튜브 바로가기">
                                <FontAwesomeIcon className="fa-brands fa-youtube" icon={faYoutube} />
                            </Link>
                        </div>
                    </div>
                    <div className="utility-panel">
                        <a href="#">
                            <div className="panel-clock">
                                <FontAwesomeIcon className="panel-icon" icon={faClock} />
                                <span>영업시간</span>
                            </div>
                        </a>
                        <a href="#">
                            <div className="panel-park-map">
                                <FontAwesomeIcon className="panel-icon" icon={faMapMarkerAlt} />
                                <span>파크맵</span>
                            </div>
                        </a>
                        <a href="">
                            <div className="panel-clock">
                                <FontAwesomeIcon className="panel-icon" icon={faSquareParking} />
                                <span>주차장 정보</span>
                            </div>
                        </a>
                        <a href="#">
                            <div className="panel-clock">
                                <FontAwesomeIcon className="panel-icon" icon={faCar} />
                                <span>교통편</span>
                            </div>
                        </a>
                    </div>
                    {/* Pick-up Section */}
                    <div className="pick-up">
                        <h1>PICK UP</h1>
                        {/* <SwiperDrag /> */}
                        <div className="pick-up-wrap">
                            {pickUpData.map((v, i) => (
                                <div
                                    className={`pick-up-img-box ${boxRotations[i] ? "on" : ""}`}
                                    onClick={() => rotateAni(i)}
                                    key={i}
                                >
                                    <div className="pick-up-img">
                                        <div className="pick1">
                                            <img src={`./images/main/pickup/${v.img}`} alt={`${v.idx}번째 이미지`} />
                                            <h2>{v.title}</h2>
                                        </div>
                                        <div className="pick2">
                                            {v.emotion === "gifts" && <FontAwesomeIcon icon={faGifts} />}
                                            {v.emotion === "chessKing" && <FontAwesomeIcon icon={faSpider} />}
                                            {v.emotion === "spider" && <FontAwesomeIcon icon={faChessKing} />}
                                            {v.emotion === "hatWizard" && <FontAwesomeIcon icon={faHatWizard} />}
                                            {v.emotion === "mountainSun" && <FontAwesomeIcon icon={faMountainSun} />}
                                            {v.emotion === "ghost" && <FontAwesomeIcon icon={faGhost} />}
                                            {v.emotion === "calendar" && <FontAwesomeIcon icon={faCalendarDays} />}
                                            {v.emotion === "earth" && <FontAwesomeIcon icon={faEarthAsia} />}
                                            {v.emotion === "bolt" && <FontAwesomeIcon icon={faBoltLightning} />}
                                            <p>{v.cont}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="character-erath">
                <img src="../images/main/character/character12.gif" alt="캐릭터 지구" />
                <div className="main-video">
                    {/* 동영상 */}
                    <div class="main-video-wrap">
                        <iframe
                            src="https://www.youtube.com/embed/yKCqJ8llKuA"
                            title="동영상"
                            allow="autoplay; "
                        ></iframe>
                        {/* <p class="ticket-video-logo">#UNIVERSAL STUDIO JAPAN</p> */}
                    </div>
                    {/* 동영상 짤막한 내용 */}
                    <div className="main-video-cont">
                        <h1>#특별한 #재미있는 #신나는 #멋진
                        </h1>
                        <div className="main-video-cont-img">
                            <img src="../images/main/character/character13.gif" alt="열기구" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="page2 page">
                {/* <div className="main-character2">
                </div>
                
                <div className="main-character1">
                    <img src="../images/main/character/character1.png" alt="" />
                </div> */}
                <span className="page2-light">
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
                <div className="page2-cont">
                    <div className="page2-cont1">
                        <h1>
                            <FontAwesomeIcon icon={faCalendarCheck} />
                        </h1>
                        <h2>POINT1</h2>
                        <h3>시간을 효율적으로 활용하자!</h3>
                        <p>#예약 탑승’ 티켓을 사용</p>
                    </div>
                    <div className="page2-cont2">
                        <h1>
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </h1>
                        <h2>POINT2</h2>
                        <h3>파크 내에서 앱을 능숙하게 사용하자!</h3>
                        <p>#1:어트랙션 탑승 정리권</p>
                        <p>#2:에어리어 입장 정리권</p>
                        <p>#3:예약 탑승</p>
                    </div>
                    <div className="page2-cont3">
                        <h1>
                            <FontAwesomeIcon icon={faIcons} />
                        </h1>
                        <h2>POINT3</h2>
                        <h3>NO LIMIT! 스트리트 페스티벌</h3>
                        <p>#파크 전체가 열광 페스티벌!</p>
                        <button>쇼 스케줄 & 맵</button>
                    </div>
                    <div className="main-map">
                        <div className="show-map">
                            <img src="../images/main/join/showmap.jpg" alt="쇼맵" />
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="page3">
                <div className="faEarthAsia">
                    <FontAwesomeIcon icon={faEarthAsia} />
                </div>
                <div className="faEarthEurope">
                    <FontAwesomeIcon icon={faEarthEurope} />
                </div>
                <div className="faEarthAfrica">
                    <FontAwesomeIcon icon={faEarthAfrica} />
                </div>
                <div className="faGlobe">
                    <FontAwesomeIcon icon={faGlobe} />
                </div>
            </div> */}
            <div className="page4">
                {/* <div className="load-text">
                    <span>
                        {text.split("").map((char, index) => (
                            <span key={index} style={{ visibility: index < visibleIndex ? "visible" : "hidden" }}>
                                {char}
                            </span>
                        ))}
                    </span>
                </div> */}
                <div className="load-text">
                    <span>
                        {text.split("").map((char, index) => (
                            <span key={index} style={{ visibility: index < visibleIndex ? "visible" : "hidden" }}>
                                {char}
                            </span>
                        ))}
                    </span>
                </div>
            </div>
            {/* <div className="page5">
                <SwiperSec category="goods" />
                <SwiperSec category="restaurant" />
            </div>
            <div className="page-footer">
                <ImgMoveSlide imgMove="main" />
            </div> */}
        </>
    );
}
