import { useEffect, useState } from "react";
import { attractionData } from "../data/attraction/attractionData";

// css
import "../css/area_type.css";

import { Link, useLocation } from "react-router-dom";
import { GoodsSwiper } from "./pages/plugin/Swiper";
import { UniverSalText } from "./module/UniverSalText";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export function AreaType() {
    const loc = useLocation();
    let keyword;

    if (loc.state) keyword = loc.state.keyword;

    // const [areaType, setAreaType] = useState("nintendo");
    // const [selData, setSelData] = useState(areaData[areaType]);
    // const [areaColor, setAreaColor] = useState("nintendo");

    // const areaChangeFn = (data) => {
    //     setAreaType(data);
    //     setAreaColor(data);
    // };

    // useEffect(() => {
    //     const selectedData = areaData[areaType];
    //     setSelData(selectedData);
    // }, [areaType]);

    // useEffect(() => {
    //     // dragFn();
    // });

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

    const makeList = () => {
        const filterData = attractionData.filter((v) => selectedCat.includes(v.areatype))
        
        return filterData.map((v, i) => (
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
                    <h3>{v.areatype}</h3>
                    <h2>{v.name}</h2>
                </div>
            </div>
        ));
    };

    return (
        <>
            <GoodsSwiper cats="area" />
            <div className="area-type-btn">
                <nav>
                    <ul>
                        {/* <li className={areaType === "nintendo" ? "arealicolor" : ""}>
                            <button
                                onClick={() => areaChangeFn("nintendo")}
                                key={0}
                                className={areaType === "nintendo" ? "areabuttoncolor" : ""}
                            >
                                닌텐도월드
                            </button>
                        </li>
                        <li className={areaType === "harrypotter" ? "arealicolor" : ""}>
                            <button
                                onClick={() => areaChangeFn("harrypotter")}
                                key={1}
                                className={areaType === "harrypotter" ? "areabuttoncolor" : ""}
                            >
                                해리포터
                            </button>
                        </li>
                        <li className={areaType === "minion" ? "arealicolor" : ""}>
                            <button
                                onClick={() => areaChangeFn("minion")}
                                key={2}
                                className={areaType === "minion" ? "areabuttoncolor" : ""}
                            >
                                미니언파크
                            </button>
                        </li>
                        <li className={areaType === "wonderland" ? "arealicolor" : ""}>
                            <button
                                onClick={() => areaChangeFn("wonderland")}
                                key={3}
                                className={areaType === "wonderland" ? "areabuttoncolor" : ""}
                            >
                                원더랜드
                            </button>
                        </li>
                        <li className={areaType === "jurassicpark" ? "arealicolor" : ""}>
                            <button
                                onClick={() => areaChangeFn("jurassicpark")}
                                key={4}
                                className={areaType === "jurassicpark" ? "areabuttoncolor" : ""}
                            >
                                쥬라기공원
                            </button>
                        </li> */}
                        <li>
                            <label htmlFor="nintendo">닌텐도 월드</label>
                            <input type="checkbox" className="chkbx" id="nintendo" defaultChecked={selectedCat.includes('nintendo')} onChange={changeList} />
                        </li>
                        <li>
                            <label htmlFor="harrypotter">해리포터</label>
                            <input type="checkbox" className="chkbx" id="harrypotter" defaultChecked={selectedCat.includes('harrypotter')} onChange={changeList} />
                        </li>
                        <li>
                            <label htmlFor="minion">미니언파크</label>
                            <input type="checkbox" className="chkbx" id="minion" defaultChecked={selectedCat.includes('minion')} onChange={changeList} />
                        </li>
                        <li>
                            <label htmlFor="wonderland">원더랜드</label>
                            <input type="checkbox" className="chkbx" id="wonderland" defaultChecked={selectedCat.includes('wonderland')} onChange={changeList} />
                        </li>
                        <li>
                            <label htmlFor="jurassicpark">쥬라기공원</label>
                            <input type="checkbox" className="chkbx" id="jurassicpark" defaultChecked={selectedCat.includes('jurassicpark')} onChange={changeList} />
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="area-type-wrap">
                {makeList()}
                {/* {selData.map((v, i) => (
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
                            <h3>{v.areatype}</h3>
                            <h2>{v.name}</h2>
                        </div>
                    </div>
                ))} */}
            </div>
            <UniverSalText />
        </>
    );
}
