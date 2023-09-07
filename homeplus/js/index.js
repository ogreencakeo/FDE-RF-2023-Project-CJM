const exhibition_arr = [
    "즉시배송",
    "등급혜택",
    "이벤트/쿠폰",
    "모바일교환권",
    "하나더",
    "물가안정365",
    "홈플식탁",
    "홈플러스시그니처",
    "산지직",
];

// 사자 아이템
const saja_items = {
    샤인머스캣: {
        이미지: "saja-item1.jpg",
        추천상품문구: "",
        이름: "신선농장 15Brix 샤인머스캣 1KG(박스)",
        정가가격: "19,990 원 ",
        할인율: "15%",
        판매가: "16,990 원",
        가격그램: "(100G 당 1,699원)",
        리뷰: "평점4.2(3,333건)",
        월구매수: "월 53,410개 구매",
    },
    대란: {
        이미지: "saja-item2.jpg",
        추천상품문구: "온라인만 할인",
        이름: "행복대란 30개입",
        정가가격: "7,890 원 ",
        할인율: "12%",
        판매가: "6,890 원",
        가격그램: "(1개 당 229.7원)",
        리뷰: "평점4.7(24,639건)",
        월구매수: "월 65,999개 구매",
    },
    소고기: {
        이미지: "saja-item3.jpg",
        추천상품문구: "",
        이름: "USDA 프라임 척아이롤(미국산 목심+등심) 100G/소고기",
        정가가격: "3,200 원 ",
        할인율: "30%",
        판매가: "2,240 원",
        가격그램: "(100G 당 2,240원)",
        리뷰: "평점4.6(18,726건)",
        월구매수: "월 99,999+개 구매",
    },
    락토핏: {
        이미지: "saja-item4.jpg",
        추천상품문구: "건강 3만↑1만 상품권",
        이름: "종근당건강 락토핏 생유산균 코어 2G*60포",
        정가가격: "19,900 원 ",
        할인율: "30%",
        판매가: "13,900 원",
        가격그램: "(100G 당 11,583.3원)",
        리뷰: "평점4.7(518건)",
        월구매수: "월 3,039개 구매",
    },
    점보리빙박스: {
        이미지: "saja-item5.jpg",
        추천상품문구: "▷픽업전용",
        이름: "홈플러스시그니처 점보리빙박스 75L(크림)",
        정가가격: "19,900 원 ",
        할인율: "55%",
        판매가: "8,900 원",
        가격그램: "",
        리뷰: "",
        월구매수: "월 102개 구매",
    },
    깐마늘: {
        이미지: "saja-item6.jpg",
        추천상품문구: "",
        이름: "깐마늘 1kg(봉)",
        정가가격: "9,990 원",
        할인율: "",
        판매가: "",
        가격그램: "(100G 당 999원)",
        리뷰: "평점4.7(15,793건)",
        월구매수: "월 9,887개 구매",
    },
};

const saja_items2 = {
    밀감: {
        이미지: "saja-item2-1.jpg",
        추천상품문구: "",
        이름: "제주 하우스밀감 900G(팩)",
        정가가격: "10,990 원",
        할인율: "",
        판매가: "9,990 원",
        가격그램: "(100G 당 1,110원)",
        리뷰: "평점4.5(707건)",
        월구매수: "월 27,556개 구매",
    },
    감자: {
        이미지: "saja-item2-2.jpg",
        추천상품문구: "",
        이름: "상주 두백 감자 2KG(봉)",
        정가가격: "5,990 원",
        할인율: "",
        판매가: "",
        가격그램: "(100G 당 299.5원)",
        리뷰: "평점4.6(36건)",
        월구매수: "월 4,381개 구매",
    },
    오징어: {
        이미지: "saja-item2-3.jpg",
        추천상품문구: "",
        이름: "손질 오징어(원양산_대서양/대/해동) 마리",
        정가가격: "5,400 원 ",
        할인율: "30%",
        판매가: "3,780 원",
        가격그램: "(1개 당 3,780원)",
        리뷰: "평점4.7(4,684건)",
        월구매수: "월 4,257개 구매",
    },
    닭목살양념구이: {
        이미지: "saja-item2-4.jpg",
        추천상품문구: "",
        이름: "닭목살 양념구이 500G",
        정가가격: "9,990 원 ",
        할인율: "20%",
        판매가: "7,990 원",
        가격그램: "(100G 당 1,598원)",
        리뷰: "평점4.7(250건)",
        월구매수: "월 10,232개 구매",
    },
    로스트치킨: {
        이미지: "saja-item2-5.jpg",
        추천상품문구: "",
        이름: "홈플식탁 로스트 치킨",
        정가가격: "7,990 원",
        할인율: "12%",
        판매가: "6,990 원",
        가격그램: "",
        리뷰: "평점4.5(577건)",
        월구매수: "월 6,348개 구매",
    },
    고구마스틱: {
        이미지: "saja-item2-6.jpg",
        추천상품문구: "",
        이름: "바삭한 고구마스틱 330G(봉)",
        정가가격: "9,990 원",
        할인율: "",
        판매가: "",
        가격그램: "(100G 당 3,027.3원)",
        리뷰: "평점4.6(96건)",
        월구매수: "월 8,047개 구매",
    },
};

