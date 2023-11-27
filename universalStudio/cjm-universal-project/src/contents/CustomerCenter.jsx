import { useState } from 'react';
import '../css/customerCenter.css';
export function CustomerCenter(){
    const [clickColor, setClickColor] = useState(0);
    const clickNoticeFn = () => {
        setClickColor();
    }
    return(
        <>
            <div className="customerCenter-wrap">
                <div className="customerCenter-left-wrap">
                    <h1>고객센터</h1>
                    {/* 옵션 버튼 박스 */}
                    <div className="customer-option-bx">
                        <button className="customner-notice" onClick={clickNoticeFn}>공지사항</button>
                        <button className="frequently-asked-questions">자주하는 질문</button>
                        <button className="one-to-one-inquiry">1대1 문의</button>
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
                        <tr>
                            <td>1번호입니다.</td>
                            <td>제목입니다.</td>
                            <td>작성자입니다.</td>
                            <td>작성일입니다.</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}