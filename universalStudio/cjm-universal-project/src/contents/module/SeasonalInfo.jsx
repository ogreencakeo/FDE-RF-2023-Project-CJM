import '../../css/seasonal_restaurant.css';
import { seasonalMenu } from '../../data/seasonalMenu';
export function SeasonalInfo(props) {
    const selData = seasonalMenu[props.menu];
    console.log(selData);
    return (
        <div className="seasonal_restaurant_wrap" key={selData.idx}>
            <div className="seasonal_restaurant_bx">
                <div className="restaurant_bx">
                    {/* <!-- 레스토랑 건물 사진 이미지 --> */}
                    <div className="restaurant_building_img">
                        <div className={`restaurant_img${selData.idx} restaurant_img`}>
                        </div>
                    </div>
                    {/* <!-- 레스토랑 로고 + 컨텐츠박스 wrap --> */}
                    <div className="restaurant_explanation ">
                        {/* <!-- 레스토랑 로고 --> */}
                        <div className={`restaurant_logo${selData.idx} restaurant_logo`}></div>
                        <div className="restaurant_caution col-3">
                            <p>에어리어</p>
                            <p>할리우드</p>
                            <p>파크 맵</p>
                            <p>파크 정보</p>
                        </div>
                        <div className="restaurant_content_wrap col-8">
                            <span>푸드&레스토랑</span>
                            <h1>{selData.location}</h1>
                            <div className="restaurant_method">
                                {/* <!-- 서비스 타입 --> */}
                                <div className="service_type">
                                    <i className="fa-solid fa-bell-concierge"></i>
                                    <span>서비스 타입</span>
                                    <span>퀵서비스</span>
                                </div>
                                {/* <!-- 결제 방법 --> */}
                                <div className="pay_method">
                                    <i className="fa-solid fa-money-check-dollar"></i>
                                    <span>결제방법</span>
                                    <span>신용카드 사용 가능</span>
                                </div>
                                {/* <!-- 제공 메뉴 --> */}
                                <div className="provied_menu">
                                    <i className="fa-solid fa-utensils"></i>
                                    <span>제공 메뉴</span>
                                    <span>저 알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 양식, 식사류,이유식 있음, 돼지고기 미사용·무알코올 메뉴(영어 페이지 한정)</span>
                                </div>
                                {/* <!-- 안심·안전한 파크 운영 --> */}
                                <div className="park_operation">
                                    <i className="fa-solid fa-hand-holding-heart"></i>
                                    <span>안심·안전한 파크 운영</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 레스토랑 중간 컨텐츠 --> */}
            <div className="restaurant_main_content_wrap">
                {/* <!-- <div className="restaurant_img1 restaurant_img"></div> --> */}
                {/* <!-- 레스토랑 메뉴 소개 --> */}
                <div className="seasonal_restaurant_product">
                    <div className="product_detail">
                        <h1>{selData.title}</h1>
                        <p>{selData.sub_title}</p>
                    </div>
                    {/* <!-- 픽업메뉴 정보 --> */}
                    <div className="restaurant_pickup_info">
                        <h2>픽업 메뉴 정보</h2>
                        {/* <!-- 픽업메뉴정보래핑 --> */}
                        <div className="menu_pickup_info_wrap">
                            {/* <!-- menu_pickup_info : 픽업메뉴&&추천메뉴 반복! --> */}
                            {/* <!-- 픽업메뉴 --> */}
                            {
                                selData.pickup_menu.map((v, i) =>
                                    <div className="menu_pickup_info" key={i}>
                                        <div className="menu_pick_img">
                                            <img src={`../images/seasonal/seasonal${selData.idx}/${v.image}`} alt={`픽업메뉴이미지${v.idx}`} />
                                        </div>
                                        <div className="menu_pickup_detail">
                                            <h3>{v.menu}</h3>
                                            <p className="menu_pickup_price">{v.price}</p>
                                            <div className="menu_pickup_ingredient">{v.menu_description}</div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    {/* <!-- 추천 메뉴 --> */}

                    {/* <!-- 레스토랑 배경 사진 --> */}
                    <div className="restaurant_bg_wrap">
                        <div className="restaurant_bg_img">
                            <img src={`../images/seasonal/restaurant_bg/${selData.restaurant_bg}`} alt={`${selData.location} 배경`} />
                        </div>
                    </div>

                    {/* <!-- 레스토랑 위치 사진 --> */}
                    <div className="restaurant_map_wrap">
                        <div className="restaurant_map_bx">
                            <h1>레스토랑의 위치</h1>
                            {/* <!-- 레스토랑 지도및 설명 --> */}
                            <div className="restaurant_map">
                                <div className="restaurant_map_img">
                                    <img src={`../images/seasonal/restaurant_map/${selData.restaurant_map}`} alt={`${selData.location} 지도`} />
                                </div>
                                <div className="restaurant_map_content">
                                    <div className="restaurant_map_logo">
                                        <img src="./images/seasonal/map_logo.png" alt="" />
                                    </div>
                                    <div className="restaurant_map_area">
                                        <span>에어리어</span>
                                        <span>뉴옥</span>
                                        <span>파크맵</span>
                                    </div>
                                    <div className="restaurant_park_info">
                                        <span>파크정보</span>
                                        <span>영업시간, 스케줄</span>
                                        <span>쇼&어트랙션</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- 푸드&레스토랑의 추천 정보--> */}
                    <div className="restaurant_recommendations_wrap">
                        <div className="restaurant_recommendations_bx">
                            <p>푸드&레스토랑의 추천 정보</p>
                            {/* <!-- 반복 --> */}
                            <div className="restaurant_recommendations">
                                <img src="./images/seasonal/recommendations1.jpg" alt="추천정보" />
                                <span>저알레르기 메뉴</span>
                                <span>일부 레스토랑에서 특정 알레르기에 대응한 ‘저알레르기 메뉴’를 준비하고 있습니다.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}