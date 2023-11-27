import "../css/ticket.css";

export function Ticket() {
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
                                <img src="./images/slide-main2.jpg" alt="" />
                            </div>
                        </div>
                        {/* 티켓 제목및 컨텐츠 (오른쪽) */}
                        <div class="ticket-content-wrap-right">
                            <di class="titcket-tit-wrap">
                                {/* 티켓 컨텐츠및 제목 상단 */}
                                <h2>테마파크&워터파크</h2>
                                <div class="ticket-tit-cont-top">
                                    <h1>유니버셜 스튜디오 재팬 1일 입장권</h1>
                                    <i class="fa-regular fa-share-from-square"></i>
                                </div>
                                {/* 티켓 컨텐츠및 제목 하단 */}
                                <div class="ticket-tit-cont-bottom">
                                    <div class="ticket-tit-money">
                                        <i class="fa-solid fa-coins"></i>
                                        <span>48,300부터</span>
                                    </div>
                                    <div class="ticket-tit-where">
                                        <i class="fa-solid fa-location-crosshairs"></i>
                                        <span>오사카</span>
                                    </div>
                                </div>
                                {/* 상품 정보 */}
                                <div class="ticket-info-wrap">
                                    <h1>상품정보</h1>
                                    <div class="ticket-info-bx">
                                        <div>
                                            <i class="fa-regular fa-paste"></i>
                                            <span>바우처 즉시 제공</span>
                                        </div>
                                        <div>
                                            <i class="fa-regular fa-user"></i>
                                            <span>1명</span>
                                        </div>
                                        <div>
                                            <i class="fa-solid fa-calendar-week"></i>
                                            <span>모바일 바우처 사용</span>
                                        </div>
                                        <div>
                                            <i class="fa-solid fa-hourglass-start"></i>
                                            <span>유효기간내 사용</span>
                                        </div>
                                        <div>
                                            <i class="fa-solid fa-user-xmark"></i>
                                            <span>취소불가</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ticket-reviewer-cont-wrap">
                                    <div class="ticket-reviewer-img">
                                        <img src="./images/travelers-choice.jpg" alt="리뷰어 선택" />
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
            </div>
        </>
    );
}
