// 폰트어썸 불러오기

import { AttractionCont } from "./AttractionCont";

// 제이쿼리
import $ from "jquery";

// css
import "../../css/attraction.css";
import { useEffect, useState } from "react";

// 데이터
import { attractionData } from "../../data/attraction/attractionData";

export function Seaching2(props) {
    const [kword, setKword] = useState(null);
    // - 정렬상태값 : 0 - 오름차순, 1 - 내림차순, 2 - 정렬전
    const [selData, setSelData] = useState([[], 2]);
    const [cnt, setCnt] = useState(0);

    const chgKword = (txt) => setKword(txt);

    const initFn = () => {
        console.log('init 실행');
        if(props.kword!=kword){
            chgKword(props.kword);
            $("#schinGnb").val(props.kword);
            schList();
        }
    };

    initFn();

    // 검색리스트 만들기 함수
    function schList(e) {
        $('#sel').val('0');
        let keyword = $("#schinGnb").val();
        const newList = attractionData.filter((v) => {
            if (v.name.indexOf(keyword) != -1) return true;
        });
        console.log(newList);
        setSelData([newList, 2]);
        setCnt(newList.length);
    }
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

    // 첫 렌더링 시에만 초기화를 수행하도록 변경
    useEffect(() => {
        initFn(); 
    },[]);

    useEffect(()=>{
        
    })

    return (
        <>
            <div className="attraction-wrap">
                {/* 결과 리스트 박스 */}
                <div className="attraction-cont-listbx">
                    <h1 className="tit">검색 결과</h1>
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
