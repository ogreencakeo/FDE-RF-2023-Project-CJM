import { AttractionCont } from "./module/AttractionCont";
import '../css/attraction.css';

export function Attraction() {
    return (
        <div className="attraction-wrap">
            {/* 어트랙션 옵션 박스 */}
            <div className="attraction-option-wrap">
                {/* 체크박스 구역 */}
                <div className="option-check">
                    <h2>
                        에어리어
                        <span className="spbtn">＋</span>
                    </h2>
                    {/* 옵션1 - 에어리어 */}
                    <ol>
                        <li>
                            슈퍼 닌텐도 월드™
                            <input
                                type="checkbox" id="supermario"className="area"
                                // onChange={chkSearch}
                                />
                            <label htmlFor="supermario" className="arealb"></label>
                        </li>
                        <li>
                            위저딩 월드 오브 해리 포터™
                            <input type="checkbox" id="harry-potter" className="area" />
                            <label htmlFor="harry-potter" className="arealb"></label>
                        </li>
                        <li>
                            미니언 파크
                            <input type="checkbox" id="minion-park" className="area" />
                            <label htmlFor="minion-park" className="arealb"></label>
                        </li>
                        <li>
                            유니버설 원더랜드
                            <input type="checkbox" id="wonderland" className="area" />
                            <label htmlFor="wonderland" className="arealb"></label>
                        </li>
                        <li>
                            할리우드
                            <input type="checkbox" id="hollywood" className="area" />
                            <label htmlFor="hollywood" className="arealb"></label>
                        </li>
                        <li>
                            뉴옥
                            <input type="checkbox" id="newyork" className="area" />
                            <label htmlFor="newyork" className="arealb"></label>
                        </li>
                        <li>
                            샌프란시스코
                            <input type="checkbox" id="sanfrancisco" className="area" />
                            <label htmlFor="sanfrancisco" className="arealb"></label>
                        </li>
                        <li>
                            쥬라기 공원
                            <input type="checkbox" id="jurassicpark" className="area" />
                            <label htmlFor="jurassicpark" className="arealb"></label>
                        </li>
                        <li>
                            애머티 빌리지
                            <input type="checkbox" id="amityvillage" className="area" />
                            <label htmlFor="amityvillage" className="arealb"></label>
                        </li>
                        <li>
                            워터 월드
                            <input type="checkbox" id="waterworld" className="area" />
                            <label htmlFor="waterworld" className="arealb"></label>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="attraction-cont-wrap">
                <AttractionCont />
            </div>
        </div>
    );
}
