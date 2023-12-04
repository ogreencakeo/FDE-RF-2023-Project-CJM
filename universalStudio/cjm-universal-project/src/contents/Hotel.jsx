import { Link } from "react-router-dom";
import "../css/hotel.css";
import { hotelData } from "../data/hotel/hotelData.js";

export function Hotel() {
    const selData = hotelData["official_hotel"];

    const makeCode = (v) => {
        if(v.)
    }
    return (
        <>
            <div className="partner-hotel-wrap">
                <div className="partner-hotel-bx">
                    <ul>
                        <li>
                            <button>공식호텔</button>
                        </li>
                        <li>
                            <button>제휴호텔</button>
                        </li>
                        <li>
                            <button>관련호텔</button>
                        </li>
                    </ul>
                </div>
                <div className="partner-hotel-cont">
                    {selData.map((v, i) => (
                        <div className="hotel-bx" key={i}>
                            <div className="hotel-img">
                                <img src={`../images/${v.img}`} alt="호텔이미지" />
                            </div>
                            <div className="hotel-desc">
                                <h1>{v.name}</h1>
                                <h2>{makeCode(v)}</h2>
                                {v.btn != "" && 
                                    <Link  target="_blank" to={v.link}>
                                        <button>{v.btn}</button>
                                    </Link>
                                }
                            </div>
                        </div>
                    ))}
                    {/* <div className="hotel-bx">
                        <div className="hotel-img">
                            <img src="../images/hotel/hotel1/1.jpg" alt="호텔이미지" />
                        </div>
                        <div className="hotel-desc">
                            <h1>오리엔탈 호텔 유니버설 시티</h1>
                            <h2>대자연을 테마로 한 안락하고 편안한 호텔. 몸과 마음 모두 건강해지는 조식이 매력</h2>
                            <button>자세한 내용 보기</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