const saja_items3 = {
    사과: {
        이미지: "saja-item3-1.jpg",
        추천상품문구: "농할쿠폰적용시20%추가할인",
        이름: "유명산지 햇홍로사과 4-7입(봉)",
        정가가격: "15,990 원",
        할인율: "",
        판매가: "",
        가격그램: "(100G 당 1,230원)",
        리뷰: "평점4.6(3,947건)",
        월구매수: "월 41,829개 구매",
    },
    깐마늘: {
        이미지: "saja-item3-2.jpg",
        추천상품문구: "",
        이름: "깐마늘 1kg(봉)",
        정가가격: "7,990 원",
        할인율: "",
        판매가: "",
        가격그램: "(100G 당 799원)",
        리뷰: "평점4.7(15,923건)",
        월구매수: "월 12,689개 구매",
    },
    갈치: {
        이미지: "saja-item3-3.jpg",
        추천상품문구: "",
        이름: "제주 생물 갈치 마리 (대)",
        정가가격: "11,000 원",
        할인율: "40%",
        판매가: "6,600 원",
        가격그램: "(1개 당 6,600원)",
        리뷰: "평점4.4(4,029건)",
        월구매수: "월 13,320개 구매",
    },
    부채살양념구이: {
        이미지: "saja-item3-4.jpg",
        추천상품문구: "",
        이름: "부채살 양념구이 600G/소고기",
        정가가격: "15,990 원 ",
        할인율: "25%",
        판매가: "11,990 원",
        가격그램: "(100G 당 1,998.3원)",
        리뷰: "평점4.7(3,656건)",
        월구매수: "월 7,302개 구매",
    },
    티라미수: {
        이미지: "saja-item3-5.jpg",
        추천상품문구: "",
        이름: "[몽블랑제]콜드브루 티라미수 (1입)",
        정가가격: "6,500 원 ",
        할인율: "30%",
        판매가: "4,550 원",
        가격그램: "(10G 당 227.5원)",
        리뷰: "평점4.7(7,461건)",
        월구매수: "월 5,196개 구매",
    },
    강낭콩: {
        이미지: "saja-item3-6.jpg",
        추천상품문구: "",
        이름: "매화 강낭콩 1.8KG(통)",
        정가가격: "8,990 원",
        할인율: "",
        판매가: "",
        가격그램: "(100G 당 499.4원)",
        리뷰: "",
        월구매수: "월 56개 구매",
    },
};

