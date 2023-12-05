import { useEffect, useState } from "react";
import "../css/customerCenter.css";

import { announcement } from "../data/유니버설-문의";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export function CustomerCenter() {

    const [customBtn, setCustomBtn] = useState('notice_announcement');
    const [selData, setSelData] = useState(announcement[customBtn])

    const [customerColor, setCustomerColor] = useState("notice_announcement");
    const customerCenterFn = (data) => {
        setCustomBtn(data);
        setCustomerColor(data);
    };

    useEffect(()=>{
        const selectedData = announcement[customBtn];
        setSelData(selectedData);
    }, [customBtn]);

    return (
        <>
            <div className="customerCenter-wrap">
                <div className="customerCenter-left-wrap">
                    <h1>고객센터</h1>
                    {/* 옵션 버튼 박스 */}
                    <div className="customer-option-bx">
                        <button
                            className={customerColor === "notice_announcement" ? "customerColorOn" : ""}
                            onClick={() => customerCenterFn("notice_announcement")} key={0}
                        >
                            <span>공지사항</span>
                            {/* <span><FontAwesomeIcon icon={faCircleRight} /></span> */}
                            <span>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </span>
                        </button>
                        <button
                            className={customerColor === "frequently_asked" ? "customerColorOn" : ""}
                            onClick={() => customerCenterFn("frequently_asked")} key={1}
                        >
                            <span>자주하는 질문</span>
                            <span>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </span>
                        </button>
                        <button
                            className={customerColor === "one-to-one-inquiry" ? "customerColorOn" : ""}
                            onClick={() => customerCenterFn("one-to-one-inquiry")} key={2}
                        >
                            <span>1대1 문의</span>
                            <span>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </span>
                        </button>
                    </div>
                </div>
                {/* 옵션 선택시 결과 박스 */}
                <div className="customerCenter-right-wrap">
                    <h2>공지사항</h2>
                    <div className="customerCenter-bx">
                        <div>
                            <div>번호</div>
                            <div>제목</div>
                            <div>작성자</div>
                            <div>작성일</div>
                        </div>
                        {selData.map((v, i) => (
                            <ul className="customerCenter-smenu" key={i}>
                                <li>{v.idx}</li>
                                <li>{v.tit}</li>
                                <li>{v.writer}</li>
                                <li>{v.date}</li>
                                <div className="Cust-smenu-cont"></div>
                            </ul>
                        ))}
                    </div>
                    {/* <table>
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
                    </table> */}
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
    );
}
