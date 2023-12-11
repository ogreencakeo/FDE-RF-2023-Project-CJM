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

import { CartList } from "./CartList";

export function TicketOption() {
    // 카트 사용여부 상태변수
    const [csts, setCsts] = useState(0);

    const [lastData,setLastData] = useState(JSON.parse(localStorage.getItem("cart")));

    const useCart = (idx) => {
        const quantity = option[idx]["quantity"];
        if (option[idx]["price"] > 0) {
            console.log("quantity", quantity, ", idx :", idx);
            // const selData = option[idx];
            const selData = option[idx];
            const temp = {'수량' : selData.quantity, '가격' : selData.price,  '이름' : selData.txt, '번호' : selData.idx, "항목" : selData.option}
            console.log("temp :", temp);
            console.log("selData :", selData);

            let localD;

            if (!localStorage.getItem("cart")) {
                localD = [];
                localD.push(temp);
                localStorage.setItem("cart", JSON.stringify(localD));
            } else {
                localD = localStorage.getItem("cart");
                localD = JSON.parse(localD);
                localD.push(temp);
                localStorage.setItem("cart", JSON.stringify(localD));
            }
            setCsts(1);
            setLastData(localD)
        }
    };

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

    // useEffect(()=>{
    //     temp.가격
    // }, [])

    const [option, setOption] = useState([
        // A시즌
        {   
            idx : 1,
            price: 74300,
            quantity: 0,
            character: <FontAwesomeIcon icon={faPerson} className="person-icon" />,
            txt: "성인(만12 - 64세)",
            option: "[1일권 Low Price (A시즌)]",
        },
        {
            idx : 2,
            price: 48400,
            quantity: 0,
            character: <FontAwesomeIcon icon={faChild} className="child-icon" />,
            txt: "어린이(만4 - 11세)",
            option: "[1일권 Low Price (A시즌)]",
        },
        {
            idx : 3,
            price: 66500,
            quantity: 0,
            character: <FontAwesomeIcon icon={faPersonCane} className="senior-icon" />,
            txt: "시니어(만 65세 이상)",
            option: "[1일권 Low Price (A시즌)]",
        },
        // B 시즌
        {
            idx : 4,
            price: 76900,
            quantity: 0,
            character: <FontAwesomeIcon icon={faPerson} className="person-icon" />,
            txt: "성인(만12 - 64세)",
            option: "[1일권 Middle Price (B시즌)]",
        },
        {
            idx : 5,
            price: 50100,
            quantity: 0,
            character: <FontAwesomeIcon icon={faChild} className="child-icon" />,
            txt: "어린이(만4 - 11세)",
            option: "[1일권 Middle Price (B시즌)]",
        },
        {
            idx : 6,
            price: 69100,
            quantity: 0,
            character: <FontAwesomeIcon icon={faPersonCane} className="senior-icon" />,
            txt: "시니어(만 65세 이상)",
            option: "[1일권 Middle Price (B시즌)]",
        },
        // C 시즌
        {
            idx : 7,
            price: 82100,
            quantity: 0,
            character: <FontAwesomeIcon icon={faPerson} className="person-icon" />,
            txt: "성인(만12 - 64세)",
            option: "[1일권 High Price (C시즌)]",
        },
        {
            idx : 8,
            price: 53600,
            quantity: 0,
            character: <FontAwesomeIcon icon={faChild} className="child-icon" />,
            txt: "어린이(만4 - 11세)",
            option: "[1일권 High Price (C시즌)]",
        },
        {
            idx : 9,
            price: 74300,
            quantity: 0,
            character: <FontAwesomeIcon icon={faPersonCane} className="senior-icon" />,
            txt: "시니어(만 65세 이상)",
            option: "[1일권 High Price (C시즌)]",
        },
    ]);

   

    // 전체 가격 계산
    const totalPrice = () => {
        return option.reduce((total, option) => total + option.quantity * option.price, 0);
    };

    const ticket_opt = ["[1일권 Low Price (A시즌)]", "[1일권 Middle Price (B시즌)]", "[1일권 High Price (C시즌)]"];

    return (
        <>
            <div className="ticket-suboption-wrap">
                <div className="ticket-suboption-bx">
                    {option.map((v, idx) => (
                        <div className="ticket-opt-character" key={idx}>
                            <span>{v.option}</span>
                            <h1>{v.character}</h1>
                            <h2>{v.txt}</h2>
                            <h2>가격(1인) : ₩ {v.price.toLocaleString()}</h2>
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
                                <h2>가격 : ₩ {(v.price * v.quantity).toLocaleString()}</h2>
                            </div>
                            <button className="shoppingCart" onClick={() => useCart(idx)}>
                                담기
                            </button>
                        </div>
                    ))}
                </div>
                {/* 카트리스트 */}
                <h1 className="ticket-total-price">총가격 : ₩ {totalPrice().toLocaleString()}원 </h1>
                {csts && <CartList selData={lastData} />}
                {/* <button className="shoppingCart" onClick={useCart}>담기</button>  */}
            </div>
        </>
    );
}
