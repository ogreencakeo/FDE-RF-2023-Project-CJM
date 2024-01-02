import { useRef, useState } from "react";

// 기본 데이터 제이슨 불러오기
import baseData from "../data/유니버설-문의2.json";

// 제이쿼리
import $ from "jquery";

import "../css/board.css";

// 초기데이터 셋업하기
let orgData;
if (localStorage.getItem("universal-bdata")) orgData = JSON.parse(localStorage.getItem("universal-bdata"));
else orgData = baseData;

export function CustomerCenter2() {
    const [bdMode, setBdMode] = useState("L");

    const [pgNum, setPgNum] = useState(1);
    const pgBlock = 8;
    const totNum = baseData.length;

    // 리스트
    const bindList = () => {
        const tempData = [];

        let initNum = (pgNum - 1) * pgBlock;
        let limintNum = pgNum * pgBlock;

        for (let i = initNum; i < limintNum; i++) {
            if (i >= totNum) break;
            tempData.push(orgData[i]);
        }

        if (orgData.length === 0) {
            <div>게시판 내용이 없습니다.</div>;
        }

        return tempData.map((v, i) => (
            <div className="board-cont-wrap">
                <ul>
                    <li>{i + 1 + initNum}</li>
                    <li>
                        <a href="#" data-idx={v.idx} onClick={chgMode}>{v.tit}</a>
                        {/* <a href="#" data-idx={v.idx}>
                            {v.tit}
                        </a> */}
                    </li>
                    <li>{v.writer}</li>
                    <li>{v.date}</li>
                    <li></li>
                </ul>
            </div>
        ));
    };

    // 선택데이터 셋팅을 위한 참조변수
    const cData = useRef(null);

    // chgMode : 게시판 옵션 모드를 변경
    const chgMode = (e) => {
        e.preventDefault();

        let btxt = $(e.target).text();
        let modeTxt;

        switch(btxt){
            case "목록":
                modeTxt = 'L';
                break;
            case "리스트 보기":
                modeTxt = 'L';
                break;
            case "글 쓰기" :
                modeTxt = 'C';
                break;
            case "수정하기" :
                modeTxt = 'U';
                break;
            case "입력" : 
                modeTxt = 'S';
                break;
            case "삭제하기" :
                modeTxt = 'D';
            default :
            modeTxt = 'R'
        }

        // R모드 (읽기모드)
        if(modeTxt === 'R'){
            let cidx = $(e.target).attr('data-idx'); // a링크의 data-idx값 읽어오기
            cData.current = orgData.find((v)=> {
                if(Number(v.idx) === Number(cidx)) return true;
            })
            setBdMode('R');
        // L모드 (목록으로 이동)
        }else if(modeTxt === 'L'){
            setBdMode('L');
        }
        // C모드 (글쓰기)
        else if(modeTxt === 'C'){
            // setBdMode('C');
        }
        // U모드 (수정모드)
        else if(modeTxt === 'U' ){
            setBdMode('U');
        }
        // U모드 (수정모드) 입력버튼 클릭시
        else if(modeTxt ==='S' && bdMode==='U'){
            const subEle = $('.updateone .subject');
            const contEle = $('.updateone .content');

            if(subEle.val().trim()==='' || contEle.val().trim()===''){
                window.alert('제목과 내용은 필수입력입니다!');
            }else{
                let orgTtemp = orgData; // 원본 데이터 변수할당
                orgTtemp.some((v) => {
                    if(Number(cData.current.idx) === Number(v.idx)){
                        v.tit = subEle.val().trim();
                        v.cont = contEle.val().trim();
                        return true;
                    }
                });

                localStorage.getItem('universal-bdata', JSON.stringify(orgTtemp));
                setBdMode('L');
            }
        }
        // 삭제하기 D 모드

    };

    return (
        <>
            {bdMode === "L" && (
                <div className="board-wrap">
                    <h1 className="tit">QUESTION</h1>
                    <div className="selbx">
                        <select className="cta" id="cta">
                            <option value="tit">Title</option>
                            <option value="cont">Contents</option>
                            <option value="writer">Writer</option>
                        </select>
                        <select className="sel" id="sel">
                            <option value="0">Descending</option>
                            <option value="1">Ascending</option>
                        </select>
                        <input type="text" id="stxt" maxLength="50" />
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
                </div>
            )}
            {/* 글쓰기 C모드 */}
            {bdMode === "C" && (
                <div className="dtblview writeone">
                    <h1>OPINION : Write</h1>
                    <div>
                        <ul>
                            <li>Name</li>
                            <li>
                                <input type="text" className="name" size="20" readOnly value={cData.current.writer} />
                            </li>
                        </ul>
                        <ul>
                            <li>Email</li>
                            <li>
                                <input type="text" className="email" size="40" readOnly value={cData.current.eml} />
                            </li>
                        </ul>
                        <ul>
                            <li>Content</li>
                            <li>
                                <textarea className="content" cols="60" rows="10"></textarea>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            {/* 읽기 R모드 */}
            {bdMode === "R" && (
                <div className="btblview readone">
                    <h1>OPINION : Read </h1>
                    <div>
                        <ul>
                            <li>Name</li>
                            <li>
                                <input type="text" className="name" size="20" readOnly value={cData.current.writer} />
                            </li>
                        </ul>
                        <ul>
                            <li>Title</li>
                            <li>
                                <input type="text" className="subject" size="60" readOnly value={cData.current.tit} />
                            </li>
                        </ul>
                        <ul>
                            <li>Content</li>
                            <li>
                                <textarea className="content" cols="60" rows="10" readOnly value={cData.current.cont}></textarea>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            {bdMode === "U" && (
                <div className="btblview updateone">
                    <h1>OPINION : Modify</h1>
                    <div>
                        <ul>
                            <li>Name</li>
                            <li>
                                <input type="text" className="name" size="20" readOnly value={cData.current.writer} />
                            </li>
                        </ul>
                        <ul>
                            <li>Title</li>
                            <li>
                                <input type="text" className="subject" size="60" defaultValue={cData.current.tit} />
                            </li>
                        </ul>
                        <ul>
                            <li>Content</li>
                            <li>
                                <textarea className="content" cols="60" rows="10" defaultValue={cData.current.cont}></textarea>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* 버튼 그룹박스 */}
            <div className="dbtl btngrp">
                <div>
                    <ul>
                        {
                            // L모드 (리스트)
                            bdMode === 'L' && (
                                <>
                                    <button onClick={chgMode}><a href="#">목록</a></button>
                                    <button onClick={chgMode}><a href="#">글쓰기</a></button>
                                </>
                            )
                        }
                        {
                            // C모드 (글쓰기)
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
                        {
                            // R모드 (읽기모드)
                            bdMode === 'R' && (
                                <>
                                    <button onClick={chgMode}>
                                        <a href="#">목록
                                        </a>
                                    </button>
                                    <button onClick={chgMode}>
                                        <a href="#">수정하기
                                        </a>
                                    </button>
                                </>
                            )
                        }
                        {
                            // 수정모드(U)
                            bdMode === 'U' && (
                                <>
                                    <button onClick={chgMode}>
                                        <a href="#">입력</a>
                                    </button>
                                    <button onClick={chgMode}>
                                        <a href="#">글 삭제하기</a>
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
    );
}
