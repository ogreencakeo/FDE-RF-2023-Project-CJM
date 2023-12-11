import { memo } from "react";
import '../../css/cartList.css';

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faPerson, faChild, faPersonCane } from "@fortawesome/free-solid-svg-icons";

export const CartList = memo (({selData}) => {
    

    console.log(selData);

    //정규식함수(숫자 세자리마다 콤마해주는 기능)
    function addComma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <>
            <section id="cartlist">
                <a href="#" className="cbtn cbtn2">
                    <span>닫기버튼</span>
                </a>
                <table>
                    <caption>
                        <h1> 카트 리스트</h1>
                    </caption>
                    <tbody>
                        <tr>
                            <th>상품</th>
                            <th>번호</th>
                            <th>사진</th>
                            <th>수량</th>
                            <th>단가</th>
                            <th>합계</th>
                            <th>삭제</th>
                        </tr>

                        {selData.map((v, i) => (
                            <tr key={i}>
                                <td>{v.항목}</td>
                                <td>{v.번호}</td>
                                <td>
                                    {v.이름 === '성인(만12 - 64세)' && <FontAwesomeIcon icon={faPerson} className="person-icon" />}
                                    {v.이름 === '어린이(만4 - 11세)' && <FontAwesomeIcon icon={faChild} className="child-icon" />}
                                    {v.이름 === '시니어(만 65세 이상)' && <FontAwesomeIcon icon={faPersonCane} className="senior-icon" />}
                                </td>
                                <td>{v.수량}</td>
                                <td>{v.가격}</td>
                                <td>{v.가격 * v.수량}</td>
                                {/* <td>{addComma(v.ginfo[3])}원</td> */}

                                <td>
                                    <button className="cfn" data-idx={v.idx}>
                                        ×
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </section>
            <div id="mycart">
                <span><FontAwesomeIcon icon={faBasketShopping} /></span>
            </div>
        </>
    );
});
