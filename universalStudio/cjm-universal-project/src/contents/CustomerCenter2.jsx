import { useState } from "react";

// 기본 데이터 제이슨 불러오기
import baseData from "../data/유니버설-문의2.json";

// 제이쿼리
import $ from 'jquery';


// 초기데이터 셋업하기
let orgData;
if(localStorage.getItem('universal-bdata')) orgData = JSON.parse(localStorage.getItem('universal-bdata'));
else orgData = baseData; 

export function CustomerCenter2(){
    
    const [bdMode, setBdMode] = useState('L');

    const [pgNum, setPgNum] = useState(1);
    const pgBlock = 8;
    const totNum = baseData.length;

    const bindList = () => {
        const tempData = [];

        let initNum = (pgNum - 1) * pgBlock;
        let limintNum = pgNum * pgBlock;

        for(let i=initNum; i<limintNum; i++){
            if(i>=totNum) break;
            tempData.push(org)
        }

        if(orgData.length === 0){
            <div>
                게시판 내용이 없습니다.
            </div>
        }

        return tempData.map((v, i) => (
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        ))
    };

    return(
        <>
            {
                bdMode === 'L' && (
                    <>
                        <h1 className='tit'>QUESTION</h1>
                        <div className="selbx">
                            <select className='cta' id="cta">
                                <option value="tit">Title</option>
                                <option value="cont">Contents</option>
                                <option value="umn">Writer</option>
                            </select>
                            <select className="sel" id="sel">
                                <option value="0">Descending</option>
                                <option value="1">Ascending</option>
                            </select>
                            <input type="text" id="stxt" maxLength='50' />
                            <button className="sbtn">Search</button>
                        </div>
                        {/* 리스트 테이블 박스 */}
                        <div className="dtbl" id="board">
                            <ul>
                                <li>Number</li>
                                <li>Title</li>
                                <li>Writer</li>
                                <li>Date</li>
                                <li>Hits</li>
                            </ul>
                        </div>
                        {/* 중앙 레코드 표시부분 */}
                        <div>{bindList()}</div>
                        {/* 하단 : 페이징 */}
                        {/* <div>{pagingLink()}</div> */}
                    </>
                )
            }
        </>
    );
}