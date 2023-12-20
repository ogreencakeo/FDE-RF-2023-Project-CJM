import { memo, useEffect, useState } from "react";
import "../../css/cartList.css";

// 제이쿼리
import $ from "jquery";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faPerson, faChild, faPersonCane, faXmark } from "@fortawesome/free-solid-svg-icons";

export const CartList = memo(({ selData, tprice, flag }) => {
    console.log(selData);

    const pgBlock = 5;
    const [pgNum, setPgNum] = useState(1);
    const [cartData, setCartData] = useState(selData);
    const [force, setForce] = useState(null);

    if (cartData !== selData && flag.current) {
        setCartData(selData);
        console.log(3333);
    }

    // 전체 데이터 개수
    const cntData = cartData.length;

    // 삭제함수
    const deleteItem = (e) => {
        flag.current = false;

        let confMsg = "정말로 지우시겠습니까?";

        if (confirm(confMsg)) {
            const selIdx = $(e.target).attr("data-idx");
            console.log("지울아이:", selIdx);
            // console.log("cartData", cartData);

            const newData = cartData.filter((v) => {
                if (v.idx !== selIdx) return true;
            });

            console.log("newData :", newData);

            localStorage.setItem("universal-cart", JSON.stringify(newData));
            setCartData(newData);
        } ////// if /////////
    };

    //정규식함수(숫자 세자리마다 콤마해주는 기능)
    function addComma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        $("#mycart")
            .removeClass("on")
            .fadeIn(300, function () {
                $(this).addClass("on");
            });
    }, []);

    const showList = () => {
        console.log("열려라!!");
        $("#cartlist").animate({ right: "0" }, 600);
    };

    const hideList = (e) => {
        e.preventDefault();
        $("#cartlist").animate({ right: "-100%" }, 600);
    };

    return (
        <>
            <section id="cartlist">
                <a href="#" className="cbtn cbtn2" onClick={hideList}>
                    <span>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                </a>
                <table>
                    <caption>
                        <h1> 카트 리스트</h1>
                    </caption>
                    <tbody>
                        <tr>
                            <th>상품</th>
                            {/* <th>번호</th> */}
                            <th>사진</th>
                            <th>수량</th>
                            <th>단가</th>
                            <th>합계</th>
                            <th>삭제</th>
                        </tr>

                        {selData.map((v, i) => (
                            <tr key={i}>
                                <td>{v.항목}</td>
                                {/* <td>{v.번호}</td> */}
                                <td>
                                    {v.이름 === "성인(만12 - 64세)" && (
                                        <FontAwesomeIcon icon={faPerson} className="person-icon" />
                                    )}
                                    {v.이름 === "어린이(만4 - 11세)" && (
                                        <FontAwesomeIcon icon={faChild} className="child-icon" />
                                    )}
                                    {v.이름 === "시니어(만 65세 이상)" && (
                                        <FontAwesomeIcon icon={faPersonCane} className="senior-icon" />
                                    )}
                                </td>
                                <td>{v.수량}</td>
                                <td>{v.가격}</td>
                                <td>{v.가격 * v.수량}</td>
                                {/* <td>{addComma(v.ginfo[3])}원</td> */}

                                <td>
                                    <button className="cfn" data-idx={v.번호} onClick={deleteItem}>
                                        ×
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={6}>
                                <h1 className="ticket-total-price">총가격 : ₩ {tprice}원 </h1>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <div id="mycart" onClick={showList}>
                <h1>
                    <FontAwesomeIcon icon={faBasketShopping} />
                </h1>
                <div className="cntBx">{cntData}</div>
            </div>
        </>
    );
});
