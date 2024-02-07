import { useState } from "react"
import baseData from "../data/유니버설-문의2.json";
// 제이쿼리
import $ from "jquery";
import "../css/board.css";

baseData.sort((a, b) => {
    return Number(a.idx) === Number(b.idx) ? 0 : Number(a.idx) > Number(b.idx) ? -1 : 1;
});

let orgData;
if(!localStorage.getItem('pratice-bdata')) orgData = JSON.parse(localStorage.getItem('pratice-bdata'));
else orgData = baseData;

export function Board(){
    const [bdMode, setBdMode] = useState('L');

    const pgBlock = 7;
    const pgPgBlock = 4;
    const totNum = orgData.length;
    const [pgNum, setPgNum] = orgData.length;

    const bindList = () => {
 
    };

    return(
        <>
            {
                bdMode === 'L' && (
                    <div className="board-wrap">
                        <h1 className="tit">Qusetion</h1>
                        <div className="selbx">
                            <select id="cta" className="cta">
                                <option value="tit">제목</option>
                                <option value="cont">내용</option>
                                <option value="umn">글쓴이</option>
                            </select>
                            <select id="sel" className="sel"></select>
                        </div>
                        {/* 리스트 테이블 박스 */}
                        <div className="btbl" id="board">
                            <ul>
                                <li>번호</li>
                                <li>제목</li>
                                <li>닉네임</li>
                                <li>날짜</li>
                                <li>조회수</li>
                            </ul>
                        </div>
                        <div>
                            {bindList()}
                        </div>
                        <div className="center-paging-link">

                        </div>
                    </div>
                )
            }
        </>
    )
}