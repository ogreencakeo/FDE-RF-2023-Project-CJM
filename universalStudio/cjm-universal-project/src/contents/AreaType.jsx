import { Fragment, useEffect, useState } from "react";
import { attractionData } from "../data/attraction/attractionData";

// css
import "../css/area_type.css";

import { Link, useLocation } from "react-router-dom";
import { GoodsSwiper } from "./pages/plugin/Swiper";
import { UniverSalText } from "./module/UniverSalText";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCirclePlus,
    faDiceTwo,
    faHatWizard,
    faParachuteBox,
    faDemocrat,
    faTree,
} from "@fortawesome/free-solid-svg-icons";

export function AreaType() {
    const loc = useLocation();
    let keyword;

    if (loc.state) keyword = loc.state.keyword;

    const [selectedCat, setSelectedCat] = useState(["nintendo", "harrypotter", "minion", "wonderland", "jurassicpark"]);

    const changeList = (e) => {
        const cid = e.target.id;
        const isChecked = e.target.checked;

        setSelectedCat((v) => {
            if (isChecked) {
                return [...v, cid];
            } else {
                return v.filter((v) => v !== cid);
            }
        });
    };

    // 페이징
    const pgBlock = 9;
    const [pgNum, setPgNum] = useState(1);

    const cntData = attractionData.length;

    const makeList = () => {
        const tempData = [];

        let initNum = (pgNum - 1) * pgBlock;
        let limitNum = pgNum * pgBlock;

        const filterData = attractionData.filter((v) => selectedCat.includes(v.areatype));
        
        for (let i = initNum; i < limitNum; i++) {
            if (i >= cntData) break;
            tempData.push(filterData[i]);
            console.log('tempData :', tempData);
        }
        return tempData.map((v, i) => (
            <div className="area-type-bx" key={i}>
                <Link
                    to="/detail"
                    state={{
                        name: v.name,
                        img: v.img,
                        map: v.map,
                        title: v.title,
                        desc: v.desc,
                        logo: v.logo,
                    }}
                >
                    <div className="area-type-img">
                        <img src={process.env.PUBLIC_URL + `${v.img}`} alt={v.name} />
                        <h2>
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </h2>
                    </div>
                </Link>
                <div className="area-type-cont">
                    <h3>
                        {v.icon} &nbsp;{v.areatype}
                    </h3>
                    <h2>{v.name}</h2>
                </div>
            </div>
        ));
    };

    const pagingLink = () => {
        const blockCnt = Math.floor(cntData / pgBlock);
        const blockPad = cntData % pgBlock;
        const limit = blockCnt + (blockPad === 0 ? 0 : 1);
        let pgCode = [];

        for (let i = 0; i < limit; i++) {
            pgCode[i] = (
                <Fragment key={i}>
                    {pgNum - 1 === i ? (
                        <b>{i + 1}</b>
                    ) : (
                        <a href="#" onClick={chgList}>
                            {i + 1}
                        </a>
                    )}

                    {i < limit - 1 ? " | " : ""}
                </Fragment>
            );
        }
        return pgCode;
    };

    const chgList = (e) => {
        e.preventDefault();
        let currNum = e.target.innerText;
        setPgNum(currNum);
    }
    return (
        <>
            <GoodsSwiper cats="area" />
            <div className="area-type-btn">
                <nav>
                    <ul>
                        <li>
                            <label htmlFor="nintendo">
                                <FontAwesomeIcon icon={faDiceTwo} /> 닌텐도 월드
                            </label>
                            &nbsp;
                            <input
                                type="checkbox"
                                className="chkbx"
                                id="nintendo"
                                defaultChecked={selectedCat.includes("nintendo")}
                                onChange={changeList}
                            />
                        </li>
                        <li>
                            <label htmlFor="harrypotter">
                                <FontAwesomeIcon icon={faHatWizard} /> 해리포터
                            </label>
                            &nbsp;
                            <input
                                type="checkbox"
                                className="chkbx"
                                id="harrypotter"
                                defaultChecked={selectedCat.includes("harrypotter")}
                                onChange={changeList}
                            />
                        </li>
                        <li>
                            <label htmlFor="minion">
                                <FontAwesomeIcon icon={faParachuteBox} /> 미니언파크
                            </label>
                            &nbsp;
                            <input
                                type="checkbox"
                                className="chkbx"
                                id="minion"
                                defaultChecked={selectedCat.includes("minion")}
                                onChange={changeList}
                            />
                        </li>
                        <li>
                            <label htmlFor="wonderland">
                                <FontAwesomeIcon icon={faDemocrat} /> 원더랜드
                            </label>
                            &nbsp;
                            <input
                                type="checkbox"
                                className="chkbx"
                                id="wonderland"
                                defaultChecked={selectedCat.includes("wonderland")}
                                onChange={changeList}
                            />
                        </li>
                        <li>
                            <label htmlFor="jurassicpark">
                                <FontAwesomeIcon icon={faTree} /> 쥬라기공원
                            </label>
                            &nbsp;
                            <input
                                type="checkbox"
                                className="chkbx"
                                id="jurassicpark"
                                defaultChecked={selectedCat.includes("jurassicpark")}
                                onChange={changeList}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="area-type-wrap">{makeList()}</div>
            <div style={{width:'100px', height:'50px'}}>{pagingLink()}</div>
            <UniverSalText />
        </>
    );
}
