import { seasonalMenu } from "../../data/seasonalMenu"
export function SeasonalMuLink(){
    // const seasonMenu = seasonalMenu;
    console.log(seasonalMenu);
    return seasonalMenu.map((v, i) =>
        <div class="seasonal_menu_wrap" key={i}>
            <div class="seasonal_menu_bx">
                <div class="seasonal_menu_tit">
                    <h1>시즈널 메뉴</h1>
                    <div></div>
                </div>
                <ul>
                    {
                        <li>
                            <a href="#">
                                <div class="menu_block">
                                    <span>{v.idx}</span>
                                    <div>
                                        <span>{v.location}</span>
                                        {/* <!-- 이미지 --> */}
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-square-up-right"></i>
                                    </div>
                                </div>
                            </a>
                        </li>
                    }
                    
                    {/* <li><a href="#"><span>피네간즈 바&그릴</span></a></li>
                    <li><a href="#"><span>루이즈 N.Y. 피자 팔러</span></a></li>
                    <li><a href="#"><span>멜즈 드라이브인</span></a></li>
                    <li><a href="#"><span>스리 브룸스틱스™</span></a></li>
                    <li><a href="#"><span>스누피™ 백롯 카페</span></a></li>
                    <li><a href="#"><span>해피니스 카페®</span></a></li>
                    <li><a href="#"><span>파크 사이드 그릴</span></a></li> */}

                </ul>
            </div>
        </div>
    )
}