// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AttractionCont } from "./AttractionCont";

// 제이쿼리
import $ from "jquery";

// css
import "../../css/attraction.css";
import { useState } from "react";
import { useRef } from "react";

// 데이터
import { attractionData } from "../../data/attraction/attractionData";

export function Seaching(props) {
    const [kword, setKword] = useState(null);
    const [cntNum, setCntNum] = useState(0);
    // - 정렬상태값 : 0 - 오름차순, 1 - 내림차순, 2 - 정렬전
    const [selData, setSelData] = useState([[], 2]);
    const [cnt, setCnt] = useState(0);

    const chgKword = (txt) => setKword(txt);

    // 1-상단검색허용 , 0-상단검색불허용
    const allow = useRef(1);
    const firstSts = useRef(0);

    const initFn = () => {
        chgKword(props.kword);
        $("#schin").val(props.kword);
        // 검색 리스트 만들기
        schList();
    };

    if (allow.current) initFn();

    // 검색리스트 만들기 함수
    function schList(e) {
        let keyword = $("#schin").val();
        const newList = attractionData.filter((v) => {
            if (v.name.indexOf(keyword) != -1) return true;
        });

        setSelData([newList, 2]);
        setCnt(newList.length);
    }

    // 엔터키 반응 함수
    const enterKey = (e) => {
        if (e.key == "Enter") {
            allow.current = 0;
            setTimeout(() => (allow.current = 1), 0);
            let txt = $(e.target).val();
            chgKword(txt);

            schList();
        }
    };

    // 체크박스 검색 함수
    const chkSearch = (e) => {
        const cid = e.target.id;
        const chked = e.target.checked;

        let temp = selData[0];
        let lastList = [];

        let num = $('chkhdn:checked').length;

        if(chked){
            const nowList = attractionData.filter((v) => {
                if(v.type == cid) return true;
            });

            if(num > 1){ // 체크개수가 1초과일때
                lastList = [...temp, ...nowList];
            }else{ // 하나일때
                lastList = nowList;
            }
        }else{
            
        }
    };

    // 리스트 정렬 함수
    const sortList = (e) => {
        const optVal = e.target.value;

        let temp = selData[0];

        temp.sort((a, b) => {
            if (optVal == 1) {
                // 내림차순
                return a.name == b.name ? 0 : a.name > b.name ? -1 : 1;
            } else if (optVal == 0) {
                // 오름차순
                return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
            }
        });

        setSelData([temp, Number(optVal)]);
    };

    return (
        <>
            <div className="attraction-wrap">
                {/* 어트랙션 옵션 박스 */}
                <div className="attraction-option-wrap">
                    {/* 검색박스 */}
                    <div className="searching">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="schbtn"
                            title="Open Serach"
                            onClick={schList}
                            // ref={xx}
                        />
                        <input
                            id="schin"
                            type="text"
                            placeholder="Filter by Kwyword"
                            onKeyUp={enterKey}
                            defaultValue={kword}
                        />
                    </div>
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
                                <input type="checkbox" id="supermario" className="chkhdn" onChange={chkSearch} />
                                <label htmlFor="supermario" className="arealb"></label>
                            </li>
                            <li>
                                위저딩 월드 오브 해리 포터™
                                <input type="checkbox" id="harry-potter" className="chkhdn" onChange={chkSearch} />
                                <label htmlFor="harry-potter" className="arealb"></label>
                            </li>
                            <li>
                                미니언 파크
                                <input type="checkbox" id="minion-park" className="chkhdn" onChange={chkSearch} />
                                <label htmlFor="minion-park" className="arealb"></label>
                            </li>
                            <li>
                                유니버설 원더랜드
                                <input type="checkbox" id="wonderland" className="chkhdn" onChange={chkSearch} />
                                <label htmlFor="wonderland" className="arealb"></label>
                            </li>
                            <li>
                                할리우드
                                <input type="checkbox" id="hollywood" className="chkhdn" onChange={chkSearch} />
                                <label htmlFor="hollywood" className="arealb"></label>
                            </li>
                            <li>
                                뉴옥
                                <input type="checkbox" id="newyork" className="chkhdn" onChange={chkSearch} />
                                <label htmlFor="newyork" className="arealb"></label>
                            </li>
                            <li>
                                샌프란시스코
                                <input type="checkbox" id="sanfrancisco" className="chkhdn" onChange={chkSearch} />
                                <label htmlFor="sanfrancisco" className="arealb"></label>
                            </li>
                            <li>
                                쥬라기 공원
                                <input type="checkbox" id="jurassicpark" className="chkhdn" onChange={chkSearch} />
                                <label htmlFor="jurassicpark" className="arealb"></label>
                            </li>
                            <li>
                                애머티 빌리지
                                <input type="checkbox" id="amityvillage" className="chkhdn" onChange={chkSearch} />
                                <label htmlFor="amityvillage" className="arealb"></label>
                            </li>
                            <li>
                                워터 월드
                                <input type="checkbox" id="waterworld" className="chkhdn" onChange={chkSearch} />
                                <label htmlFor="waterworld" className="arealb"></label>
                            </li>
                        </ol>
                    </div>
                </div>
                {/* 결과 리스트 박스 */}
                <div className="attraction-cont-listbx">
                    <h2 className="listbx">어트랙션 검색결과가 ({cnt})개 나왔습니다.</h2>
                    <div className="sortbx">
                        <select name="sel" id="sel" className="sel" onChange={sortList}>
                            <option value="0">A-Z</option>
                            <option value="1">Z-A</option>
                        </select>
                    </div>
                    <AttractionCont dt={selData[0]} total={cnt} />
                </div>
            </div>
        </>
    );
}
