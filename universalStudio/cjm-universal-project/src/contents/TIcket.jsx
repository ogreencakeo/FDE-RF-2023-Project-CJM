// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShareFromSquare,
    faPaste,
    faCircleUser,
    faHourglassHalf,
    faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { faCoins, faLocationCrosshairs, faCalendarWeek, faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import "../css/ticket.css";
import "../css/ticket2.css";
import { GoodsSwiper } from "../contents/pages/plugin/Swiper";

export function Ticket() {
    // const makeTicImgList = () => {
    //     let temp = [];
    //     for (let i = 0; i < 2; i++) {
    //         temp[i] = (
    //             <li key={i}>
    //                 <img src={`./images/slide-main${i + 1}.jpg`} alt="슬라이드 이미지" />
    //             </li>
    //         );
    //     }
    //     return temp;
    // };

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

    return (
        <>
            <div className="ticket-wrap">
                <GoodsSwiper cat='ticket' />
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
                
            </div>
        </>
    );
}
