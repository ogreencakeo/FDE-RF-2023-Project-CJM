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
import "../css/ticket.css";

export function Ticket() {
    const makeTicImgList = () => {
        let temp = [];
        for (let i = 0; i < 2; i++) {
            temp[i] = (
                <li key={i}>
                    <img src={`./images/slide-main${i + 1}.jpg`} alt="슬라이드 이미지" />
                </li>
            );
        }
        return temp;
    };

    return (
        <>
            <div class="ticket-wrap">
                <div class="ticket-wrap-bx">
                    {/* 동영상 */}
                    <div class="ticket-video-wrap">
                        <iframe
                            src="https://www.youtube.com/embed/yKCqJ8llKuA"
                            title="동영상"
                            allow="autoplay; "
                        ></iframe>
                        <p class="ticket-video-logo">UNIVERSAL STUDIO JAPAN</p>
                    </div>
                    {/* 티켓판매 내용 */}
                    <div class="ticket-sales-details">
                        {/* 티켓 제목및 컨텐츠 (왼쪽) */}
                        <div class="ticket-content-wrap-left">
                            <div class="ticket-wrap-img">
                                <div>
                                    <img src="./images/slide-main1.jpg" alt="이미지" />
                                </div>
                                <div>
                                    <ul>{makeTicImgList}</ul>
                                </div>
                            </div>
                        </div>
                        {/* 티켓 제목및 컨텐츠 (오른쪽) */}
                        <div class="ticket-content-wrap-right">
                            <di class="titcket-tit-wrap">
                                {/* 티켓 컨텐츠및 제목 상단 */}
                                <h2>테마파크&워터파크</h2>
                                <div class="ticket-tit-cont-top">
                                    <h1>유니버셜 스튜디오 재팬 1일 입장권</h1>
                                    <FontAwesomeIcon icon={faShareFromSquare} />
                                </div>
                                {/* 티켓 컨텐츠및 제목 하단 */}
                                <div class="ticket-tit-cont-bottom">
                                    <div class="ticket-tit-money">
                                        <FontAwesomeIcon icon={faCoins} />
                                        <span>48,300부터</span>
                                    </div>
                                    <div class="ticket-tit-where">
                                        <i class="fa-solid fa-location-crosshairs"></i>
                                        <FontAwesomeIcon icon={faLocationCrosshairs} />
                                        <span>오사카</span>
                                    </div>
                                </div>
                                {/* 상품 정보 */}
                                <div class="ticket-info-wrap">
                                    <h1>상품정보</h1>
                                    <div class="ticket-info-bx">
                                        <div>
                                            <span>
                                                <FontAwesomeIcon icon={faPaste} />
                                            </span>
                                            <span>바우처 즉시 제공</span>
                                        </div>
                                        <div>
                                            <span>
                                                <FontAwesomeIcon icon={faCircleUser} />
                                            </span>
                                            <span>1명</span>
                                        </div>
                                        <div>
                                            <span>
                                                <FontAwesomeIcon icon={faCalendarWeek} />
                                            </span>
                                            <span>모바일 바우처 사용</span>
                                        </div>
                                        <div>
                                            <span>
                                                <FontAwesomeIcon icon={faHourglassHalf} />
                                            </span>
                                            <span>유효기간내 사용</span>
                                        </div>
                                        <div>
                                            <span>
                                                <FontAwesomeIcon icon={faCircleXmark} />
                                            </span>
                                            <span>취소불가</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ticket-reviewer-cont-wrap">
                                    <div class="ticket-reviewer-img">
                                        <img src="../images/travelers-choice.jpg" alt="리뷰어 선택" />
                                    </div>
                                    <div class="ticket-reviewer-cont">
                                        <h1>전세계 트립 어드바이저 리뷰어들이 선택!</h1>
                                        <span>
                                            유니버설 스튜디오 재팬은 "Tripadvisor Travellers' Choice Best of the Best
                                            2023"을 수상했습니다.
                                        </span>
                                    </div>
                                </div>
                            </di>
                        </div>
                    </div>
                </div>
                {/* 구매 옵션 */}
                <div className="ticket-section-wrap">
                    <div className="ticket-section-bx1">

                    </div>
                </div>
            </div>
        </>
    );
}
