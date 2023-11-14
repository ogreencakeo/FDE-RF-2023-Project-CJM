import { seasonalMenu } from "../data/seasonalMenu";

export function SeasonalMenu() {
    return (
        // <!-- 추천 시즈널 메뉴 대특집 -->
        <div class="seasonal_overline_wrap">
            <div class="seasonal_overline_bx">
                <img class="carved-img" src="./images/seasonal/carved.png" alt="" />
                <img class="bat-img" src="./images/seasonal/bat.png" alt="" />
                <div class="seasonal_overline_tit">
                    <span>푸드&레스토랑</span>
                    <br />
                    <span>시즈널 메뉴 대특집 추천!</span>
                </div>
                {/* <!-- 콘텍스트 1,2,3으로 묶음 --> */}
                <div class="seasonal_overline_bx_wrap">
                    <div class="seasonal_overline_bx1 seasonal_overline">
                        <div>
                            <i class="fa-solid fa-utensils"></i>
                        </div>
                        <span>할로윈 한정&시즈널 이벤트</span>
                        <span>
                            이 시기에만 즐길 수 있는 할로윈&가을 한정 푸드가 한가득! 유니버설 마켓의 가을 한정 메뉴와
                            ‘NO LIMIT! 퍼레이드’ 컬래버레이션 메뉴 등 길거리 음식까지 총집합!
                        </span>
                    </div>
                    <div class="seasonal_overline_bx2 seasonal_overline">
                        <div>
                            <i class="fa-solid fa-list-check"></i>
                        </div>
                        <span>메뉴를 CHECK!</span>
                        <span>
                            호박을 모티브로 한 아이리시 세트, 검은색 도우와 초록색 제노베제 소스의 조합으로 놀라움을
                            선사하는 피자 세트 등 할로윈 시즌 한정 푸드를 레스토랑에서 만끽하자.
                        </span>
                    </div>
                    <div class="seasonal_overline_bx3 seasonal_overline">
                        <div>
                            <i class="fa-solid fa-envelope-open-text"></i>
                        </div>
                        <span>기타 푸드 정보</span>
                        <span>일부 메뉴만 게재하고 있습니다. 자세한 내용은 점포에서 확인해 주십시오.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
