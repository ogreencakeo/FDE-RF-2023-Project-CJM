
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
export const seasonalMenu = {
    "restaurant1" :{
        "idx" : "1",
        "link" : "restaurant1",
        "location" : "스튜디오 스타즈 레스토랑",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 양식, 식사류,이유식 있음, 돼지고기 미사용·무알코올 메뉴(영어 페이지 한정)`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "https://www.usj.co.jp/web/en/us/service-guide/barrier-free/dietary-restriction",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        "restaurant_bg" : "restaurant_bg1.jpg",
        "restaurant_map" : "restaurant_map1.jpg",
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
                "menu_description" : `치즈 햄버그스테이크, 거봉 크림 도넛, 새우튀김, 크로켓, 감자튀김, 호박 샐러드, 콘 라이스, 오렌지 음료※ 만 11세 이하의 어린이 메뉴`
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
    "restaurant2" :{
        "idx" : "2",
        "link" : "restaurant2",
        "location" : "피네간즈 바&그릴",
        "service_type" : "풀 서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 양식, 바・주류`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        "restaurant_bg" : "restaurant_bg2.jpg",
        "restaurant_map" : "restaurant_map2.jpg",
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
                "menu" : `(왼쪽) 할로윈 카니발 하이볼 ~블러드 오렌지~^(오른쪽) 할로윈 칵테일 ~믹스 베리~ (무알코올 드링크)`,
                "price" : `(왼쪽) ¥850^(오른쪽) ¥700`,
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
                "menu_description" : `햄버거, 피시 버거, 프라이드 포테이토, 콘버터, 오렌지 음료^^※ 만 11세 이하의 어린이 메뉴`,
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
        "sub_title" : `제철 과일로 만든 하이볼 칵테일을 맛볼 수 있는 카운터 바도 병설.협찬: Suntory Spirits Ltd.`
    },
    "restaurant3" : {
        "idx" : "3",
        "link" : "restaurant3",
        "location" : "루이즈 N.Y. 피자 팔러",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정),^ 피자`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "",
        "children_page" : "",
        "restaurant_bg" : "restaurant_bg3.jpg",
        "restaurant_map" : "restaurant_map3.jpg",
        "pickup_menu" : [
            {
                "idx" : "3-1",
                "image" : "seasonal3-1.jpg",
                "menu" : "할로윈 피자 세트",
                "price" : "",
                "menu_description" : `제노베제 ~베이컨&블랙 올리브~, 프라이드 포테이토, 소프트드링크(R)￥1,650홀 피자￥5,400`,
            },
            {
                "idx" : "3-2",
                "image" : "seasonal3-2.jpg",
                "menu" : `피자콰트로 치즈 ~4가지 종류의 치즈&꿀~`,
                "price" : "",
                "menu_description" : `루이즈 피자 세트(프라이드 포테이토, 소프트드링크 포함)￥1,550^홀 피자^￥4,800`
            },
            {
                "idx" : "3-3",
                "image" : "seasonal3-3.jpg",
                "menu" : `피자마르게리타 ∼토마토&바질∼`,
                "price" : "",
                "menu_description" : `루이즈 피자 세트(프라이드 포테이토, 소프트드링크 포함)￥1,450홀 피자￥4,200`,
            },
            {
                "idx" : "3-4",
                "image" : "seasonal3-4.jpg",
                "menu" : `피자페퍼로니`,
                "price" : "",
                "menu_description" : `루이즈 피자 세트(프라이드 포테이토, 소프트드링크 포함)￥1,450홀 피자￥4,200`,
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "3-5",
                "image" : "seasonal3-5.jpg",
                "menu" : `각종 사이드 메뉴(왼쪽) 라이스 크로켓(오른쪽)슈림프 컵 샐러드`,
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
    "restaurant4" : {
        "idx" : "4",
        "link" : "restaurant4",
        "location" : "멜즈 드라이브인",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정),^ 어린이 메뉴,^ 샌드위치, 햄버거`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        "restaurant_bg" : "restaurant_bg4.jpg",
        "restaurant_map" : "restaurant_map4.jpg",
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
                "menu_description" : `햄버거, 프라이드 포테이토, 스낵, 오렌지 음료※ 만 11세 이하의 어린이 메뉴`
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
        "sub_title" : `50년대풍 분위기가 매력적인 햄버거 레스토랑.협찬: Coca-Cola(Japan)Company, Limited and Coca-Cola Bottlers Japan Inc.`
    },
    "restaurant5" : {
        "idx" : "5",
        "link" : "restaurant5",
        "location" : "스리 브룸스틱스™",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 베지테리언(영어 페이지 한정)`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "https://www.usj.co.jp/web/en/us/service-guide/barrier-free/dietary-restriction",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        "restaurant_bg" : "restaurant_bg5.jpg",
        "restaurant_map" : "restaurant_map5.jpg",
        "pickup_menu" : [
            {
                "idx" : "5-1",
                "image" : "seasonal5-1.jpg",
                "menu" : "크리스마스 플레이트",
                "price" : "￥2,700",
                "menu_description" : "로스트 치킨, 치폴라타 소시지, 로스트 포테이토, 완두콩, 당근, 방울양배추, 크랜베리 소스, 그레이비 소스, 대파 감자 수프",
            },
            {
                "idx" : "5-2",
                "image" : "seasonal5-2.jpg",
                "menu" : "비프스튜 ~흑맥주 조림~",
                "price" : "￥2,600",
                "menu_description" : "로스트 포테이토와 익힌 채소, 빵",
            },
            {
                "idx" : "5-3",
                "image" : "seasonal5-3.jpg",
                "menu" : "크리스마스 요리",
                "price" : "￥8,900",
                "menu_description" : "가든 샐러드, 로스트 치킨, 치폴라타 소시지, 로스트 포테이토, 완두콩, 당근, 방울양배추, 크랜베리 소스, 그레이비 소스",
            },
            {
                "idx" : "5-4",
                "image" : "seasonal5-4.jpg",
                "menu" : "피시&칩스",
                "price" : "￥2,200",
                "menu_description" : "흰살 생선 튀김과 프라이드 포테이토∼타르타르 소스∼, 완두콩, 으깬 완두콩",
            },
            {
                "idx" : "5-5",
                "image" : "seasonal5-5.jpg",
                "menu" : "포크립",
                "price" : "￥2,200",
                "menu_description" : "구운 통옥수수, 로스트 포테이토",
            },
            {
                "idx" : "5-6",
                "image" : "seasonal5-6.jpg",
                "menu" : "베지터블 플레이트",
                "price" : "￥1,750",
                "menu_description" : "가든 샐러드, 구운 통옥수수, 프라이드 포테이토, 믹스 베지터블",
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "5-1",
                "image" : "specialty5-1.jpg",
                "menu" : "(왼쪽) 핫 버터 맥주™ ∼프리미엄 머그컵 포함∼(무알코올)(오른쪽) 핫 버터 맥주™ ∼머그컵 포함∼(무알코올)",
                "price" : "",
                "menu_description" : `(왼쪽) ¥4,600 (오른쪽) ¥1,400`
            },
            {
                "idx" : "5-2",
                "image" : "specialty5-2.jpg",
                "menu" : "마카로니 치즈",
                "price" : "￥1,000",
                "menu_description" : `마카로니 치즈, 소프트 롤, 익힌 채소※ 만 6세 이하의 어린이 메뉴`,
            },
            {
                "idx" : "5-3",
                "image" : "specialty5-3.jpg",
                "menu" : "버터 맥주™ 푸딩",
                "price" : "￥700",
                "menu_description" : "",
            },
            {
                "idx" : "5-4",
                "image" : "specialty5-4.jpg",
                "menu" : "라즈베리&클로티드 크림을 곁들인 당밀 타르트",
                "price" : "￥700",
                "menu_description" : "",
            },
        ],
        "seasonal_logo" : "seasonal5.jpg",
        "seasonal_main_img" : "seasonal5-main.jpg",
        "tite" : "호그와트™ 마법 학교의 선생님과 학생들도 즐겨 찾는 호그스미드™의 ‘오래된 술집 겸 여관’",
        "sub_title" : `호그스미드™에 있는 스리 브룸스틱스™는 호그와트™ 마법 학교의 선생님과 학생들도 즐겨 찾는 ‘오래된 술집 겸 여관’입니다.놀라울 정도로 높은 천장을 올려다보면, 목제 계단과 발코니가 무질서하게 배치된 신비로운 공간에 누구나 압도되어 버립니다.마법계의 음료 ‘버터 맥주™’는 여기서도 즐기실 수 있습니다. 무알코올의 달콤한 음료이므로, 어린이도 안심하고 주문해 주세요.이 술집에서는 이 밖에도 피시 앤 칩스와 고기파이 등 영국 전통의 맛과 디저트도 있습니다.`
    },
    "restaurant6" :{
        "idx" : "6",
        "link" : "restaurant6",
        "location" : "스누피™ 백롯 카페",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 디저트, 면류, 파스타, 샌드위치, 햄버거, 이유식 있음`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        "restaurant_bg" : "restaurant_bg6.jpg",
        "restaurant_map" : "restaurant_map6.jpg",
        "pickup_menu" : [
            {
                "idx" : "6-1",
                "image" : "seasonal6-1.jpg",
                "menu" : "할로윈 토마토 크림 스파게티 세트",
                "price" : "￥1,650",
                "menu_description" : "할로윈 토마토 크림 스파게티, 프라이드 포테이토, 소프트드링크(R)",
            },
            {
                "idx" : "6-2",
                "image" : "seasonal6-2.jpg",
                "menu" : "미트 스파게티 세트",
                "price" : "￥1,550",
                "menu_description" : "미트 스파게티, 프라이드 포테이토, 소프트드링크(R)",
            },
            {
                "idx" : "6-3",
                "image" : "seasonal6-3.jpg",
                "menu" : "데리야키 비프버거 세트",
                "price" : "￥1,450",
                "menu_description" : "데리야키 비프버거, 프라이드 포테이토, 소프트드링크(R)",
            },
            {
                "idx" : "6-4",
                "image" : "seasonal6-4.jpg",
                "menu" : "새우 커틀릿 버거 세트",
                "price" : "￥1,450",
                "menu_description" : "새우 커틀릿 버거, 프라이드 포테이토, 소프트드링크(R)",
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "6-5",
                "image" : "seasonal6-5.jpg",
                "menu" : "스누피 펌킨 케이크 ~캐러멜&치즈 크림~",
                "price" : "￥650",
                "menu_description" : ""
            },
            {
                "idx" : "6-6",
                "image" : "seasonal6-6.jpg",
                "menu" : "스누피 키즈 세트",
                "price" : "각￥1,000",
                "menu_description" : `A 팬케이크, 치킨 너겟, 프라이드 포테이토, 스낵, 오렌지 음료B 샌드위치, 치킨 너겟, 프라이드 포테이토, 스낵, 오렌지 음료※ 만 11세 이하의 어린이 메뉴※ 사진은 B 샌드위치`,
            },
        ],
        "seasonal_logo" : "seasonal6.jpg",
        "seasonal_main_img" : "seasonal6-main.jpg",
        "tite" : "스누피 친구들의 단골 카페",
        "sub_title" : "",
    },
    "restaurant7" : {
        "idx" : "7",
        "link" : "restaurant7",
        "location" : "해피니스 카페®",
        "service_type" : "퀵서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 양식, 식사류, 미니언 푸드 있음`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        "restaurant_bg" : "restaurant_bg7.jpg",
        "restaurant_map" : "restaurant_map7.jpg",
        "pickup_menu" : [
            {
                "idx" : "7-1",
                "image" : "seasonal7-1.jpg",
                "menu" : "미니언 버거 플레이트",
                "price" : "￥2,100",
                "menu_description" : "미니언 민스 커틀릿 버거, 프라이드 포테이토, 어니언링, 샐러드, 드링크 바",
            },
            {
                "idx" : "7-2",
                "image" : "seasonal7-2.jpg",
                "menu" : "미니언 프라이드치킨 플레이트",
                "price" : "￥2,100",
                "menu_description" : "프라이드치킨, 호박과 파프리카 마리네, 밥, 샐러드, 콘 차우더, 드링크 바",
            },
            {
                "idx" : "7-3",
                "image" : "seasonal7-3.jpg",
                "menu" : "키마카레 플레이트",
                "price" : "￥2,000",
                "menu_description" : "키마카레, 라이스, 샐러드, 드링크바",
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "7-4",
                "image" : "seasonal7-4.jpg",
                "menu" : "미니언 키즈 카레 플레이트",
                "price" : "￥1,100",
                "menu_description" : `카레라이스, 새우튀김, 치킨 너겟, 프라이드 포테이토, 호박 샐러드, 푸딩, 드링크바※ 만 11세 이하의 어린이 메뉴`
            },
            {
                "idx" : "7-5",
                "image" : "seasonal7-5.jpg",
                "menu" : "디저트&드링크바 세트",
                "price" : "￥1,050",
                "menu_description" : "할로윈 미니언 슈크림 ~초코 바나나~"
            },
        ],
        "seasonal_logo" : "seasonal7.jpg",
        "seasonal_main_img" : "seasonal7-main.jpg",
        "tite" : "샌프란시스코의 창고를 개조한 행복이 가득한 카페",
        "sub_title" : "협찬: Coca-Cola(Japan)Company, Limited and Coca-Cola Bottlers Japan Inc.",
    },
    "restaurant8" : {
        "idx" : "8",
        "link" : "restaurant8",
        "location" : "파크 사이드 그릴",
        "service_type" : "풀 서비스",
        "payment_method" : "신용카드 사용 가능",
        "menu_provided" : `저 알레르기 메뉴(일본어 페이지 한정), 어린이 메뉴, 양식, 바・주류, 베지테리언(영어 페이지 한정)`,
        "japanese_page" : "https://www.usj.co.jp/web/ja/jp/service-guide/barrier-free/food-allergies",
        "englisgh_page" : "https://www.usj.co.jp/web/en/us/service-guide/barrier-free/dietary-restriction",
        "children_page" : "https://www.usj.co.jp/web/ko/kr/restaurants/kids-menu",
        "restaurant_bg" : "restaurant_bg8.jpg",
        "restaurant_map" : "restaurant_map8.jpg",
        "pickup_menu" : [
            {
                "idx" : "8-1",
                "image" : "seasonal8-1.jpg",
                "menu" : "갈릭 라이스를 곁들인 앵거스 비프와 아와오도리(치킨)의 그릴 플레이트",
                "price" : "￥3,800",
                "menu_description" : "앵거스 에이징 스테이크(숙성육), 아와오도리(치킨), 새우, 채소 그릴, 갈릭 라이스",
            },
            {
                "idx" : "8-2",
                "image" : "seasonal8-2.jpg",
                "menu" : "앵거스 에이징 스테이크 400g/250g",
                "price" : "￥5,300/￥4,100",
                "menu_description" : `그릴 설로인 스테이크그릴 립 아이 스테이크매시드 포테이토, 빵 포함`
            },
            {
                "idx" : "8-3",
                "image" : "seasonal8-3.jpg",
                "menu" : "뉴질랜드산 램 촙 ∼허브 풍미∼",
                "price" : "￥2,750",
                "menu_description" : "매시드 포테이토, 빵 포함",
            },
            {
                "idx" : "8-4",
                "image" : "seasonal8-4.jpg",
                "menu" : "도쿠시마현산 아와오도리 닭고기 머스터드 소스",
                "price" : "￥2,450",
                "menu_description" : "매시드 포테이토, 빵 포함",
            },
        ],
        "recommended_menu" : [
            {
                "idx" : "8-5",
                "image" : "seasonal8-5.jpg",
                "menu" : "키즈 샌드위치 플레이트",
                "price" : "￥1,400",
                "menu_description" : `치킨과 달걀 샌드위치, 프라이드 포테이토, 디저트, 오렌지 음료※ 만 11세 이하의 어린이 메뉴`
            },
            {
                "idx" : "8-6",
                "image" : "seasonal8-6.jpg",
                "menu" : `왼쪽) 그릴 파르페 ~바나나 카라멜리제&스파이시 파인~(오른쪽) 딸기 초콜릿 파르페`,
                "price" : `(왼쪽) ¥1,800(오른쪽) ¥1,500`,
                "menu_description" : `※14:00 ~ 17:00 한정 판매(레스토랑 영업시간에 따릅니다.)`
            },
        ],
        "seasonal_logo" : "seasonal8.jpg",
        "seasonal_main_img" : "seasonal8-main.jpg",
        "tite" : "전망 좋은 점포 내에서 맛보는 본격 에이징 비프(숙성 쇠고기)와 맥주로 호사로운 시간을.",
        "sub_title" : "협찬: Suntory Spirits Ltd."
    },
    
        
}