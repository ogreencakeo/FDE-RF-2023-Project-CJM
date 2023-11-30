// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShareFromSquare,
    faPaste,
    faCircleUser,
    faHourglassHalf,
    faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { faCoins, faLocationCrosshairs, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
// import "../css/ticket.css";
import "../css/ticket2.css";

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

    return (
        <>
            <div className="ticket-wrap">
                <div className="ticket-wrap-bx">
                    <h1>유니버셜 스튜디오 재팬 1일 입장권</h1>
                    <div className="ticket-main-img">
                        
                    </div>
                </div>
            </div>
        </>
    );
}
