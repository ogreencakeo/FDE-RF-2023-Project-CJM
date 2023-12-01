import { ticketData } from "../../data/ticket/ticket_option";

import "../../css/ticket_option.css";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPerson,
    faChild,
    faPersonCane,
    faPlus,
    faMinus,
    faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
export function TicketOption() {
    const [option, setOption] = useState([
        {
            price: 74300,
            quantity: 0,
            character: <FontAwesomeIcon icon={faPerson} />,
            txt: "성인(만12 - 64세)",
        },
        {
            price: 48400,
            quantity: 0,
            character: <FontAwesomeIcon icon={faChild} />,
            txt: "어린이(만4 - 11세)",
        },
        {
            price: 66500,
            quantity: 0,
            character: <FontAwesomeIcon icon={faPersonCane} />,
            txt: "시니어(만 65세 이상)",
        },
    ]);

    const increaseQuntity = (idx) => {
        const newOption = [...option];
        newOption[idx].quantity += 1;
        setOption(newOption);
    };

    const decreaseQuntity = (idx) => {
        const newOption = [...option];
        if (newOption[idx].quantity > 0) {
            newOption[idx].quantity -= 1;
            setOption(newOption);
        }
    };

    // 전체 가격 계산
    const totalPrice = () => {
        return option.reduce((total, option) => total + option.quantity * option.price, 0);
    };

    return (
        <>
            {/* 티켓 서브 옵션 박스 랩핑 */}
            <div className="ticket-suboption-wrap">
                <h1>[1일권 Low Price (A시즌)]</h1>
                {/* 티컷 서브 옵션 박스 */}
                <div className="ticket-suboption-bx">
                    {option.map((v, idx) => (
                        <div className="ticket-opt-character" key={idx}>
                            <h1>{v.character}</h1>
                            <h2>{v.txt}</h2>
                            <h2>가격(1인) : ₩ {v.price}</h2>
                            {/* 티켓 버튼 +, - */}
                            <div className="ticket-price-btn">
                                <button className="ticket-btn" onClick={() => increaseQuntity(idx)}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                                <button className="ticket-btn" onClick={() => decreaseQuntity(idx)}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                            </div>
                            <div className="ticket-opt-price">
                                <h2>수량 : {v.quantity}</h2>
                                <h2>가격 : ₩ {v.price * v.quantity}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 className="ticket-total-price">
                    총가격 : ₩ {totalPrice()}원{" "}
                </h1>
            </div>
        </>
    );
}
