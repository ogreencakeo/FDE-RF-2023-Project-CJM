import { Fragment, useRef, useState } from "react"
import baseData from "../data/유니버설-문의2.json";
import "../css/board.css";
import $ from "jquery";

baseData.sort((a,b) => {
    return Number(a.idx)===Number(b.idx)? 0 : Number(a.idx) > Number(b.idx)? -1 : 1;
});

let orgData;

if(localStorage.getItem('pratice-bdata')) orgData = localStorage.getItem('pratice-bdata');
else orgData = baseData;

export function Board(){
    if(!localStorage.getItem('pratice-bdata')){
        localStorage.setItem('pratice-bdata', JSON.stringify(orgData));
    }

    const [bdMode, setBdMode] = useState('L');

    const pgBlock = 7;
    const pgPgBlock = 4;
    const totNum = orgData.length;

    const [pgNum, setPgNum] = useState(1);
    const pgPgNum = useRef(1);

    const bindList = () => {
        const tempData = [];

        let initNum = (pgNum - 1) * pgBlock;
        let limitNum = pgNum * pgBlock;

        for(let i=initNum; i<limitNum; i++){
            if(i>=totNum) break;
            tempData.push(orgData[i]);
        }

        if(orgData.length === 0){
            return(
                <tr>
                    <td>데이터가 없습니다.</td>
                </tr>
            )
        }

        return tempData.map((v, i) => (
            <div className="board-cont-wrap">
                <ul>
                    <li>{i + 1 + initNum}</li>
                    <li>
                        <a href="#" data-idx={v.idx}>
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
        const blockCnt = Math.floor(totNum / pgBlock);
        const blockPad = totNum % pgBlock;
        const limit = blockCnt + (blockPad===0? 0 : 1);

        const pgBlockCnt = Math.floor(limit / pgPgBlock);
        const pgBlockPad = limit % pgPgBlock;
        const pgLimit = pgBlockCnt + (pgBlockPad===0? 0 : 1);

        let pgCode = [];

        let initNum = (pgPgNum.current - 1) * pgPgBlock;
        let limitNum = pgPgNum.current * pgPgBlock;
        
        for(let i=initNum; i<limitNum; i++){
            if(i>=limit) break;

            pgCode[i] = (
                <Fragment>
                    {
                        pgNum - 1 === i? (
                            <b>{i+1}</b>
                        ) : (
                            <a href="#" onClick={chgList}
                            style={{
                                margin : '0 10px'
                            }}>
                                {i+1}
                            </a>
                        )
                    }
                </Fragment>
            );
        }
        {
            pgCode.unshift(
                pgPgNum.current === 1 ? "" : (
                    <Fragment key={-1}>
                        <a href="#"
                            style={{marginLeft : '5px'}}
                            onClick={(e) => {
                                e.preventDefault();
                                goPaging(1, false);
                            }}>
                            ≪
                        </a>
                        <a href="#"
                        style={{marginLeft : '5px'}}
                        onClick={(e) => {
                            e.preventDefault();
                            goPaging(-1, true);
                        }}>
                            ◀
                        </a>
                    </Fragment>
                )
            )
        }
        {
            pgCode.push(
                pgPgNum.current === pgLimit? "" : (
                    <Fragment key={-2}>
                        <a href="#"
                        style={{marginRight : '5px'}}
                        onClick={(e) => {
                            e.preventDefault();
                            goPaging(1, true)
                        }}>
                            ▶
                        </a>
                        <a href="#"
                        style={{marginRight : '5px'}}
                        onClick={(e) => {
                            e.preventDefault();
                            goPaging(pgLimit, false);
                        }}>
                            ≫
                        </a>
                    </Fragment>
                )
            )
        }
        return pgCode;
    };

    const goPaging = (dir, opt) => {
        let newPgPgNum;
        if(opt)newPgPgNum = dir + pgPgNum.current;
        else newPgPgNum = dir;

        let newPgNum = (newPgPgNum - 1) * pgPgBlock + 1;

        pgPgNum.current = newPgPgNum;
        setPgNum(newPgNum);
    };

    const chgList = (e) => {
        e.preventDefault();
        let currNum = e.target.innerText;
        setPgNum(currNum);
    };

    
    return(
        <>
            {
                bdMode === 'L' && (
                    <div className="board-wrap">
                        <h1 className="tit">Question</h1>
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
                        <div className="center-paging-link">{pagingLink()}</div>
                    </div>
                )
            }
            
        </>
    )
}