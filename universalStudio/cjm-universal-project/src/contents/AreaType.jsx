import { useEffect, useState } from "react";
import { areaData } from "../data/attraction/attractionData";

import "../css.area_type.css";

export function AreaType() {
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
            <div className="area-type-btn">
                <nav>
                    <ul>
                        <li className={areaType === "nintendo" ? "areabuttoncolor" : ""}>
                            <button onClick={() => areaChangeFn("nintendo")} key={0}>
                                슈퍼 닌텐도 월드™
                            </button>
                        </li>
                        <li className={areaType === "harrypotter" ? "areabuttoncolor" : ""}>
                            <button onClick={() => areaChangeFn("harrypotter")} key={1}>
                                위저딩 월드 오브 해리 포터™
                            </button>
                        </li>
                        <li className={areaType === "minion" ? "areabuttoncolor" : ""}>
                            <button onClick={() => areaChangeFn("minion")} key={2}>
                                미니언 파크
                            </button>
                        </li>
                        <li className={areaType === "wonderland" ? "areabuttoncolor" : ""}>
                            <button onClick={() => areaChangeFn("wonderland")} key={3}>
                                원더랜드
                            </button>
                        </li>
                        <li className={areaType === "jurassicpark" ? "areabuttoncolor" : ""}>
                            <button onClick={() => areaChangeFn("jurassicpark")} key={4}>
                                쥬라기 공원
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="area-type-wrap">
                {selData.map((v, i) => (
                    <div className="area-type-bx" key={i}>
                        <div className="area-type-img">
                            <img src={v.img} alt="" />
                        </div>
                        <div className="area-type-cont">
                            <h3>{v.areatype}</h3>
                            <h2>{v.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
