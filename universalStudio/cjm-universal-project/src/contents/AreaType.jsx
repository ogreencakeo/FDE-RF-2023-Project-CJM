import { useEffect, useState } from "react";
import { areaData } from "../data/attraction/attractionData";

// css
import '../css/area_type.css';

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

    const [areaType, setAreaType] = useState("nintendo");
    const [selData, setSelData] = useState(areaData[areaType]);
    const [areaColor, setAreaColor] = useState("nintendo");

    const areaChangeFn = (data) => {
        setAreaType(data);
        setAreaColor(data);
    };

    useEffect(() => {
        const selectedData = areaData[areaType];
        setSelData(selectedData);
    }, [areaType]);

    return (
        <>
            <GoodsSwiper cats="area" />
            <div className="area-type-btn">
                <nav>
                    <ul>
                        <li className={areaType === "nintendo" ? "arealicolor" : ""}>
                            <button
                                onClick={() => areaChangeFn("nintendo")}
                                key={0}
                                className={areaType === "nintendo" ? "areabuttoncolor" : ""}
                            >
                                슈퍼 닌텐도 월드™
                            </button>
                        </li>
                        <li className={areaType === "harrypotter" ? "arealicolor" : ""}>
                            <button
                                onClick={() => areaChangeFn("harrypotter")}
                                key={1}
                                className={areaType === "harrypotter" ? "areabuttoncolor" : ""}
                            >
                                위저딩 월드 오브 해리 포터™
                            </button>
                        </li>
                        <li className={areaType === "minion" ? "arealicolor" : ""}>
                            <button
                                onClick={() => areaChangeFn("minion")}
                                key={2}
                                className={areaType === "minion" ? "areabuttoncolor" : ""}
                            >
                                미니언 파크
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
                                쥬라기 공원
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="area-type-wrap">
                {selData.map((v, i) => (
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
                                <h2><FontAwesomeIcon icon={faCirclePlus} /></h2>
                            </div>
                        </Link>
                        <div className="area-type-cont">
                            <h3>{v.areatype}</h3>
                            <h2>{v.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <UniverSalText />
        </>
    );
}
