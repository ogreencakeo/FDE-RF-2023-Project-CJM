import React, { useContext, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";

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
    faCalendarDays,
    faGhost,
    faBoltLightning,
    faEarthAsia,
    faLightbulb,
    faComputerMouse,
    faXmark
} from "@fortawesome/free-solid-svg-icons";

// 데이터
import { pickUpData } from "../data/main/pickup.js";
import { eventData } from "../data/event/eventData.js";

import WaveText from "./module/WaveText.jsx";
import { useState } from "react";

// dragFn
import { dragFn } from "../Function/dragFn.js";
// jquery
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

import { ImgMoveSlide } from "./module/ImgMoveSlide.jsx";
import { UniverSalText } from "./module/UniverSalText.jsx";
import { ImgHoverPlay } from "./module/ImgHoverPlay.jsx";
import Weather from "./module/Weather.jsx";

import { Area } from "../contents/module/Area.jsx";
import { MoveAgency } from "./module/MoveAgency.jsx";
import { universalCon } from "./module/universalContext.jsx";
import { NoticeModal } from "./module/NoticeModal.jsx";

export function Main() {
    useEffect(() => {
        const mainImgStage = document.querySelector(".header-main-img-wrap");
        setTimeout(() => {
            mainImgStage.classList.add("on");
        }, 700);

        // pick up 드래그
        dragFn();
    }, []);

    // 배경색을 저장하는 useRef
    const backgroundColorRef = useRef("#ebe3de");

    useEffect(() => {
        // 페이지 2 배경색 변경을 위한 함수
        const changeBackgroundColor = () => {
            const page2Ele = document.querySelector(".main-video");
            const colorChange = ["#ebe3de", "#cadbb8", "whitesmoke", "#cebfd6", "#c5dfe3"];
            const randomColor = colorChange[Math.floor(Math.random() * colorChange.length)];
            backgroundColorRef.current = randomColor;
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

    // makeLight

    const [lightIdx, setLightIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLightIdx((prev) => (prev + 1) % 3);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const makeLight = () => {
        const lightTemp = [];
        for (let i = 0; i < 3; i++) {
            lightTemp[i] = (
                <span key={i}>
                    <FontAwesomeIcon className={i == lightIdx ? "on" : ""} icon={faLightbulb} />
                </span>
            );
        }
        return lightTemp;
    };

    // 지도 보이기
    const universalMapFn = () => {
        const universal_main_map = $(".map-wrapper-model");

        const cbtn = $(".cbtn");

        universal_main_map.fadeIn(300);
        cbtn.click(() => {
            universal_main_map.fadeOut(300);
        })
    };

    // prevent




    // 랜덤 비디오hash tag 
    const video_hash_tag = [
        "#특별한",
        "#재미있는",
        "#신나는",
        "#멋진",
        "#환상",
        "#꿈같은",
        "#매력",
        "#생각",
        "#달콤한"
    ];
    const [selectedHashTags, setSelectedHashTags] = useState([]);

    const makeHashTag = () => {
        const hashData = video_hash_tag.sort(() => Math.random() - 0.5);
        const data = new Set();
        const selectedData = hashData.filter((v) => {
            if (!data.has(v)) {
                data.add(v);
                return true;
            }
            return false;
        }).splice(0, 4);

        setSelectedHashTags(selectedData);
    };

    useEffect(() => {
        makeHashTag(); // makeHashTag 함수를 호출하여 초기 설정
    }, []);

    
    // const modalSts = useRef(true);
    

    return (
        <>
            <div>
                {/* 모달창 */}
                <NoticeModal />
                {/* <div className="notice-modal-wrap">
                    <div className="notice-modal">
                        <div className="modal-btn-bx">
                            <button>X</button>
                        </div>
                        <div>
                            <h3>
                                ※ 본 웹사이트는 유니버설 스튜디오의 공식 웹사이트가 아니며, 상업적인 목적이 아닌 개인적인 포트폴리오 제작을 위해 만들어졌습니다. 사용된 모든 콘텐츠는 원본 창작자의 권리를 존중하며 출처를 명시하여 사용하였습니다.
                            </h3><br />
                            <h4> 유니버설 스튜디오 재팬의 공식 웹 사이트 주소<br /><a href="https://www.usj.co.jp/web/ko/kr" target="_blank">https://www.usj.co.jp/web/ko/kr</a></h4><br />
                            <h4>저작권과 상표</h4>
                            <span>WIZARDING WORLD and all related trademarks, characters, names, and indicia are © & ™ Warner Bros. Entertainment Inc. Publishing Rights © JKR. (s23)
                                Minions and all related elements and indicia TM & © 2023 Universal Studios. All rights reserved.
                                © Nintend
                                BEETLEJUICE and all related characters and elements © & ™ Warner Bros. Entertainment Inc. (s23)
                                TM & © 2023 Sesame Workshop
                                © 2023 Peanuts Worldwide LLC
                                © 2023 SANRIO CO., LTD.　APPROVAL NO.EJ6031502
                                Shrek © 2023 DreamWorks Animation LLC. All Rights Reserved.
                                © 2023 MARVEL
                                © Walter Lantz Productions LLC
                                TM & © Universal Studios & Amblin Entertainment
                                TM & © Universal Studios.
                                © 2023 UNIVERSAL STUDIOS
                                © TOMY　　「トランスフォーマー」、「TRANSFORMERS」 は株式会社タカラトミーの登録商標です。
                                TRANSFORMERS and all related characters are trademarks of Hasbro and are used with permission. © 2023  Hasbro. All Rights Reserved. Licensed by Hasbro.
                                Curious George ®, created by Margret and H.A. Rey, is copyrighted and trademarked by HarperCollins Publishing Company and used under license. Licensed by Universal Studios Licensing, Inc. All rights reserved.
                                ©2023 Pokémon. ©1995-2023 Nintendo/Creatures Inc. /GAME FREAK inc.
                                ©KADOKAWA
                                ©KoyoharuGotoge/ SHUEISHA, Aniplex, ufotable
                                © SISYU
                                Detective Conan by Gosho Aoyama (published in Shogakukan’s Weekly Shonen Sunday magazine)
                                © 2024 GOSHO AOYAMA/DETECTIVE CONAN COMMITTEE
                                © SCRAP All Rights Reserved.
                                © K. Horikoshi / Shueisha, My Hero Academia Project
                                ©CAPCOM CO., LTD. ALL RIGHTS RESERVED.
                                ©Gosho Aoyama/1996,2024 Shogakukan,YTV,TMS
                                TM & © Universal Studios. All rights reserved.</span>
                        </div>
                    </div>
                </div> */}
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
                                <button onClick={() => universalMapFn()}>GO TO MAP</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 지도 */}
                <div className="map-wrapper-model">
                    <div className="map-model-bx">
                        <FontAwesomeIcon className="cbtn" icon={faXmark} />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.565411122063!2d135.42974357461148!3d34.66567677293211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0d083d5e25d%3A0x3605fe25303252aa!2z7Jyg64uI67KE7ISkIOyKpO2KnOuUlOyYpCDsnqztjKw!5e0!3m2!1sko!2skr!4v1701601504032!5m2!1sko!2skr"

                        ></iframe>
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
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <div className="panel-clock">
                                <FontAwesomeIcon className="panel-icon" icon={faClock} />
                                <span>영업시간</span>
                            </div>
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <div className="panel-park-map">
                                <FontAwesomeIcon className="panel-icon" icon={faMapMarkerAlt} />
                                <span>파크맵</span>
                            </div>
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <div className="panel-clock">
                                <FontAwesomeIcon className="panel-icon" icon={faSquareParking} />
                                <span>주차장 정보</span>
                            </div>
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <div className="panel-clock">
                                <FontAwesomeIcon className="panel-icon" icon={faCar} />
                                <span>교통편</span>
                            </div>
                        </a>
                    </div>
                    {/* Pick-up Section */}
                    <div className="pick-up">
                        {/* <h1>PICK UP</h1> */}
                        <h1>
                            <nav className="hover-move-wrap">
                                <a href="#" className="hover-move-bx" onClick={(e) => e.preventDefault()}>
                                    <span data-hover='PICK UP'>PICK UP</span>
                                </a>
                            </nav>
                        </h1>
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
                                            <img src={process.env.PUBLIC_URL + `/images/main/pickup/${v.img}`} alt='픽업이미지' />
                                            <h2>{v.title}</h2>
                                        </div>
                                        <div className="pick2">
                                            {v.emotion === "gifts" && <FontAwesomeIcon icon={faGifts} />}
                                            {v.emotion === "chessKing" && <FontAwesomeIcon icon={faChessKing} />}
                                            {v.emotion === "spider" && <FontAwesomeIcon icon={faSpider} />}
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
            {/* 로고이미지 */}
            <MoveAgency />
            <div className="character-erath">
                <img src={process.env.PUBLIC_URL + "/images/main/character/character12.gif"} alt="캐릭터 지구" />

                <div className="main-video">
                    {/* 동영상 짤막한 내용 */}
                    <div className="main-video-cont">
                        {/* <h1>#특별한 #재미있는 #신나는 #멋진</h1> */}
                        <div className="has-tag-div">
                            {selectedHashTags.map((v, i) => (
                                <h1 className="has_tag" key={i}>{v}</h1>
                            ))}
                        </div>
                        <div className="main-video-cont-img">
                            <img src={process.env.PUBLIC_URL + "/images/main/character/character13.gif"} alt="열기구" />
                        </div>
                    </div>
                    {/* 동영상 */}
                    <div className="main-video-wrap">
                        <iframe
                            src="https://www.youtube.com/embed/yKCqJ8llKuA"
                            title="동영상"
                            allow="autoplay; "
                        ></iframe>
                    </div>
                </div>
            </div>

            <ImgMoveSlide imgMove="attraction" />
            <div className="page2 page">
                <span className="page2-light">{makeLight()}</span>
                <div className="page2-cont">
                    <div className="enjoy-pick-cont">
                        <img className="enjoty-pick-img" src={process.env.PUBLIC_URL + "/images/main/character/clock.gif"} alt="시간" />
                        <h2 className="point-span">
                            <span data-hover="POINT1">POINT1</span>
                        </h2>
                        <h3>시간을 효율적으로 활용하자!</h3>
                        <p>#예약 탑승’ 티켓을 사용</p>
                    </div>
                    <div className="enjoy-pick-cont">
                        <img className="enjoty-pick-img" src={process.env.PUBLIC_URL + "/images/main/character/phone.gif"} alt="핸드폰" />
                        <h2 className="point-span">
                            <span data-hover="POINT2">POINT2</span>
                        </h2>
                        <h3>파크 내에서 앱을 능숙하게 사용하자!</h3>
                        <p>#1:어트랙션 탑승 정리권</p>
                        <p>#2:에어리어 입장 정리권</p>
                        <p>#3:예약 탑승</p>
                    </div>
                    <div className="enjoy-pick-cont">
                        <img className="enjoty-pick-img" src={process.env.PUBLIC_URL + "/images/main/character/party.gif"} alt="파티" />
                        <h2 className="point-span">
                            <span data-hover="POINT3">POINT3</span>
                        </h2>
                        <h3>
                            NO LIMIT!
                            <br /> 스트리트 페스티벌
                        </h3>
                        <p>#파크 전체가 열광 페스티벌!</p>
                    </div>
                </div>
            </div>
            <div className="page3">
                <div className="area-cont-wrap">
                    <h1><nav className="hover-move-wrap"><a href="#" className="hover-move-bx" onClick={(e) => e.preventDefault()}><span data-hover='Area'>Area</span></a></nav></h1>
                    <Area />
                </div>
            </div>
            {/* 아이 사진 */}
            <div className="main-footer-character">
                <div className="character-star">
                    <img src={process.env.PUBLIC_URL + "/images/main/character/character9.gif"} alt="캐릭터 별" />
                </div>
                <div className="character-child">
                    <img src={process.env.PUBLIC_URL + "/images/main/character/character17.png"} alt="어린이" />
                </div>
            </div>
            {/* 날씨정보 */}
            <Weather />
            {/* 이벤트 */}
            <div className="main-upcomingEv-wrap">
                <h1><nav className="hover-move-wrap"><a href="#" className="hover-move-bx" onClick={(e) => e.preventDefault()}><span data-hover='Upcoming Event'>Upcoming Event</span></a></nav></h1>
                <div className="main-upcomingEv">
                    {
                        eventData.map((v, i) =>
                            <div className="main-upcomingEv-bx" key={i}>
                                <div className="upcomingEv-img-bx">
                                    <img src={process.env.PUBLIC_URL + `/images/event/${v.img}`} alt="이벤트사진" />
                                </div>
                                <div className="main-upcomingEv-cont">
                                    <div><a href="#" onClick={(e) => e.preventDefault()}><span data-hover={v.name}>{v.name}</span></a></div>
                                    <div className="upcoimgEv-cont-bx">
                                        <h3>{v.cont}</h3>
                                        <p>{v.date}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* 마우스 오버시 사진 */}
            <div className="mouse-move">
                <h1>
                    <FontAwesomeIcon icon={faComputerMouse} />
                </h1>
                <h2>MOUSE MOVE</h2>
            </div>
            <ImgHoverPlay />
            <UniverSalText />
            <ImgMoveSlide imgMove='attraction2' />
        </>
    );
}
