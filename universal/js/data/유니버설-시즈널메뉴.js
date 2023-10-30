
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
const seasonalMenu = [
    {
        "idx" : "1",
        "location" : "스튜디오 스타즈 레스토랑",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정),<br/> 어린이 메뉴,<br/> 양식, 식사류,이유식 있음,<br/> 돼지고기 미사용·무알코올 메뉴(영어 페이지 한정)`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "https://www.usj.co.jp/web/en/us/service-guide/barrier-free/dietary-restriction",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        // "seasonal_img" : ["seasonal1-1.jpg", "seasonal1-2.jpg", "seasonal1-3.jpg", "seasonal1-4.jpg", "seasonal1-5.jpg", "seasonal1-6.jpg"],
        "pickup_menu" : [
            {
                "idx" : "1-1",
                "image" : "seasonal1-1.jpg",
                "menu" : "DJ 피카츄 업 업♪ 할로윈 파티 플레이트 세트",
                "price" : "￥2,400",
                "menu_description" : "소고기 레드 와인 조림, 감자 그라탱, 콘 라이스, 소프트드링크（R）"
            },
            {
                "idx" : "1-2",
                "image" : "seasonal1-2.jpg",
                "menu" : "DJ 팬텀 에브리 나잇♪ 할로윈 파티 플레이트 세트",
                "price" : "￥2,400",
                "menu_description" : "돼지고기 안심 커틀릿&카레 3종류(키마, 블랙, 유럽풍), 블랙 라이스, 소프트드링크（R）"
            },
            {
                "idx" : "1-3",
                "image" : "seasonal1-3.jpg",
                "menu" : "DJ 피카츄&DJ 팬텀 점핑 할로윈 파티 키즈 세트",
                "price" : "￥1,400",
                "menu_description" : `치즈 햄버그스테이크, 거봉 크림 도넛, 새우튀김, 크로켓, 감자튀김, 호박 샐러드, 콘 라이스, 오렌지 음료<br/><br/>※ 만 11세 이하의 어린이 메뉴`
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "1-4",
                "image" : "seasonal1-4.jpg",
                "menu" : "따라쟁이! 따라큐 밀크 무스&크레이프",
                "price" : "￥1,100",
                "menu_description" : ""
            },
            {
                "idx" : "1-5",
                "image" : "seasonal1-5.jpg",
                "menu" : "다크펫 점핑 초콜릿 케이크",
                "price" : "￥950",
                "menu_description" : "",
            },
            {
                "idx" : "1-6",
                "image" : "seasonal1-6.jpg",
                "menu" : "무우마의 장난!? 그레이프 젤리&소다",
                "price" : "￥700",
                "menu_description" : "",
            },
        ],
        "seasonal_logo" : "seasonal1.jpg",
        "seasonal_main_img" : "seasonal1-main.jpg",
        "title" : "영화 스튜디오 내의 카페테리아",
        "sub_title" : "아빠와 아이는 물론 가족 모두가 만족할 수 있는 다양한 메뉴, 그리고 유아식 판매와 좌석 안내 등 엄마에게 편리한 서비스까지 한가득!"
    },
    {
        "idx" : "2",
        "location" : "피네간즈 바&그릴",
        "service_type" : "풀 서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정),<br/> 어린이 메뉴,<br/> 양식, 바・주류`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        "pickup_menu" : [
            {
                "idx" : "2-1",
                "image" : "seasonal2-1.jpg",
                "menu" : "할로윈 아이리시 세트",
                "price" : "￥3,200",
                "menu_description" : "포크립, 피시&칩스, 펌킨 아이리시 오믈렛, 무화과와 포도 콩포트, 대파 감자 수프, 빵"
            },
            {
                "idx" : "2-2",
                "image" : "seasonal2-2.jpg",
                "menu" : "그릴 치킨&펌킨 샐러드",
                "price" : "￥1,100",
                "menu_description" : ""
            },
            {
                "idx" : "2-3",
                "image" : "seasonal2-3.jpg",
                "menu" : `(왼쪽) 할로윈 카니발 하이볼 ~블러드 오렌지~<br />(오른쪽) 할로윈 칵테일 ~믹스 베리~ (무알코올 드링크)`,
                "price" : `(왼쪽) ¥850<br />(오른쪽) ¥700`,
                "menu_description" : "",
            },
            {
                "idx" : "2-4",
                "image" : "seasonal2-4.jpg",
                "menu" : "피네간즈 스테이크 세트",
                "price" : "￥2,800",
                "menu_description" : "비프스테이크, 대파 감자 수프, 프라이드 포테이토, 크리스프 샌드위치",
            },
            {
                "idx" : "2-5",
                "image" : "seasonal2-5.jpg",
                "menu" : "아이리시 비프스튜 세트",
                "price" : "￥2,500",
                "menu_description" : "아이리시 비프스튜, 샐러드, 빵",
            },
            {
                "idx" : "2-6",
                "image" : "seasonal2-6.jpg",
                "menu" : "로스트 치킨 세트",
                "price" : "￥2,500",
                "menu_description" : "로스트치킨, 대파 감자 수프, 빵"
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "2-7",
                "image" : "seasonal2-7.jpg",
                "menu" : "어니언 블라썸",
                "price" : "￥1,200",
                "menu_description" : ""
            },
            {
                "idx" : "2-8",
                "image" : "seasonal2-8.jpg",
                "menu" : "피네간즈 키즈 세트",
                "price" : "￥1,400",
                "menu_description" : `햄버거, 피시 버거, 프라이드 포테이토, 콘버터, 오렌지 음료<br /><br />※ 만 11세 이하의 어린이 메뉴`,
            },
            {
                "idx" : "2-9",
                "image" : "seasonal2-9.jpg",
                "menu" : "하프 야드 그린 칵테일",
                "price" : "￥1,300",
                "menu_description" : "",
            },
        ],
        "seasonal_logo" : "seasonal2.png",
        "seasonal_main_img" : "seasonal2-main.jpg",
        "tite" : "브루클린에 있는 아일랜드풍 술집에서 서양 요리를 즐겨 보세요",
        "sub_title" : `제철 과일로 만든 하이볼 칵테일을 맛볼 수 있는 카운터 바도 병설.<br/><br/>협찬: Suntory Spirits Ltd.`
    },
    {
        "idx" : "3",
        "location" : "루이즈 N.Y. 피자 팔러",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정),<br /> 피자`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "",
        "children_page" : "",
        "pickup_menu" : [
            {
                "idx" : "3-1",
                "image" : "seasonal3-1.jpg",
                "menu" : "할로윈 피자 세트",
                "price" : "",
                "menu_description" : `제노베제 ~베이컨&블랙 올리브~, 프라이드 포테이토, 소프트드링크(R)<br/>￥1,650<br/>홀 피자<br/>￥5,400`,
            },
            {
                "idx" : "3-2",
                "image" : "seasonal3-2.jpg",
                "menu" : `피자<br/>콰트로 치즈 ~4가지 종류의 치즈&꿀~`,
                "price" : "",
                "menu_description" : `루이즈 피자 세트(프라이드 포테이토, 소프트드링크 포함)<br/>￥1,550<br />홀 피자<br />￥4,800`
            },
            {
                "idx" : "3-3",
                "image" : "seasonal3-3.jpg",
                "menu" : `피자<br/>마르게리타 ∼토마토&바질∼`,
                "price" : "",
                "menu_description" : `루이즈 피자 세트(프라이드 포테이토, 소프트드링크 포함)<br/>￥1,450<br/>홀 피자<br/>￥4,200`,
            },
            {
                "idx" : "3-4",
                "image" : "seasonal3-4.jpg",
                "menu" : `피자<br/>페퍼로니`,
                "price" : "",
                "menu_description" : `루이즈 피자 세트(프라이드 포테이토, 소프트드링크 포함)<br/>￥1,450<br/>홀 피자<br/>￥4,200`,
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "3-5",
                "image" : "seasonal3-5.jpg",
                "menu" : `각종 사이드 메뉴<br/>(왼쪽) 라이스 크로켓<br/>(오른쪽)슈림프 컵 샐러드`,
                "price" : "각￥550",
                "menu_description" : ""
            },
            {
                "idx" : "3-6",
                "image" : "seasonal3-6.jpg",
                "menu" : "티라미수",
                "price" : "￥500",
                "menu_description" : "",
            },
        ],
        "seasonal_logo" : "seasonal3.png",
        "seasonal_main_img" : "seasonal3-main.jpg",
        "tite" : "빅 사이즈의 본고장 피자를 맛볼 수 있는 뉴욕 리틀 이태리 피자 팔러.",
        "sub_title" : ""
    },
    {
        "idx" : "4",
        "location" : "멜즈 드라이브인",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정),<br /> 어린이 메뉴,<br /> 샌드위치, 햄버거`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        "pickup_menu" : [
            {
                "idx" : "4-1",
                "image" : "seasonal4-1.jpg",
                "menu" : "페퍼 데리야키&사워크림 버거 세트",
                "price" : "￥1,850",
                "menu_description" : "프라이드 포테이토, 소프트드링크(R)",
            },
            {
                "idx" : "4-2",
                "image" : "seasonal4-2.jpg",
                "menu" : "BBQ 베이컨 치즈버거 세트",
                "price" : "￥1,800",
                "menu_description" : "프라이드 포테이토, 소프트드링크(R)",
            },
            {
                "idx" : "4-3",
                "image" : "seasonal4-3.jpg",
                "menu" : "키즈 햄버거 세트",
                "price" : "￥1,700",
                "menu_description" : "프라이드 포테이토, 소프트드링크(R)",
            },
            {
                "idx" : "4-4",
                "image" : "seasonal4-4.jpg",
                "menu" : "클래식 버거 세트",
                "price" : "￥1,650",
                "menu_description" : "프라이드 포테이토, 소프트드링크(R)",
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "4-5",
                "image" : "seasonal4-5.jpg",
                "menu" : "키즈 햄버거 세트",
                "price" : "￥1,100",
                "menu_description" : `햄버거, 프라이드 포테이토, 스낵, 오렌지 음료<br/><br/>※ 만 11세 이하의 어린이 메뉴`
            },
            {
                "idx" : "4-6",
                "image" : "seasonal4-6.jpg",
                "menu" : "아메리칸 초콜릿 브라우니",
                "price" : "￥500",
                "menu_description" : "",
            },
        ],
        "seasonal_logo" : "seasonal4.jpg",
        "seasonal_main_img" : "seasonal4-main.jpg",
        "tite" : "영화 ‘청춘 낙서’ 속 세계를 만끽하세요!",
        "sub_title" : `50년대풍 분위기가 매력적인 햄버거 레스토랑.<br/><br/>협찬: Coca-Cola(Japan)Company, Limited and Coca-Cola Bottlers Japan Inc.`
    },
    
        
]