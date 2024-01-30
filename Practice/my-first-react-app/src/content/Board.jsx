import { useState } from "react"

export function Borad(){

    const [bdMode, setBdMode] = useState('L');

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
                        <div></div>
                        <div className="center-paing-link"></div>
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
        </>
    )
}