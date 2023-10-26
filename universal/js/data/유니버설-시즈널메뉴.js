
/*
    location : 판매장소
    service_type : 서비스 타입
    payment_method : 결제 방법
    menu_provided : 제공 메뉴
    japanese_page : 일본어 페이지
    englisgh_page : 영어 페이지
    children_page : 어린이 페이지
    seasonal_img : 메뉴 이미지
    seasonal_main_img : 메인 이미지
    seasonal_logo : 로고 이미지
    title : 제목
    sub_title : 서브 제목
*/
const seasonalMenu = {
    "seasonalMenu1" : {
        "location" : "스튜디오 스타즈 레스토랑",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정),<br/> 어린이 메뉴,<br/> 양식, 식사류,이유식 있음,<br/> 돼지고기 미사용·무알코올 메뉴(영어 페이지 한정)`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "https://www.usj.co.jp/web/en/us/service-guide/barrier-free/dietary-restriction",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        // "seasonal_img" : ["seasonal1-1.jpg", "seasonal1-2.jpg", "seasonal1-3.jpg", "seasonal1-4.jpg", "seasonal1-5.jpg", "seasonal1-6.jpg"],
        "seasonal_img" : {
            "seasonal_img1" : {
                "menu" : "DJ 피카츄 업 업♪ 할로윈 파티 플레이트 세트",
                "price" : "￥2,400",
                "menu description" : "소고기 레드 와인 조림, 감자 그라탱, 콘 라이스, 소프트드링크（R）"
            }
        },
        "seasonal_logo" : "seasonal1.jpg",
        "seasonal_main_img" : "seasonal1-main.jpg",
        "title" : "영화 스튜디오 내의 카페테리아",
        "sub_title" : "아빠와 아이는 물론 가족 모두가 만족할 수 있는 다양한 메뉴, 그리고 유아식 판매와 좌석 안내 등 엄마에게 편리한 서비스까지 한가득!"
    },
    "seasonalMenu2" : {
        "location" : "피네간즈 바&그릴",
        "service_type" : "풀 서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정),<br/> 어린이 메뉴,<br/> 양식, 바・주류`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        "seasonal_img" : ["seasonal2-1.jpg","seasonal2-2.jpg", "seasonal2-3.jpg", "seasonal2-4.jpg", "seasonal2-5.jpg", "seasonal2-6.jpg", "seasonal2-7.jpg", "seasonal2-8.jpg", "seasonal2-9.jpg"],
        "seasonal_logo" : "seasonal2.png",
        "seasonal_main_img" : "seasonal2-main.jpg",
        "tite" : "브루클린에 있는 아일랜드풍 술집에서 서양 요리를 즐겨 보세요",
        "sub_title" : `제철 과일로 만든 하이볼 칵테일을 맛볼 수 있는 카운터 바도 병설.<br/><br/>협찬: Suntory Spirits Ltd.`
    },
    "seasonalMenu3" : {
        "location" : "루이즈 N.Y. 피자 팔러",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정),<br /> 피자`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "",
        "children_page" : "",
        "seasonal_img" : ["seasonal3-1.jpg","seasonal3-2.jpg", "seasonal3-3.jpg", "seasonal3-4.jpg", "seasonal3-5.jpg", "seasonal3-6.jpg"],
        "seasonal_logo" : "seasonal3.png",
        "seasonal_main_img" : "seasonal3-main.jpg",
        "tite" : "빅 사이즈의 본고장 피자를 맛볼 수 있는 뉴욕 리틀 이태리 피자 팔러.",
        "sub_title" : ""
    },
    "seasonalMenu4" : {
        "location" : "멜즈 드라이브인",
        "service_type" : "퀵서비스",
        "payment_method" : "",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정),<br /> 어린이 메뉴,<br /> 샌드위치, 햄버거`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        "seasonal_img" : ["seasonal4-1.jpg", "seasonal4-2.jpg", "seasonal4-3.jpg", "seasonal4-4.jpg", "seasonal4-5.jpg", "seasonal4-6.jpg"],
        "seasonal_logo" : "seasonal4.jpg",
        "seasonal_main_img" : "seasonal4-main.jpg",
        "tite" : "영화 ‘청춘 낙서’ 속 세계를 만끽하세요!",
        "sub_title" : `50년대풍 분위기가 매력적인 햄버거 레스토랑.<br/><br/>협찬: Coca-Cola(Japan)Company, Limited and Coca-Cola Bottlers Japan Inc.`
    },
}