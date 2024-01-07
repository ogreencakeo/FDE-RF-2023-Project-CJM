import { useLocation } from "react-router-dom";
import "../css/detail.css";

import { Map } from "./module/Map";

import { ImgMoveSlide } from "./module/ImgMoveSlide";
import { Caution } from "./module/Caution";
import { Fragment, useEffect } from "react";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuoteLeft, faQuoteRight, faParachuteBox, faCrown, faPersonBreastfeeding,
    faHourglassHalf, faFileLines, faTicketSimple, faPersonArrowUpFromLine, faPeopleGroup
} from "@fortawesome/free-solid-svg-icons";

export function Detail() {
    useEffect(() => {
        window.scroll({ top: 0, behavior: 'smooth' });
    }, []);

    const loc = useLocation();
    const name = loc.state.name;
    const img = loc.state.img;
    const mapLocal = loc.state.map;
    const title = loc.state.title;
    const desc = loc.state.desc;
    const logo = loc.state.logo;

    console.log("mapLocal", mapLocal);
    console.log("img", img);

    const makeCode = (data) => {
        const selData = data.split("^");
        const temp = [];
        for (let i = 0; i < selData.length; i++) {
            temp[i] = <p className="detail-split-p">{selData[i]}</p>;
        }
        return temp;
    };

    

    const attFont = [
        <FontAwesomeIcon icon={faParachuteBox} />,
        <FontAwesomeIcon icon={faCrown} />,
        <FontAwesomeIcon icon={faPersonBreastfeeding} />,
        <FontAwesomeIcon icon={faHourglassHalf} />,
        <FontAwesomeIcon icon={faFileLines} />,
        <FontAwesomeIcon icon={faTicketSimple} />,
        <FontAwesomeIcon icon={faPersonArrowUpFromLine} />,
        <FontAwesomeIcon icon={faPeopleGroup} />
    ];

    const chaSapn = [
        '어트랙션 특징',
        '유니버설 VIP 익스피리언스',
        '보호자 동승 시',
        '소요 시간',
        '어트랙션 이용 기준',
        '익스프레스 패스 사용 가능',
        '신장 제한',
        '정원'
    ];
   

    return (
        <div className="attraction-detail-wrap">
            <div className="attraction-detail-bx">
                <div className="attraction-detail-cont">
                    <h1>
                        <nav className="hover-move-wrap">
                            <a href="#" className="hover-move-bx">
                                <span data-hover={name} onClick={(e) => e.preventDefault()}>
                                    {name}
                                </span>
                            </a>
                        </nav>
                    </h1>
                    <h2>{title}</h2>
                    <div className="attraction-logo-img">
                        <img src={process.env.PUBLIC_URL + `${logo}`} alt="로고이미지" />
                    </div>
                    <h2><FontAwesomeIcon icon={faQuoteLeft} /></h2>
                    <p>
                        {/* {desc} */}
                        {desc.indexOf("^") == -1 ? desc : makeCode(desc)}
                    </p>
                    <h2><FontAwesomeIcon icon={faQuoteRight} /></h2>
                    <div className="attraction-detail-main-img">
                        <img src={process.env.PUBLIC_URL + `${img}`} alt="어트랙션 사진" />
                    </div>
                    <Map cat="attraction" mapi={mapLocal} shop_location="어트랙션" />
                </div>
            </div>
            <Caution caution='attractionCaution' />
            <ImgMoveSlide imgMove="logo" />
        </div>
    );
}
