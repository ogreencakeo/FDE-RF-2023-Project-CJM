import { useState } from 'react';
import '../css/customerCenter.css';

import {announcement} from '../data/유니버설-문의';

export function CustomerCenter(){

    const [notice, setNotice] = useState('.customer-option-bx');
    const CustomerCenterFn = () =>{

    };
    
    return(
        <>
            <div className="customerCenter-wrap">
                <div className="customerCenter-left-wrap">
                    <h1>고객센터</h1>
                    {/* 옵션 버튼 박스 */}
                    <div className="customer-option-bx">
                        <button onClick={CustomerCenterFn}>공지사항</button>
                        <button>자주하는 질문</button>
                        <button>1대1 문의</button>
                    </div>
                </div>
                {/* 옵션 선택시 결과 박스 */}
                <div className="customerCenter-right-wrap">
                    <h2>공지사항</h2>
                    <table>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                        {
                            announcement.map((v, i) => 
                                <tr key={i}>
                                    <td>{v.idx}</td>
                                    <td>{v.tit}</td>
                                    <td>{v.writer}</td>
                                    <td>{v.date}</td>
                                </tr>
                            )
                        }
                    </table>
                    {/* <div className="customerCenter-bx">
                        <div className="customerCenter-cont">
                            <h2>번호</h2>
                            <h2>제목</h2>
                            <h2>작성자</h2>
                            <h2>작성일</h2>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}