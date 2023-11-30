import { ticketData } from "../../data/ticket/ticket_option";
export function TicketOption(){
    return(
        <>
            {/* 티켓 서브 옵션 박스 */}
            <div className="ticket-suboption-wrap">
                <h1>[1일권 Low Price (A시즌)]</h1>
                <h2>성인(만12 - 64세)</h2>
                <h2>₩ 74,300</h2>
            </div>
        </>
    );
}