const saja_items4 = {
    쌀국수: {
        이미지: "saja-item4-1.jpg",
        추천상품문구: "",
        이름: "생어거스틴 고기듬뿍 쌀국수 700G",
        정가가격: "6,990 원",
        할인율: "21%",
        판매가: "5,490 원",
        가격그램: "(100G 당 784.3원)",
        리뷰: "평점4.5(147건)",
        월구매수: "월 685개 구매",
    },
    피자치즈: {
        이미지: "saja-item4-2.jpg",
        추천상품문구: "",
        이름: "남양 드빈치 자연방목 피자 치즈 1KG",
        정가가격: "12,980 원",
        할인율: "",
        판매가: "",
        가격그램: "(10G 당 129.8원)",
        리뷰: "평점4.7(2,391건)",
        월구매수: "월 8,074개 구매",
    },
    츄러스: {
        이미지: "saja-item4-3.jpg",
        추천상품문구: "",
        이름: "미니 츄러스 270G",
        정가가격: "7,990 원 ",
        할인율: "37%",
        판매가: "4,990 원",
        가격그램: "(10G 당 184.8원)",
        리뷰: "평점4.5(164건)",
        월구매수: "월 585개 구매",
    },
    마열라면: {
        이미지: "saja-item4-4.jpg",
        추천상품문구: "2개↑20% 할인",
        이름: "오뚜기 마열라면 120G*4",
        정가가격: "4,980 원",
        할인율: "",
        판매가: "",
        가격그램: "(1개 당 1,245원)",
        리뷰: "평점4.8(72건)",
        월구매수: "월 4,468개 구매",
    },
    사양벌꿀: {
        이미지: "saja-item4-5.jpg",
        추천상품문구: "",
        이름: "녹차원 사양벌꿀 800G*2",
        정가가격: "18,990 원 ",
        할인율: "21%",
        판매가: "14,990 원",
        가격그램: "(100G 당 936.9원)",
        리뷰: "평점4.8(2,415건)",
        월구매수: "월 1,136개 구매",
    },
    오렌지망고: {
        이미지: "saja-item4-6.jpg",
        추천상품문구: "2개 구매시 9,900원",
        이름: "농심 카프리썬 오렌지망고 200ML*10",
        정가가격: "6,980 원",
        할인율: "",
        판매가: "",
        가격그램: "(100ML 당 349원)",
        리뷰: "평점4.8(5,912건)",
        월구매수: "월 5,288개 구매",
    },
};

const saja_items5 = {
    후랑크: {
        이미지: "saja-item5-1.jpg",
        추천상품문구: "",
        이름: "씨제이 육공육 더블에이징 후랑크 460G",
        정가가격: "9,490 원 ",
        할인율: "15%",
        판매가: "7,990 원",
        가격그램: "(10G 당 173.7원)",
        리뷰: "평점4.7(307건)",
        월구매수: "월 261개 구매",
    },
    오감자그라탕: {
        이미지: "saja-item5-2.jpg",
        추천상품문구: "2개↑30% 할인",
        이름: "오리온 오감자그라탕 115G",
        정가가격: "2,390 원",
        할인율: "",
        판매가: "",
        가격그램: "(10G 당 207.8원)",
        리뷰: "평점4.8(2,137건)",
        월구매수: "월 2,482개 구매",
    },
    농심그래놀라: {
        이미지: "saja-item5-3.jpg",
        추천상품문구: "",
        이름: "농심 켈로그 블루베리 아몬드 그래놀라 450G",
        정가가격: "9,290 원",
        할인율: "35%",
        판매가: "5,990 원",
        가격그램: "(100G 당 1,331.1원)",
        리뷰: "평점4.7(757건)",
        월구매수: "월 2,366개 구매",
    },
    클렌징앤쿨링샴푸: {
        이미지: "saja-item5-4.jpg",
        추천상품문구: "",
        이름: "아모레 려청아 딥 클렌징앤쿨링 샴푸 550ML",
        정가가격: "15,000 원 ",
        할인율: "50%",
        판매가: "7,500 원",
        가격그램: "(100ML 당 1,363.6원)",
        리뷰: "평점4.8(515건)",
        월구매수: "월 1,900개 구매",
    },
    욕실청소스프레이: {
        이미지: "saja-item5-5.jpg",
        추천상품문구: "",
        이름: "유한양행 유한락스 욕실 청소용 스프레이 715ML*2입",
        정가가격: "8,900 원 ",
        할인율: "22%",
        판매가: "6,900 원",
        가격그램: "(100ML 당 482.5원)",
        리뷰: "평점4.8(4,871건)",
        월구매수: "월 7,576개 구매",
    },
    지퍼락: {
        이미지: "saja-item5-6.jpg",
        추천상품문구: "개 구매시 9,900원",
        이름: "지퍼락 슬라이더냉장(대)26.8CM*24.1CM 12매",
        정가가격: "7,300 원",
        할인율: "",
        판매가: "",
        가격그램: "(1매 당 608.3원)",
        리뷰: "평점4.8(68건)",
        월구매수: "월 335개 구매",
    },
};

