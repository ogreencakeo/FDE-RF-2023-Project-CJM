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
                            <label htmlFor="supermario" className="area"></label>
                        </li>
                        <li>
                            위저딩 월드 오브 해리 포터™
                            <input type="checkbox" id="harry-potter" className="area" />
                            <label htmlFor="harry-potter" className="area"></label>
                        </li>
                        <li>
                            미니언 파크
                            <input type="checkbox" id="minion-park" className="area" />
                            <label htmlFor="minion-park" className="area"></label>
                        </li>
                        <li>
                            유니버설 원더랜드
                            <input type="checkbox" id="wonderland" className="area" />
                            <label htmlFor="wonderland" className="area"></label>
                        </li>
                    </ol>
                    {/* 옵션2 -  */}
                    <ol>
                        <li>
                            슈퍼 닌텐도 월드™
                            <input
                                type="checkbox" id="supermario"className="area"
                                // onChange={chkSearch}
                                />
                            <label htmlFor="supermario" className="area"></label>
                        </li>
                        <li>
                            위저딩 월드 오브 해리 포터™
                            <input type="checkbox" id="harry-potter" className="area" />
                            <label htmlFor="harry-potter" className="area"></label>
                        </li>
                        <li>
                            미니언 파크
                            <input type="checkbox" id="minion-park" className="area" />
                            <label htmlFor="minion-park" className="area"></label>
                        </li>
                        <li>
                            유니버설 원더랜드
                            <input type="checkbox" id="wonderland" className="area" />
                            <label htmlFor="wonderland" className="area"></label>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
