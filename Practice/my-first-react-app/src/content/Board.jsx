import { useState } from "react"

import baseData from '../data/유니버설-문의2.json';
import { useRef } from "react";
import { Fragment } from "react";

baseData.sort((a, b) => {
    return Number(a.idx) === Number(b.idx) ? 0 : Number(a.idx) > Number(b.idx) ? -1 : 1;
});

let orgData;
if(localStorage.getItem('pratice-bdata')) orgData = JSON.parse(localStorage.getItem('pratice-bdata'));
else orgData = baseData;

export function Board(){

    const [bdMode, setBdMode] = useState('L');

    const pgBlock = 7;
    const pgPgBlock = 4;
    const totNum = orgData.length;

    const [pgNum, setPgNum] = useState(1);
    const pgPgNum = useRef(1);

    const [force, setForce] = useRef(false);

    const bindList = () => {
        const tempData = [];
        let initNum = (pgNum - 1) * pgBlock;
        let limitNum = pgNum * pgPgBlock;
        
        for(let i=initNum; i< limitNum; i++){
            if( i>= totNum ) break;
            tempData.push(orgData[i]);
        }
        if(orgData.length === 0){
            return(
                <tr>
                    <td colSpan={5}>There is no data.</td>
                </tr>
            );

        }
        return tempData.map((v, i) => (
            <div className="board-cont-wrap">
                <ul>
                    <li>{i+1+initNum}</li>
                    <li>
                        <a href="#" data-idx={v.idx}>
                            {v.tit}
                        </a>
                    </li>
                    <li>{v.unm}</li>
                    <li>{v.date}</li>
                    <li>{v.cont}</li>
                </ul>
            </div>
        ));
    }

    const pagingLink = () => {
        const blockCnt = Math.floor(totNum / pgBlock);
        const blockPad = totNum % pgBlock;
        const limit = blockCnt + (blockPad === 0? 0 : 1);
        
        const pgBlockCnt = Math.floor(limit / pgPgBlock);
        const pgBlockPad = limit / pgPgBlock;
        const pgLimit = pgBlockCnt + (pgBlockPad === 0? 0 : 1);

        let pgCode = [];
        
        let initNum = (pgPgNum.current - 1) * pgPgBlock;
        let limitNum = pgPgNum.current * pgPgBlock;

        for(let i=initNum; i<limitNum; i++){
            if(i>=limit) break;
            {
                pgCode[i] = (
                    <Fragment key={i}>
                        {
                            pgNum - 1 === i? (
                                <b>{i+1}</b>) :
                                (<a href="#">
                                    {i+1}
                                </a>
                            )
                        }
                    </Fragment>
                )
            }
        }
        
    };

    return(
        <>
            {
                bdMode === 'L' && (
                    <div className="board-wrap">
                        <h1 className="tit">Question</h1>
                        <div className="selbx">
                            <select id="cta" className="cta">
                                <option value="tit">제목</option>
                                <option value="cont">내용</option>
                                <option value="umn">글쓴이</option>
                            </select>
                            <select className="sel" 
                            id="sel">
                                <option value="0">Z-A</option>
                                <option value="1">A-Z</option>
                            </select>
                            <input type="text" 
                            id="stxt"
                            maxLength='50'/>
                            <button className="btn">검색</button>
                        </div>
                        <div className="dtbl" id="board">
                            <ul>
                                <li>번호</li>
                                <li>제목</li>
                                <li>닉네임</li>
                                <li>날짜</li>
                                <li>조회수</li>
                            </ul>
                        </div>
                        <div>{bindList()}</div>
                        <div className="center-paing-link">{pagingLink()}</div>
                    </div>
                )
            }
            {
                bdMode === 'C' && (
                    <div className="dtblview writeone">
                        <h1>글쓰기</h1>
                        <div>
                            <ul>
                                <li>닉네임</li>
                                <li>
                                    <input type="text" className="name" size='20' readOnly />
                                </li>
                            </ul>
                            <ul>
                                <li>이메일</li>
                                <li>
                                    <input type="text" className="email" size='40' readOnly />
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
            {
                <div className="dbtl btngrp">
                    <div>
                        <ul>
                            {/* L모드 리스트 */}
                            {
                                bdMode === 'L' && (
                                    <button>
                                        <a href="#">글쓰기</a>
                                    </button>
                                )
                            }
                            {
                                // 글쓰기
                                bdMode === 'C' && (
                                    <>
                                        <button>
                                            <a href="#">입력</a>
                                        </button>
                                        <button>
                                            <a href="#">목록</a>
                                        </button>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}