const saja_items6 = {
    프라이팬: {
        이미지: "saja-item6-1.jpg",
        추천상품문구: "",
        이름: "락앤락 더블랙 IH 프라이팬 28CM",
        정가가격: "33,900 원",
        할인율: "50%",
        판매가: "16,900 원",
        가격그램: "",
        리뷰: "평점4.6(63건)",
        월구매수: "월 156개 구매",
    },
    그린박스: {
        이미지: "saja-item6-2.jpg",
        추천상품문구: "2개↑50% 할인",
        이름: "데비마이어 그린박스 1.8L 2p",
        정가가격: "17,800 원",
        할인율: "",
        판매가: "",
        가격그램: "",
        리뷰: "평점4.6(364건)",
        월구매수: "월 240개 구매",
    },
    볼빅홀인: {
        이미지: "saja-item6-3.jpg",
        추천상품문구: "",
        이름: "볼빅 홀인 24구 화이트 2피스",
        정가가격: "37,400 원",
        할인율: "20%",
        판매가: "29,900 원",
        가격그램: "",
        리뷰: "평점4(1건)",
        월구매수: "월 74개 구매",
    },
    LED스탠드: {
        이미지: "saja-item6-4.jpg",
        추천상품문구: "",
        이름: "프리즘 LED 스탠드 PL-2700WH",
        정가가격: "49,900 원",
        할인율: "40%",
        판매가: "29,940 원",
        가격그램: "",
        리뷰: "평점4.7(62건)",
        월구매수: "월 55개 구매",
    },
    아로마디퓨저: {
        이미지: "saja-item6-5.jpg",
        추천상품문구: "",
        이름: "베르도 오닉스 아로마 디퓨저 500ML 블랙체리",
        정가가격: "19,900 원 ",
        할인율: "50%",
        판매가: "9,950 원",
        가격그램: "",
        리뷰: "평점4.7(207건)",
        월구매수: "월 471개 구매",
    },
    멀티쿠커: {
        이미지: "saja-item6-6.jpg",
        추천상품문구: "",
        이름: "오엘라 마스터 멀티쿠커 MC-01",
        정가가격: "179,000 원",
        할인율: "50%",
        판매가: "89,000 원",
        가격그램: "",
        리뷰: "평점4.7(17건)",
        월구매수: "월 39개 구매",
    },
};

const curation_items1 = {
    두유: {
        이미지: "shopping-curation1-1.jpg",
        추천상품문구: "",
        이름: "삼육 플러스 두유 950ML",
        정가가격: "2,600 원",
        할인율: "",
        판매가: "",
        가격그램: "(100ML 당 273.7원)",
        리뷰: "평점4.8(17,045건)",
        월구매수: "월 50,682개 구매",
    },
    꼬깔콘: {
        이미지: "shopping-curation1-2.jpg",
        추천상품문구: "",
        이름: "롯데 꼬깔콘 매콤한맛 67G",
        정가가격: "1,360 원",
        할인율: "",
        판매가: "",
        가격그램: "(10G 당 203원)",
        리뷰: "평점4.8(9,127건)",
        월구매수: "월 5,552개 구매",
    },
    크래커: {
        이미지: "shopping-curation1-3.jpg",
        추천상품문구: "",
        이름: "리츠 크래커 80G",
        정가가격: "1,500 원",
        할인율: "",
        판매가: "",
        가격그램: "(10G 당 187.5원)",
        리뷰: "평점4.8(6,788건)",
        월구매수: "월 3,614개 구매",
    },
    오래오화이트크림: {
        이미지: "shopping-curation1-4.jpg",
        추천상품문구: "",
        이름: "오레오 화이트크림 100G",
        정가가격: "1,400 원",
        할인율: "",
        판매가: "",
        가격그램: "(10G 당 140원)",
        리뷰: "평점4.8(23,219건)",
        월구매수: "월 21,420개 구매",
    },
};

