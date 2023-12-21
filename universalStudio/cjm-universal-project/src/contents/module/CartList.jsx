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

        if (window.confirm(confMsg)) {
            const selIdx = $(e.target).attr("data-idx");
            console.log("지울아이:", selIdx);
            // console.log("cartData", cartData);

            const newData = cartData.filter((v) => {
                if (v["번호"] !== selIdx) {
                    // console.log('v["번호"]', v['번호'])
                    return true;
                }
            });

            console.log("newData :", newData);

            localStorage.setItem("universal-cart", JSON.stringify(newData));
            setCartData(newData);

            // 상태가 변경되었는지 확인
            console.log("Updated cart data:", newData);
            setForce(Math.random());
        } ////// if /////////
    };
    useEffect(() => {
        if (flag.current) {
            console.log("Setting cart data:", selData);
            setCartData(selData);
        }
    }, [selData, flag.current]);

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

    const chgNum = (e) => {
        const tg = $(e.currentTarget);
        const tgInput = tg.parent().siblings('.item-cnt');
        let cNum = Number(tgInput.val());

        tgInput.focus();

        if (tg.attr("alt") === "증가") cNum++;
        else cNum--;

        if (cNum < 1) cNum = 1;

        tgInput.val(cNum);
    };

    const goResult = (e) => {
        let tg = $(e.currentTarget);
        let cidx = tg.attr('data-idx');
        flag.current = false;
        cartData.some((v, i)=> {
            if(v.번호 == cidx){
                cartData[i].수량 = tg.prev().val();
                return true;
            }
        });

        localStorage.setItem('universal-cart', JSON.stringify(cartData));
        setCartData(cartData);
        setForce(Math.random());
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
                            <tr key={v.번호}>
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
                                <td>{v.가격 * v.수량}원</td>
                                {/* <td>{addComma(v.ginfo[3])}원</td> */}
                                {/* 상품 수량 */}
                                <td className="cnt-part">
                                    <div>
                                        <span>
                                            <input type="text" className="item-cnt" readOnly value={v.수량} />
                                            <button className="btn-insert" onClick={goResult} data-idx={v.번호}>
                                                반영
                                            </button>
                                            <b className="btn-cnt">
                                                <button alt="증가" onClick={chgNum}>+</button>
                                                <button alt="감소" onClick={chgNum}>-</button>
                                            </b>
                                            
                                        </span>
                                    </div>
                                </td>
                                {/* 삭제버튼 */}
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
