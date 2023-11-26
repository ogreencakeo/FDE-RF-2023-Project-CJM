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
import { useState } from "react";


export function Main() {

    const text = 'Universal Studio - PICK UP';

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
    }, []);


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
                            {/* Social Media */}
                            {/* <div className="universal_sns">
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
                            </div> */}
                        </div>
                    </div>
                </div>
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

            <div className="page1">
                <div className="load-text">
                    <span>
                        {text.split('').map((char, index) => (
                            <span key={index} style={{ visibility: index < visibleIndex ? 'visible' : 'hidden' }}>
                                {char}
                            </span>
                        ))}
                    </span>
                </div>

                <div className="pick-up">

                </div>

            </div>
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
        </>
    );
}