const curation_items2 = {
    참깨흑임자드레싱: {
        이미지 : "shopping-curation2-1.jpg",
        추천상품문구 : "",
        이름 : "풀무원 참깨흑임자 드레싱 495G",
        정가가격 : "6,880 원",
        할인율 : "",
        판매가 : "",
        가격그램 : "(100G 당 1,389.9원)",
        리뷰 : "평점4.8(534건)",
        월구매수 : "월 386개 구매"
    },
    더블팩샐러드: {
        이미지 : "shopping-curation2-2.jpg",
        추천상품문구 : "",
        이름 : "더블팩 샐러드 500G(팩)",
        정가가격 : "5,990 원",
        할인율 : "",
        판매가 : "4,990 원",
        가격그램 : "(100G 당 998원)",
        리뷰 : "평점4.7(7,392건)",
        월구매수 : "월 19,183개 구매"
    },
    클래식양배추샐러드300g: {
        이미지 : "shopping-curation2-3.jpg",
        추천상품문구 : "",
        이름 : "클래식 양배추 샐러드 300G(팩)",
        정가가격 : "2,490 원",
        할인율 : "",
        판매가 : "",
        가격그램 : "(100G 당 830원)",
        리뷰 : "평점4.7(1,161건)",
        월구매수 : "월 2,636개 구매"
    },
    어린잎샐러드: {
        이미지 : "shopping-curation2-4.jpg",
        추천상품문구 : "",
        이름 : "어린잎 샐러드 80G(팩)",
        정가가격 : "1,990 원",
        할인율 : "",
        판매가 : "",
        가격그램 : "(10G 당 248.8원)",
        리뷰 : "평점4.7(2,188건)",
        월구매수 : "월 4,165개 구매"
    },
    // 양배추샐러드100g: {
    //     이미지 : "shopping-curation2-5.jpg",
    //     추천상품문구 : "",
    //     이름 : "양배추 샐러드 100G(팩)",
    //     정가가격 : "1,990 원",
    //     할인율 : "",
    //     판매가 : "",
    //     가격그램 : "(100G 당 1,990원)",
    //     리뷰 : "평점4.7(2,139건)",
    //     월구매수 : "월 9,397개 구매"
    // },
};
const curation_items3 = {
    클렌징폼: {
        이미지 : "shopping-curation3-1.jpg",
        추천상품문구 : "",
        이름 : "LG 히말라야 핑크솔트 클렌징폼 200ML",
        정가가격 : "9,900 원",
        할인율 : "",
        판매가 : "",
        가격그램 : "(100ML 당 4,950원)",
        리뷰 : "평점4.7(514건)",
        월구매수 : "월 1,399개 구매"
    },
    수딩마스크팩: {
        이미지 : "shopping-curation3-2.jpg",
        추천상품문구 : "",
        이름 : "메디힐 하이드라 수딩 마스크팩 20ML 10EA",
        정가가격 : "9,900 원",
        할인율 : "",
        판매가 : "",
        가격그램 : "(1매 당 990원)",
        리뷰 : "평점4.8(65건)",
        월구매수 : "월 505개 구매"
    },
    히알루론산마스크팩: {
        이미지 : "shopping-curation3-3.jpg",
        추천상품문구 : "",
        이름 : "SNP 펩타이드 히알루론산 마스크팩 20매",
        정가가격 : "10,900 원",
        할인율 : "",
        판매가 : "8,900 원",
        가격그램 : "(1개 당 445원)",
        리뷰 : "평점4.8(411건)",
        월구매수 : "월 512개 구매"
    },
    미백마스크팩: {
        이미지 : "shopping-curation3-4.jpg",
        추천상품문구 : "",
        이름 : "SNP 할로아시스 미백 마스크팩 10매",
        정가가격 : "9,900 원",
        할인율 : "",
        판매가 : "",
        가격그램 : "(1개 당 990원)",
        리뷰 : "평점4.8(343건)",
        월구매수 : "월 323개 구매"
    },
}
const curation_items4 = {
    도넛튜브: {
        이미지 : "shopping-curation4-1.jpg",
        추천상품문구 : "",
        이름 : "직수입 성인 도넛 튜브 107CM (색상 랜덤발송)",
        정가가격 : "12,900 원 ",
        할인율 : "",
        판매가 : "6,450 원",
        가격그램 : "",
        리뷰 : "평점4.7(135건)",
        월구매수 : "월 1,484개 구매"
    },
    블루투스랜턴스피커: {
        이미지 : "shopping-curation4-2.jpg",
        추천상품문구 : "",
        이름 : "인사이디 LED 블루투스 랜턴 스피커 Sunrise",
        정가가격 : "49,900 원",
        할인율 : "",
        판매가 : "",
        가격그램 : "",
        리뷰 : "평점5(2건)",
        월구매수 : ""
    },
    그리들: {
        이미지 : "shopping-curation4-3.jpg",
        추천상품문구 : "",
        이름 : "코베아 프라임 라운드 그리들 36CM",
        정가가격 : "46,000 원",
        할인율 : "",
        판매가 : "",
        가격그램 : "",
        리뷰 : "평점5(1건)",
        월구매수 : ""
    },
    해먹매쉬라운지튜브: {
        이미지 : "shopping-curation4-4.jpg",
        추천상품문구 : "",
        이름 : "직수입 해먹매쉬라운지 튜브 176CM (색상 랜덤발송)",
        정가가격 : "19,900 원 ",
        할인율 : "",
        판매가 : "9,950 원",
        가격그램 : "",
        리뷰 : "평점3.7(13건)",
        월구매수 : "월 187개 구매"
    },
    보조배터리: {
        이미지 : "shopping-curation4-5.jpg",
        추천상품문구 : "",
        이름 : "팬톤 3in1 보조배터리 10000mAh",
        정가가격 : "27,900 원 ",
        할인율 : "",
        판매가 : "23,900 원",
        가격그램 : "",
        리뷰 : "평점4.5(6건)",
        월구매수 : "월 15개 구매"
    },
    콜맨레이체어: {
        이미지 : "shopping-curation4-6.jpg",
        추천상품문구 : "",
        이름 : "콜맨 레이체어 (그린)",
        정가가격 : "140,000 원",
        할인율 : "",
        판매가 : "89,000 원",
        가격그램 : "",
        리뷰 : "평점5(4건)",
        월구매수 : "월 35개 구매"
    },
    춘천닭갈비: {
        이미지 : "shopping-curation4-7.jpg",
        추천상품문구 : "",
        이름 : "[밀키트] 애슐리 원조 춘천닭갈비 820G",
        정가가격 : "14,990 원",
        할인율 : "",
        판매가 : "12,990 원",
        가격그램 : "(100G 당 1,584.1원)",
        리뷰 : "평점4.4(206건)",
        월구매수 : "월 620개 구매"
    },
    제주흑돼지묵은지찜: {
        이미지 : "shopping-curation4-8.png",
        추천상품문구 : "",
        이름 : "[밀키트] 홈플러스시그니처 홈밀 흑돈가 제주 흑돼지 묵은지찜460G",
        정가가격 : "13,990 원",
        할인율 : "",
        판매가 : "10,990 원",
        가격그램 : "(100G 당 2,389.1원)",
        리뷰 : "평점4.6(187건)",
        월구매수 : "월 243개 구매"
    },
    버섯전골: {
        이미지 : "shopping-curation4-9.jpg",
        추천상품문구 : "",
        이름 : "[밀키트] 홈플러스시그니처 홈밀 소불고기 버섯전골 490G",
        정가가격 : "9,990 원",
        할인율 : "",
        판매가 : "",
        가격그램 : "(100G 당 2,038.8원)",
        리뷰 : "평점4.5(1,840건)",
        월구매수 : "월 2,461개 구매"
    },
}
// console.log('saja_item_arr [1] >>', saja_item_arr[1]);

