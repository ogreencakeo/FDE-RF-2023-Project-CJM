import React, { useEffect } from "react";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faSquareFacebook, faSquareTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
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
    faEarthAsia
} from "@fortawesome/free-solid-svg-icons";

import { pickUpData } from "../data/main/pickup.js";

import { Link } from "react-router-dom";

import WaveText from "./module/WaveText.jsx";

// 제이쿼리
import $ from "jquery";
import { useState } from "react";

// 다른 import 문은 여기에 추가하세요.

export function Main() {

    const load_text = 'UNIVERSAL STUDIO';

    const [currentIdx, setCurrentIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isMainVisible, setIsMainVisible] = useState(false);

    // clickAniFn(setClickAniFn);

    // UNIVERSAL STUDIO 글자 로딩 페이지
    
    useEffect(() => {
        // 페이지가 처음 마운트될 때만 실행
        const interval = setInterval(() => {
            if (currentIdx < load_text.length) {
                setCurrentIdx((prevIdx) => prevIdx + 1);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setIsVisible(false);
                    setTimeout(() => {
                        setIsMainVisible(true);
                    }, 1000)
                }, 200);
            }
        }, 200);
    }, []); // 두 번째 인자로 빈 배열을 전달하여 처음 마운트될 때만 실행
    useEffect(() => {
        const mainImgStage = document.querySelector(".header-main-img-wrap");
        setTimeout(() => {
            mainImgStage.classList.add("on");
        }, 1500);
    }, []);

    // const rotateAni = (e) => {
    //     const target = e.currentTarget;
    //     console.log("$(target) :", target);
    //     console.log("$(target).find('.pick-up-img')) :", $(target).children('.pick-up-img'));
    //     $(target).children('.pick-up-img').toggleClass("on");
    // };

    // 사진 클릭 회전
    // const [clickAniFn, setClickAniFn] = useState(true);
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

    // const result = {
    //     emtion1: <FontAwesomeIcon icon={faGifts} />,
    //     emtion2: <FontAwesomeIcon icon={faSpider} />,
    //     emtion3: <FontAwesomeIcon icon={faChessKing} />,
    //     emtion4: <FontAwesomeIcon icon={faHatWizard} />,
    //     emtion4: <FontAwesomeIcon icon={faMountainSun} />,
    // };

    // console.log("Object.keys(result) :", Object.keys(result));
    // console.log("pickUpData", pickUpData);
    // console.log("pickUpData[0]", pickUpData[0]);
    // console.log('pickUpData[0]["name"] :', pickUpData[0]["name"]);
    // console.log(Object.keys(result) == pickUpData.name);
    // console.log(
    //     "Object.keys(result).find(pickUpData[i][v.name]) :",
    //     Object.keys(result).indexOf(pickUpData[0]["name"])
    // );

    return (
        <>
            {/* 로딩 구역 */}
            <div className={`loading-page ${isVisible ? 'visible' : 'hidden'}`}>
                <div>
                    <FontAwesomeIcon icon={faEarthAsia} />
                </div>
                <div className="load-text">

                    {load_text.split('').map((v, i) =>
                        <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                            {v}
                        </span>
                    )}
                </div>
            </div>
            {/* Header */}
            <div className={`${isMainVisible ? 'visible' : 'hidden'}`}>
                <div className="header">
                    <section>
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
                                {/* Social Media */}
                                <div className="universal_sns">
                                    <div className="universal_instagram">
                                        <Link
                                            to="https://www.instagram.com/universal_studios_japan/?ref=badge"
                                            target="_blank"
                                            title="인스타그램 바로가기"
                                        >
                                            <FontAwesomeIcon
                                                className="fa-square-instagra fa-brands"
                                                icon={faSquareInstagram}
                                            />
                                        </Link>
                                    </div>
                                    <div className="universal_facebook">
                                        <Link
                                            to="https://www.facebook.com/UniversalStudiosJapan"
                                            target="_blank"
                                            title="인페이스북 바로가기"
                                        >
                                            <FontAwesomeIcon
                                                className="fa-brands fa-square-facebook"
                                                icon={faSquareFacebook}
                                            />
                                        </Link>
                                    </div>
                                    <div className="universal_twitter">
                                        <Link to="https://twitter.com/USJ_Official" target="_blank" title="트위터 바로가기">
                                            <FontAwesomeIcon
                                                className="fa-brands fa-square-twitter"
                                                icon={faSquareTwitter}
                                            />
                                        </Link>
                                    </div>
                                    <div className="universal_youtube">
                                        <Link
                                            to="https://www.youtube.com/user/usjTV"
                                            target="_blank"
                                            title="유튜브 바로가기"
                                        >
                                            <FontAwesomeIcon className="fa-brands fa-youtube" icon={faYoutube} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* Main Section 1 */}
                <div className="main1">
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
                </div>


                {/* Pick-up Section */}
                <div className="pick-up">
                    <div className="pick-up-wrap">
                        {pickUpData.map((v, i) => (
                            <div
                                className={`pick-up-img-box ${boxRotations[i] ? 'on' : ''}`}
                                onClick={() => rotateAni(i)}
                                key={i}
                            >
                                <div className="pick-up-img">
                                    <div className="pick1">
                                        <img src={`./images/main/pickup/${v.img}`} alt={`${v.idx}번째 이미지`} />
                                        <h2>{v.title}</h2>
                                    </div>
                                    <div className="pick2">
                                        {v.emotion === 'gifts' && <FontAwesomeIcon icon={faGifts} />}
                                        {v.emotion === 'chessKing' && <FontAwesomeIcon icon={faSpider} />}
                                        {v.emotion === 'spider' && <FontAwesomeIcon icon={faChessKing} />}
                                        {v.emotion === 'hatWizard' && <FontAwesomeIcon icon={faHatWizard} />}
                                        <p>{v.cont}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
        </>
    );
}
