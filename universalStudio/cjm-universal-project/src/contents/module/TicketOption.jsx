import { ticketData } from "../../data/ticket/ticket_option";

import "../../css/ticket_option.css";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faChild, faPersonCane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export function TicketOption() {
    const [option, setOption] = useState([
        {
            price: 74300,
            quantity: 1,
        },
        {
            price: 48400,
            quantity: 1,
        },
        {
            price: 66500,
            quantity: 1,
        },
    ]);

    // const [increaseQuntity, setIncreaseQuntity] =

    function increaseQuntity(){
        const newOption = [...option];
        newOption =
    }
    return (
        <>
            {/* 티켓 서브 옵션 박스 랩핑 */}
            <div className="ticket-suboption-wrap">
                <h1>[1일권 Low Price (A시즌)]</h1>
                {/* 티컷 서브 옵션 박스 */}
                <div className="ticket-suboption-bx">
                    <div className="option-adult ticket-opt-character">
                        <h1>
                            <FontAwesomeIcon icon={faPerson} />
                        </h1>
                        <h2>성인(만12 - 64세)</h2>
                        <h2>₩ 74,300</h2>
                        <button>＋</button>
                        <button>－</button>
                    </div>
                    <div className="option-child ticket-opt-character">
                        <h1>
                            <FontAwesomeIcon icon={faChild} />
                        </h1>
                        <h2>어린이(만4 - 11세)</h2>
                        <h2>₩ 48,400</h2>
                        <button onClick={()=>increaseQuntity(idx)}>＋</button>
                        <button onClick={()=>decreaseQuntity(idx)}>－</button>
                    </div>
                    <div className="option-senior ticket-opt-character">
                        <h1>
                            <FontAwesomeIcon icon={faPersonCane} />
                        </h1>
                        <h2>시니어(만 65세 이상)</h2>
                        <h2>₩ 66,500</h2>
                        <button>＋</button>
                        <button>－</button>
                    </div>
                </div>
            </div>
        </>
    );
}