const addEvt = (ele, evt, fn) => {
    ele.addEventListener(evt, fn);
}

window.addEventListener("load", loadFn());
function loadFn() {
    const move_to_exhibition = document.querySelector(".move-to-exhibition");
    // 사자
    let saja_items_div = document.querySelector(".saja-items-div");
    let saja_nav_btn = document.querySelectorAll(".nav-btngo");
    let saja_nbtn_length = saja_nav_btn.length; // 6
    let saja_item_arr = [saja_items, saja_items2, saja_items3, saja_items4, saja_items5, saja_items6];
    let saja_btn_next = document.querySelector(".saja-btn-next");
    let saja_length_btn = document.querySelector(".saja-itmes-btnBx").querySelector("strong");
    const saja_nav_blength = saja_nav_btn.length;
    // 큐레이션
    let curation_box = document.querySelector(".shopping-curation-box");
    const curation_items_arr = [curation_items1, curation_items2, curation_items3, curation_items4];
    let shopping_curation_btn = document.querySelectorAll('.shopping-curation ul li button');
    let hcode = "";
    let curation_hcode = "";

    // nav
    let stsWheel = 0;

    // nav
    hcode += "<nav><ul>";
    for (let i = 0; i < exhibition_arr.length; i++) {
        hcode += `
            <li>
                <a href = "#">
                    <img src="./images/move-to-exhibition${i + 1}.png" alt="">${exhibition_arr[i]}
                </a>
            </li>
        `;
    }
    hcode += "</ul></nav>";
    move_to_exhibition.innerHTML = hcode;
    {
        /* <section>
                ${
                    x == "깐마늘" ||
                    x == "감자" ||
                    x == "고구마스틱" ||
                    x == "사과" ||
                    x == "강낭콩" ||
                    x == "피자치즈" ||
                    x == "마열라면" ||
                    x == "오렌지망고" ||
                    x == "오감자그라탕" ||
                    x == "지퍼락" ||
                    x == "그린박스"
                        ? '<span style="display:none"></span>'
                        : '<span><img src="./images/saja-icon1.png" alt=""></span>'
                }
                <span><img src="./images/saja-icon2.png" alt=""></span>
            </section> */
    }
    // banner 슬라이드
    const banner_slide = document.querySelector('.side-content-box ul');
    const banner_btn = document.querySelectorAll('.side-content-box button');
    // console.log('banner_btn :', banner_btn);

    banner_btn.forEach(ele => addEvt(ele, 'click', goSlide));

    function goSlide(){
        if(stsWheel) return;
        stsWheel = 1;
        setTimeout(()=> stsWheel = 0 ,400);

        let isRight = this.classList.contains('rightbtn');
        let eachOne = banner_slide.querySelectorAll('li');

        if(isRight){
            banner_slide.style.left = '-100%';
            banner_slide.style.transition = '.4s ease-in-out';
            setTimeout(() => {
                banner_slide.appendChild(eachOne[0]);
                banner_slide.style.left = '0';
                banner_slide.style.transition = 'none';
            }, 400);
        }else{
            banner_slide.insertBefore(eachOne[eachOne.length-1], eachOne[0]);
            banner_slide.style.left = '-100%';
            banner_slide.style.transition = 'none';
            setTimeout(() => {
                banner_slide.style.left = '0';
                banner_slide.style.transition = '.4s ease-in-out';
            }, 0);
        }
    }

    
    // 큐레이션
    // curation_hcode 
    for (let x of curation_items_arr) {
        for(let y in x){
            for(let i=0; i<4; i++){
                console.log('y :', y);
                // console.log('x[y] :', x[y]);
                curation_hcode += `
                    <div class = "curation-item-img">
                        <div class = "curation-img-wrap">
                            <img src="./images/shopping-curation/${x[y]["이미지"]}" alt="큐레이션이미지"></img>
                            <section>
                                ${
                                    y == '더블팩샐러드' ||
                                    y == '히알루론산마스크팩' ||
                                    y == '도넛튜브' ||
                                    y == '해먹매쉬라운지튜브' ||
                                    y == '보조배터리' ||
                                    y == '콜맨레이체어' ||
                                    y == '춘천닭갈비' ||
                                    y == '춘천닭갈비'
                                        ? '<span style="display:none"></span>'
                                        : '<span><img src="./images/saja-icon1.png" alt=""></span>'
                                }
                                <span><img src="./images/delivery-market.png" alt=""></span>
                            </section>
                            <div class="curation-hover-btn">
                                <a href="#">
                                    <span>
                                        <img src="./images/saja-hover-btn1.png" alt="">
                                    </span>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="./images/saja-hover-btn2.png" alt="">
                                    </span>
                                </a>
                            </div>
                        </div>
                        <section>
                            <div class="curation-item-explanation">
                                <div class="curation-item-exp-name">
                                    <p>${x[y]["추천상품문구"]}</p>
                                    <p>${x[y]["이름"]}
                                </div>
                                <div class="curation-item-exp-price">
                                    <p>${x[y]["정가가격"]}</p>
                                    <span>${x[y]["할인율"]}</span>
                                    <span>${x[y]["판매가"]}</span>
                                    <span>${x[y]["가격그램"]}</span>
                                </div>
                                <div class="curation-item-exp-review">
                                    <span>${x[y]["리뷰"]}</span>
                                    <span>${x[y]["월구매수"]}</span>
                                </div>
                            </div>
                        </section>
                    </div> 
                `;
            }
        }
        
    }
    curation_box.innerHTML = curation_hcode;
    // 사자
    

    for (let x of saja_nav_btn) {
        x.onclick = () => {
            let btxt = x.innerHTML;
            // console.log('btxt :', btxt);
            let saja_length;
            // console.log(saja_nav_blength); // 6
            switch (btxt) {
                case "MD추천":
                    saja_length = 1;
                    saja_key = saja_item_arr[0];
                    break;
                case "신선한":
                    saja_length = 2;
                    saja_key = saja_item_arr[1];
                    break;
                case "식품":
                    saja_length = 3;
                    saja_key = saja_item_arr[2];
                    break;
                case "간편한":
                    saja_length = 4;
                    saja_key = saja_item_arr[3];
                    break;
                case "가공필템":
                    saja_length = 5;
                    saja_key = saja_item_arr[4];
                    break;
                case "생활용품":
                    saja_length = 6;
                    saja_key = saja_item_arr[5];
                    break;
            }
            saja_length_btn.innerHTML = `다음상품 ${saja_length} / ${saja_nav_blength}`;
            // console.log("saja_key:", saja_key);

            let saja_hcode = "";
            for (let x in saja_key) {
                // console.log("x :", x);
                // console.log("saja_key[x]:", saja_key[x]);
                // console.log('saja_key[x]["이미지"] :', saja_key[x]["이미지"]);
                saja_hcode += `
                    <div class="saja-item-box">
                        <div class = "saja-item-img">
                            <img src="./images/saja-item/${saja_key[x]["이미지"]}" alt="사자이미지"></img>
                            <section>
                                ${
                                    x == "깐마늘" ||
                                    x == "감자" ||
                                    x == "고구마스틱" ||
                                    x == "사과" ||
                                    x == "강낭콩" ||
                                    x == "피자치즈" ||
                                    x == "마열라면" ||
                                    x == "오렌지망고" ||
                                    x == "오감자그라탕" ||
                                    x == "지퍼락" ||
                                    x == "그린박스"
                                        ? '<span style="display:none"></span>'
                                        : '<span><img src="./images/saja-icon1.png" alt=""></span>'
                                }
                                <span>
                                    <img src="./images/delivery-market.png" alt="">
                                </span>
                            </section>
                            <div class="saja-hover-btn">
                                <a href="#">
                                    <span>
                                        <img src="./images/saja-hover-btn1.png" alt="">
                                    </span>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="./images/saja-hover-btn2.png" alt="">
                                    </span>
                                </a>
                            </div>
                        </div>
                        <section>
                            <div class="saja-item-explanation">
                                <div class="saja-item-exp-name">
                                    <p>${saja_key[x]["추천상품문구"]}</p>
                                    <p>${saja_key[x]["이름"]}
                                </div>
                                <div class="saja-item-exp-price">
                                    <p>${saja_key[x]["정가가격"]}</p>
                                    <span>${saja_key[x]["할인율"]}</span>
                                    <span>${saja_key[x]["판매가"]}</span>
                                    <span>${saja_key[x]["가격그램"]}</span>
                                </div>
                                <div class="saja-item-exp-review">
                                    <span>${saja_key[x]["리뷰"]}</span>
                                    <span>${saja_key[x]["월구매수"]}</span>
                                </div>
                            </div>
                        </section>
                    </div>
                `;
                // console.log(saja_hcode);
            }
            saja_items_div.innerHTML = saja_hcode;
        };
        // console.log("saja_items_div.innerHTML ", saja_items_div.innerHTML);
    }

    for(let x of shopping_curation_btn){
        let shopping_curation_btxt = shopping_curation_btn.innerText;
        
        x.onclick = () => {
            console.log('shopping_curation_btn x >>>', x);
            switch(shopping_curation_btxt){
                case "간식타임":
                    curation_box.scrollIntoView({behavior:'smooth'});
            }
            console.log('curation_box.scrollTo(500,0) :', x.scrollTo(500,0));
        }
    }
}

// for(let i of saja_nav_btn){
//     let btxt = i.innerText;
//     // console.log("i>", i);
//     console.log("btxt>", btxt);
//     console.log("btxt[0]>", btxt);
//     i.onclick = () => {
//         console.log('i >', i.innerText);
//         let color_change = '';

//         color_change.innerHTML +

//         color_change.style.color = 'red';
//         console.log('color_change >', color_change );
//         switch(btxt){
//             case "MD추천":
//                 console.log("red");
//                 color_change.style.color = 'red';
//         }
//     }
//     // saja_nav_btn.style.color = 'red';
// }

// console.log('saja_nav_btn', saja_nav_btn);
// let saja_hcode2 = '';
// saja_total.innerHTML = `
//     <span>/ ${saja_nav_btn.length}</span>
// `;

// //

// for(let i=0; i<saja_nav_btn.length; i++){

// }
