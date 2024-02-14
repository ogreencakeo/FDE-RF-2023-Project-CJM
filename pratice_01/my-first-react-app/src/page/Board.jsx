import { Fragment, useEffect, useRef, useState } from "react"
import '../css/board.css';

import baseData from '../data/유니버설-문의2.json';

baseData.sort((a, b) => {
    return Number(a.idx) === Number(b.idx) ? 0 : Number(a.idx) > Number(b.idx) ? -1 : 1;
});

let orgData;
if(localStorage.getItem('pratice-bdata'))orgData = JSON.parse(localStorage.getItem('pratice-bdata'));
else orgData = baseData;

export function Board(){

    if(!localStorage.getItem('pratice-bdata')){
        localStorage.setItem('pratice-bdata', JSON.stringify(orgData));
    }
    
    const [bdMode, setBdMode] = useState('L');

    const [pgNum, setPgNum] = useState(1);
    const [pgPgNum, setPgPgNum] = useState(1);

    const pgBlock = 7;
    const pgPgBlock = 4;
    const totNum = orgData.length;

    // 최초 랜더링시 상태관리변수
    const firstSts = useRef(false);

     // 기능 : 데이터 초기화하기(전체데이터 업데이트)
    const rawData = () => {
        orgData = JSON.parse(localStorage.getItem("universal-bdata"), [-1, 1]);
    };


    function sortData(data, arr){
        return data.sort((a, b) => {
            return Number(a.idx) === Number(b.idx) ? 0 : Number(a.idx) > Number(b.idx) ? arr[0] : arr[1];
        })
    }

    if(firstSts.current){
        // 내림차순 정렬 적용하기
        sortData(orgData, [-1, 1]);
    }

    const bindList = () => {
        firstSts.current = false;

        let tempData = [];
        let initNum = (pgNum - 1) * pgBlock;
        let limitNum = pgNum * pgBlock;

        for(let i=initNum; i<limitNum; i++){
            if(i >= totNum) break;
            tempData.push(orgData[i]);
        }

        if(orgData.length === 0){
            return(
                <tr>
                    <td colSpan='6'>데이터가 없습니다.</td>
                </tr>
            )
        }

        return tempData.map((v, i) => (
            <div className="board-cont-wrap">
                <ul>
                    <li>{i + 1 + initNum}</li>
                    <li>
                        <a href="#" data-idx={v.idx} onClick={chgMode}>
                            {v.tit}
                        </a>
                    </li>
                    <li>{v.unm}</li>
                    <li>{v.date}</li>
                    <li>{v.cnt}</li>
                </ul>
            </div>
        ));
    };

    const pagingLink = () => {
        let pgCode = [];
        const BlockCnt = Math.floor(totNum / pgBlock);
        const blockPad = totNum % pgBlock;
        const limit = BlockCnt + (blockPad === 0? 0 : 1);

        const pgBlockCnt = Math.floor(limit / pgPgBlock);
        const pgBlockPad = limit % pgPgBlock;
        const pgLimit = pgBlockCnt + (pgBlockPad === 0? 0 : 1);

        let initNum = (pgPgNum - 1) * pgPgBlock;
        let limitNum = pgPgNum * pgPgBlock;

        for(let i=initNum; i<limitNum; i++){
            if(i >= limit) break;
            pgCode[i] = (
                <Fragment key={i}>
                    {
                        pgNum - 1 === i ? (
                            <b style={{margin : '0 5px'}}>
                                {i + 1}
                            </b>
                        ) : (
                            <a style={{margin : '0 5px'}} href="#" 
                            onClick={chgList}>
                                {i + 1}
                            </a>
                        )
                    }
                </Fragment>
            )
        }
        {
            pgCode.unshift(
                <Fragment key={-1}>
                    {
                        pgPgNum === 1? (
                            ""
                        ) : (
                            <Fragment>
                                <a style={{marginLeft : '0 5px'}} href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    goPaging(1, false);
                                }}>
                                    ≪
                                </a>
                                <a style={{marginLeft : '0 5px'}} href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    goPaging(-1, true);
                                }}>
                                    ◀
                                </a>
                            </Fragment>
                        )
                    }
                </Fragment>
            )
        }
        {
            pgCode.push(
                <Fragment key={-2}>
                    {
                        pgPgNum === pgLimit? (
                            ""
                        ) : (
                            <Fragment>
                                <a href="#" style={{marginRight : '0 5px'}}
                                onClick={(e) => {
                                    e.preventDefault();
                                    goPaging(1, true);
                                }}>
                                    ▶
                                </a>
                                <a href="#" style={{marginRight : '0 5px'}}
                                onClick={(e) => {
                                    e.preventDefault();
                                    goPaging(pgLimit, false);
                                }}>
                                    ≫
                                </a>
                            </Fragment>
                        )
                    }
                </Fragment>
            )
        }

        return pgCode;

    };

    const goPaging = (dir, opt) => {
        let newPgPgNum;
        if(opt) newPgPgNum  = dir + pgPgNum;
        else newPgPgNum = dir;

        let newPgNum = ( newPgPgNum - 1) * pgPgBlock + 1;

        setPgNum(newPgNum);
        setPgPgNum(newPgPgNum);
    };

    const chgList = (e) => {
        e.preventDefault();
        let currNum = e.target.innerText;
        setPgNum(currNum);
    };

    const cData = useRef(null);

    const chgMode = (e) => {
        e.preventDefault();
        let btxt = e.target.innerText;
        let modeTxt;

        switch(btxt){
            case "목록" : 
                modeTxt = 'L';
                break;
            case "글쓰기" : 
                modeTxt = 'C';
                break;
            case "입력" :
                modeTxt = 'S';
                break;
            default :
                modeTxt = 'R'
        }

        if(modeTxt === 'L'){
            setBdMode('L');
        }else if(modeTxt === 'R'){
            let cidx = e.target.getAttribute('data-idx');
            cData.current = orgData.find((v) => {
                if(Number(v.idx) === Number(cidx)) return true;
            });
            setBdMode('R');
        }else if(modeTxt === 'C'){
            setBdMode('C');
        }else if(modeTxt === 'S' && bdMode === 'C'){
            const emailEle = document.querySelector('.writeone .email');
            const nameEle = document.querySelector('.writeone .name');
            const subEle = document.querySelector('.writeone .subject');
            const contEle = document.querySelector('.writeone .content');


            if(subEle.value.trim() === '' || contEle.value.trim() === ''){
                window.alert('제목과 내용은 필수입력입니다!');
            }else{
                const addZero = (x) => (x<10 ? '0' + x : x);
                let today = new Date();
                let yy = today.getFullYear();
                let mm = today.getMonth();
                let dd = today.getDate();

                let orgTemp = orgData;

                let arrIdx = orgTemp.map((v) => parseInt(v.idx));
                let maxNum = Math.max(...arrIdx);
                let temp = {
                    idx : maxNum + 1,
                    tit : subEle.value.trim(),
                    cont : contEle.value.trim(),
                    date : `${yy}-${addZero(mm)}-${addZero(dd)}`,
                    unm : nameEle.value.trim(),
                    eml : emailEle.value.trim(),
                    cnt : '0'
                };

                orgTemp.push(temp);
                localStorage.setItem('pratice-bdata', JSON.stringify(orgTemp));
                setBdMode('L');

                firstSts.current = true;
            }
        }
    }

    return(
        <>
            {
                bdMode === 'L' && (
                    <div className="board-wrap">
                        <h1 className="tit">Question</h1>
                        {/* 리스트 테이블 박스 */}
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
                        <div className="center-paging-link">
                            {pagingLink()}
                        </div>
                    </div>
                )
            }
            {/* 읽기 R모드 */}
            {
                bdMode === 'R' && (
                    <div className="dtblview readone">
                        <h1>게시판</h1>
                        <div>
                            <ul>
                                <li>닉네임</li>
                                <li>
                                    <input type="text" className="name"size='20' readOnly value={cData.current.unm}/>
                                </li>
                            </ul>
                            <ul>
                                <li>제목</li>
                                <li>
                                    <input type="text" className="subject" size='60' readOnly value={cData.current.tit} />
                                </li>
                            </ul>
                            <ul>
                                <li>내용</li>
                                <li>
                                    {cData.current.cont}
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
            {/* 글쓰기 C모드 */}
            {
                bdMode === 'C' && (
                    <div className="dtblview writeone">
                        <h1>글쓰기</h1>
                        <div>
                            <ul>
                                <li>닉네임</li>
                                <li>
                                    <input type="text" className="name" size='20' />
                                </li>
                            </ul>
                            <ul>
                                <li>이메일</li>
                                <li>
                                    <input type="text" className="email" size='40' />
                                </li>
                            </ul>
                            <ul>
                                <li>제목</li>
                                <li>
                                    <input type="text" className="subject" size='60'  />
                                </li>
                            </ul>
                            <ul>
                                <li>내용</li>
                                <li>
                                    <textarea className="content" id="" cols="60" rows="10"></textarea>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
            <div className="dbtl btngrp">
                <div>
                    <ul>
                        {
                            bdMode === 'L' && (
                                <button>
                                    <a href="#" onClick={chgMode}>글쓰기</a>
                                </button>
                            )
                        }
                        {
                            bdMode === 'R' && (
                                <>
                                    <button>
                                        <a href="#" onClick={chgMode}>목록</a>
                                    </button>
                                    <button>
                                        <a href="#" onClick={chgMode}>수정</a>
                                    </button>
                                </>
                            )
                        }
                        {
                            bdMode === 'C' && (
                                <>
                                    <button onClick={chgMode}>
                                        <a href="#">입력</a>
                                    </button>
                                    <button onClick={chgMode}>
                                        <a href="#">목록</a>
                                    </button>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}