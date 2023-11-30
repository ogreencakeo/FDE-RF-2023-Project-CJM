// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste, faCircleUser, faHourglassHalf, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCalendarWeek, faLocationDot, faTicket, faEye } from "@fortawesome/free-solid-svg-icons";
// import "../css/ticket.css";
import "../css/ticket2.css";
import { TicketSwiper } from "../contents/pages/plugin/TicketSwiper";
import { TicketOption } from "./module/TicketOption";

export function Ticket() {
    const ticket_info = [
        {
            font: <FontAwesomeIcon icon={faPaste} />,
            txt: "바우처 즉시 제공",
        },
        {
            font: <FontAwesomeIcon icon={faCircleUser} />,
            txt: "1명",
        },
        {
            font: <FontAwesomeIcon icon={faCalendarWeek} />,
            txt: "모바일 바우처 사용",
        },
        {
            font: <FontAwesomeIcon icon={faHourglassHalf} />,
            txt: "유효기간내 사용",
        },
        {
            font: <FontAwesomeIcon icon={faCircleXmark} />,
            txt: "취소불가",
        },
        {
            font: <FontAwesomeIcon icon={faLocationDot} />,
            txt: "오사카",
        },
    ];

    const ticket_opt = ["[1일권 Low Price (A시즌)]", "[1일권 Middle Price (B시즌)]", "[1일권 High Price (C시즌)]"];

    // const makeCod2 = () => {
    //     const temp = [];
    //     for (let i = 0; attractionImg.length; i++) {
    //         temp[i] = (
    //             <SwiperSlide key={i}>
    //                 <img src={attractionImg[i]} alt="ticket image" />
    //             </SwiperSlide>
    //         );
    //     }
    //     return temp;
    // };

    const makeTiOption = () => {
        const temp = [];
        for (let i = 0; i < ticket_opt.length; i++) {
            temp[i] = (
                <div className="ticket-option-bx">
                    <h1>
                        <FontAwesomeIcon icon={faTicket} />{" "}
                    </h1>
                    <h2>{ticket_opt[i]}</h2>
                    <p>
                        <FontAwesomeIcon icon={faEye} />
                    </p>
                </div>
            );
        }
        return temp;
    };

    return (
        <>
            <div className="ticket-wrap">
                <div className="ticket-wrap-bx">
                    {/* 티켓 메인 이미지 */}
                    <div className="ticket-main-img">
                        <img src="../images/main/character/character3.png" alt="" />
                        <span>UNIVERSAL STUDIO</span>
                    </div>
                    {/* 티켓 메인 정보 */}
                    <div className="ticket-main-cont">
                        <h1>유니버셜 스튜디오 재팬 1일 입장권</h1>
                        <h2>
                            #[일본] 오사카 유니버셜 스튜디오 재팬 입장권 티켓 #USJ
                            <br />
                            #가족이랑#우리 아이와#친구와#여럿이서#짜릿한 액티비티 즐기러
                        </h2>
                        {/* 티켓 정보 */}
                        <div class="ticket-info-bx">
                            {ticket_info.map((v, i) => (
                                <div key={i}>
                                    <span>{v.font}</span>
                                    <span>{v.txt}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* 티켓 구입 문의 */}
                <div className="ticket-purchase-inquiry">
                    <div className="ticket-inquiry-img">
                        <img src="../images/main/character/character7.png" alt="티켓 구입 문의" />
                        <div className="ticket-inquiry-cont">
                            <h1>티켓 구입 문의</h1>
                            <p>
                                문의처: JTR Web Global Support Center Email:contact@jtrweb.com ※이 메일 주소는 여행사
                                전용 비즈니스 메일입니다.여행사가 아닌 문의사항의 경우, 회신할 수 없으므로 양해
                                바랍니다. 영업시간:월～금 일본시간 10:00～18:00 ※현재 문의가 많아 답장에 시간이 걸릴 수
                                있습니다. 불편을 끼쳐 대단히 죄송합니다. 이해해 주셔서 감사합니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ticket-option-wrap">
                    <div className="ticket-option-bx-wrap">
                        {/* 티켓옵션박스 A시즌~C시즌 */}
                        {makeTiOption()}
                    </div>
                    <TicketOption />
                </div>
            </div>
        </>
    );
}
