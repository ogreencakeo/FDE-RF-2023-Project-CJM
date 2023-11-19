import React, { useEffect } from 'react';

import { faSquareInstagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from 'react-router-dom';

// 다른 import 문은 여기에 추가하세요.

export function Main() {
    useEffect(() => {
        const mainImgStage = document.querySelector('.header-main-img-wrap');
        setTimeout(() => {
            mainImgStage.classList.add('on');
        }, 400);
    }, []);

    const waveText = 'Universal Studios';
    let waveSpanCode = '';

    let seqNum = 0;

    for (let x of waveText) {
        console.log(x);
        if (x === ' ') waveSpanCode += '&nbsp;&nbsp;';
        else waveSpanCode += `<span style="animation-delay : ${seqNum * 0.1}s;">${x}</span>`;
        seqNum++;
    }

    return (
        <>
            {/* Header */}
            <div className="header">
                <section>
                    <div className="header-img">
                        <div className="header-img-wrap">
                            {/* Main Image */}
                            <div className="header-main-img-wrap">
                                <div className="header-main-img"></div>
                            </div>
                            {/* Main Logo */}
                            <div className="main-logo">
                                <img src="../../../images/usj-logo-white.avif" alt="" />
                            </div>
                            {/* Navigation */}
                            {/* Main Content */}
                            <div className="header-content">
                                <span dangerouslySetInnerHTML={{ __html: waveSpanCode }}></span>
                            </div>
                            <div className="universal_link">
                                <a href="https://www.usj.co.jp/web/ko/kr" target="_blank">
                                    GO TO SITE
                                </a>
                            </div>
                            {/* Social Media */}
                            <div className="universal_sns">
                                <div className="universal_instagram">
                                    <Link to="https://www.instagram.com/universal_studios_japan/?ref=badge" target="_blank" title="인스타그램 바로가기">
                                        <FontAwesomeIcon className="fa-square-instagram" icon={ faSquareInstagram} />
                                    </Link>
                                    {/* <a
                                        className="fa-brands fa-square-instagram"
                                        href="https://www.instagram.com/universal_studios_japan/?ref=badge"
                                        target="_blank"
                                        title="인스타그램 바로가기"
                                    ></a> */}
                                </div>
                                <div className="universal_facebook">
                                    <a
                                        className="fa-brands fa-square-facebook"
                                        href="https://www.facebook.com/UniversalStudiosJapan"
                                        target="_blank"
                                        title="페이스북 바로가기"
                                    ></a>
                                </div>
                                <div className="universal_twitter">
                                    <a
                                        className="fa-brands fa-square-twitter"
                                        href="https://twitter.com/USJ_Official"
                                        target="_blank"
                                        title="트위터 바로가기"
                                    ></a>
                                </div>
                                <div className="universal_youtube">
                                    <a
                                        className="fa-brands fa-youtube"
                                        href="https://www.youtube.com/user/usjTV"
                                        target="_blank"
                                        title="유튜브 바로가기"
                                    ></a>
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
                            <span className="fa-regular fa-clock"></span>
                            <span>영업시간</span>
                        </div>
                    </a>
                    <a href="#">
                        <div className="panel-park-map">
                            <span className="fa-solid fa-map-location-dot"></span>
                            <span>파크맵</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="panel-clock">
                            <span className="fa-solid fa-square-parking"></span>
                            <span>주차장 정보</span>
                        </div>
                    </a>
                    <a href="#">
                        <div className="panel-clock">
                            <span className="fa-solid fa-car"></span>
                            <span>교통편</span>
                        </div>
                    </a>
                </div>
            </div>

            {/* Pick-up Section */}
            <div className="pick-up">
                <div className="pick-up-wrap">
                    <div className="pick-up-img-box">
                        <div className="pick-up-img">
                            <img className="pick1" src="./images/main/pickup/pickup1.jpg" alt="" />
                            <div className="pick2">
                                <img src="./images/main/pickup/pickImg1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="pick-up-img-box">
                        <div className="pick-up-img">
                            <img className="pick1" src="./images/main/pickup/pickImg2.jpg" alt="" />
                            <div className="pick2">
                                <img src="./images/main/pickup/pickup2.jpg" alt="" />
                            </div>
                        </div>
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
