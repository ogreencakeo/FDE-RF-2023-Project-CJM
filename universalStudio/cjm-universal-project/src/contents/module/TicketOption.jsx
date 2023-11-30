import { ticketData } from "../../data/ticket/ticket_option";

import '../../css/ticket_option.css';

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faChild, faPersonCane } from "@fortawesome/free-solid-svg-icons";
export function TicketOption() {
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
                    </div>
                    <div className="option-child ticket-opt-character">
                        <h1>
                            <FontAwesomeIcon icon={faChild} />

                        </h1>
                        <h2>어린이(만4 - 11세)</h2>
                        <h2>₩ 48,400</h2>
                    </div>
                    <div className="option-senior ticket-opt-character">
                        <h1>

                            <FontAwesomeIcon icon={faPersonCane} />
                        </h1>
                        <h2>시니어(만 65세 이상)</h2>
                        <h2>₩ 66,500</h2>
                    </div>
                </div>
            </div>
        </>
    );
}