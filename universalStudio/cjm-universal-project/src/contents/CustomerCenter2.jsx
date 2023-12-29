import { useState } from "react";
import { announcement } from "../data/유니버설-문의2";

export function CustomerCenter2(){
    
    const [bdMode, setBdMode] = useState('L');

    const [pgNum, setPgNum] = useState(1);
    const pgBlock = 8;
    const totNum = announcement.length;

    const bindList = () => {
        const tempData = [];

        let initNum = (pgNum - 1) * pgBlock;
        let limintNum = pgNum * pgBlock;

        for(let i=initNum; i<limintNum; i++){
            if(limintNum>=totNum) break;
            tempData.push()
        }
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
                        <div>{pagingLink()}</div>
                    </>
                )
            }
        </>
    );
}