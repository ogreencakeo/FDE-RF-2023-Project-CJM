const navData = [
    "PRODUCT", "BRAND", "MAKEUP LOOK", "STORE", "FOUNDATION FACTORY"
];

const tintData = [
    "../image/sub/tint/1-1.jpg",
    "../image/sub/tint/2-1.jpg",
    "../image/sub/tint/3-1.jpg",
    "../image/sub/tint/4-1.jpg",
    "../image/sub/tint/5-1.jpg",
    "../image/sub/tint/6-1.jpg",
];


const tintData2 = [
    {
        img: '../image/sub/tint/1-2.png',
        txt: '아날로그 로즈',
        price: '12000원'
    },
    {
        img: '../image/sub/tint/2-2.png',
        txt: '빈티지 레드',
        price: '12000원'
    },
    {
        img: '../image/sub/tint/3-2.png',
        txt: '멜로우 피치',
        price: '12000원'
    },
    {
        img: '../image/sub/tint/4-2.png',
        txt: '진저 밀크티',
        price: '12000원'
    },
    {
        img: '../image/sub/tint/5-2.png',
        txt: '미드나잇 모브',
        price: '12000원'
    },
    {
        img: '../image/sub/tint/6-2.png',
        txt: '소프트 월넛',
        price: '12000원'
    },
];

const explanData = [
    '../image/sub/explanation/1.jpg',
    '../image/sub/explanation/2.jpg',
    '../image/sub/explanation/3.jpg',
    '../image/sub/explanation/4.jpg',
    '../image/sub/explanation/5.jpg',
    '../image/sub/explanation/6.gif',
    '../image/sub/explanation/7.jpg',
    '../image/sub/explanation/8.jpg',
    '../image/sub/explanation/9.jpg',
];

const productInfo = [
    {
        txt: '전성분/상품정보제공고시',
        cont: '본 상품정보는 공정거래위원회의 「전자상거래 등에서의 상품정보제공 고시」에 따라 작성되었습니다.'
    },
    {
        txt: '제품명',
        cont: '픽싱틴트 4g'
    },
    {
        txt: '제품 주요 사양· 피부타입 · 색상 등',
        cont: '모든피부용'
    },
    {
        txt: '사용기한',
        cont: '상품 발송일 기준으로 사용기한이 12개월 이상 남은 상품만을 판매'
    },
    {
        txt: '제조사 및 책임판매업자',
        cont: '인터코스코리아 / ㈜에뛰드'
    },
    {
        txt: '제조국',
        cont: '한국'
    },
    {
        txt: '전성분',
        cont: `#1 아날로그 로즈 - 정제수,아이소도데케인,다이메티콘,비닐다이메티콘/메티콘실세스퀴옥세인크로스폴리머,부틸렌글라이콜,다이스테아다이모늄헥토라이트,트라이칼슘포스페이트,다이메티콘/비닐다이메티콘크로스폴리머,솔비탄아이소스테아레이트,라우릴폴리글리세릴-3폴리다이메틸실록시에틸다이메티콘,다이아이소스테아릴말레이트,다이글리세린,세틸피이지/피피지-10/1다이메티콘,스테아릴다이메티콘,마그네슘설페이트,다이페닐실록시페닐트라이메티콘,1,2-헥산다이올,프로필렌카보네이트,티타늄디옥사이드 (CI 77891),적색202호,폴리글리세릴-3다이아이소스테아레이트,옥타데센,아크릴레이트/폴리트라이메틸실록시메타크릴레이트코폴리머,황색4호,폴리글리세릴-3폴리다이메틸실록시에틸다이메티콘,향료,솔비탄올리베이트,실리카다이메틸실릴레이트,적색산화철,황색5호,트라이에톡시카프릴릴실레인,적색104호의(1),솔비탄세스퀴올리에이트,에틸헥실글리세린,청색1호,적색201호,토코페롤,펜타에리스리틸테트라-다이-T-부틸하이드록시하이드로신나메이트^
        #2 빈티지 레드 - 정제수,아이소도데케인,다이메티콘,비닐다이메티콘/메티콘실세스퀴옥세인크로스폴리머,부틸렌글라이콜,다이스테아다이모늄헥토라이트,트라이칼슘포스페이트,다이메티콘/비닐다이메티콘크로스폴리머,솔비탄아이소스테아레이트,라우릴폴리글리세릴-3폴리다이메틸실록시에틸다이메티콘,다이글리세린,다이아이소스테아릴말레이트,세틸피이지/피피지-10/1다이메티콘,스테아릴다이메티콘,마그네슘설페이트,다이페닐실록시페닐트라이메티콘,1,2-헥산다이올,프로필렌카보네이트,티타늄디옥사이드 (CI 77891),폴리글리세릴-3다이아이소스테아레이트,옥타데센,적색202호,아크릴레이트/폴리트라이메틸실록시메타크릴레이트코폴리머,적색산화철,폴리글리세릴-3폴리다이메틸실록시에틸다이메티콘,향료,솔비탄올리베이트,실리카다이메틸실릴레이트,흑색산화철,황색5호,트라이에톡시카프릴릴실레인,적색104호의(1),에틸헥실글리세린,솔비탄세스퀴올리에이트,황색4호,토코페롤,펜타에리스리틸테트라-다이-T-부틸하이드록시하이드로신나메이트^
        #3 멜로우 피치 - 정제수,아이소도데케인,다이메티콘,비닐다이메티콘/메티콘실세스퀴옥세인크로스폴리머,부틸렌글라이콜,다이스테아다이모늄헥토라이트,트라이칼슘포스페이트,다이메티콘/비닐다이메티콘크로스폴리머,솔비탄아이소스테아레이트,다이아이소스테아릴말레이트,라우릴폴리글리세릴-3폴리다이메틸실록시에틸다이메티콘,티타늄디옥사이드 (CI 77891),다이글리세린,세틸피이지/피피지-10/1다이메티콘,스테아릴다이메티콘,마그네슘설페이트,다이페닐실록시페닐트라이메티콘,1,2-헥산다이올,프로필렌카보네이트,적색산화철,폴리글리세릴-3다이아이소스테아레이트,옥타데센,아크릴레이트/폴리트라이메틸실록시메타크릴레이트코폴리머,폴리글리세릴-3폴리다이메틸실록시에틸다이메티콘,적색202호,향료,황색5호,솔비탄올리베이트,실리카다이메틸실릴레이트,트라이에톡시카프릴릴실레인,적색201호,솔비탄세스퀴올리에이트,황색4호,에틸헥실글리세린,흑색산화철,청색1호,토코페롤,펜타에리스리틸테트라-다이-T-부틸하이드록시하이드로신나메이트^
        #4 진저 밀크티 - 정제수,아이소도데케인,다이메티콘,비닐다이메티콘/메티콘실세스퀴옥세인크로스폴리머,부틸렌글라이콜,다이스테아다이모늄헥토라이트,트라이칼슘포스페이트,다이메티콘/비닐다이메티콘크로스폴리머,솔비탄아이소스테아레이트,다이아이소스테아릴말레이트,라우릴폴리글리세릴-3폴리다이메틸실록시에틸다이메티콘,티타늄디옥사이드 (CI 77891),다이글리세린,세틸피이지/피피지-10/1다이메티콘,스테아릴다이메티콘,마그네슘설페이트,다이페닐실록시페닐트라이메티콘,1,2-헥산다이올,프로필렌카보네이트,적색산화철,폴리글리세릴-3다이아이소스테아레이트,옥타데센,아크릴레이트/폴리트라이메틸실록시메타크릴레이트코폴리머,폴리글리세릴-3폴리다이메틸실록시에틸다이메티콘,적색202호,향료,황색5호,솔비탄올리베이트,실리카다이메틸실릴레이트,트라이에톡시카프릴릴실레인,적색201호,솔비탄세스퀴올리에이트,황색4호,에틸헥실글리세린,흑색산화철,청색1호,토코페롤,펜타에리스리틸테트라-다이-T-부틸하이드록시하이드로신나메이트^
        #5 미드나잇 모브 - 정제수,아이소도데케인,다이메티콘,비닐다이메티콘/메티콘실세스퀴옥세인크로스폴리머,부틸렌글라이콜,다이스테아다이모늄헥토라이트,트라이칼슘포스페이트,다이메티콘/비닐다이메티콘크로스폴리머,솔비탄아이소스테아레이트,다이아이소스테아릴말레이트,라우릴폴리글리세릴-3폴리다이메틸실록시에틸다이메티콘,티타늄디옥사이드 (CI 77891),다이글리세린,세틸피이지/피피지-10/1다이메티콘,스테아릴다이메티콘,마그네슘설페이트,다이페닐실록시페닐트라이메티콘,1,2-헥산다이올,프로필렌카보네이트,폴리글리세릴-3다이아이소스테아레이트,옥타데센,아크릴레이트/폴리트라이메틸실록시메타크릴레이트코폴리머,적색202호,폴리글리세릴-3폴리다이메틸실록시에틸다이메티콘,향료,황색4호,솔비탄올리베이트,실리카다이메틸실릴레이트,적색산화철,황색5호,흑색산화철,트라이에톡시카프릴릴실레인,솔비탄세스퀴올리에이트,청색1호,에틸헥실글리세린,적색201호,적색104호의(1),적색104호의(1),황색4호,토코페롤,펜타에리스리틸테트라-다이-T-부틸하이드록시하이드로신나메이트^
        #6 소프트 월넛 - 정제수, 아이소도데케인, 다이메티콘, 비닐다이메티콘/메티콘실세스퀴옥세인크로스폴리머, 부틸렌글라이콜, 다이스테아다이모늄헥토라이트, 트라이칼슘포스페이트, 다이아이소스테아릴말레이트, 다이메티콘/비닐다이메티콘크로스폴리머, 솔비탄아이소스테아레이트, 라우릴폴리글리세릴-3폴리다이메틸실록시에틸다이메티콘, 다이글리세린, 세틸피이지/피피지-10/1다이메티콘, 스테아릴다이메티콘, 마그네슘설페이트, 1,2-헥산다이올, 다이페닐실록시페닐트라이메티콘, 프로필렌카보네이트, 적색226호, 폴리글리세릴-3다이아이소스테아레이트, 티타늄디옥사이드 (CI 77891), 적색산화철, 옥타데센, 아크릴레이트/폴리트라이메틸실록시메타크릴레이트코폴리머, 흑색산화철, 폴리글리세릴-3폴리다이메틸실록시에틸다이메티콘, 향료, 실리카다이메틸실릴레이트, 솔비탄올리베이트, 황색5호, 트라이에톡시카프릴릴실레인, 적색227호, 에틸헥실글리세린, 솔비탄세스퀴올리에이트, 알루미늄하이드록사이드, 청색1호, 토코페롤, 펜타에리스리틸테트라-다이-T-부틸하이드록시하이드로신나메이트`
    },
    {
        txt: '화장품법에 따른 기능성 화장품 심사를 필함',
        cont: '해당사항없음'
    },
    {
        txt: '사용할 때의 주의사항',
        cont: `1) 화장품 사용 시 또는 사용 후 직사광선에 의하여 사용부위가 붉은반점, 부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우 전문의 등과 상담할 것^
            2) 상처가 있는 부위 등에는 사용을 자제할 것^
            3) 보관 및 취급 시의 주의사항^
            가) 어린이의 손이 닿지 않는 곳에 보관할 것^
            나) 직사광선을 피해서 보관할 것^
            4) 제시된 사용법 이외의 용도로 사용하지 말 것`
    },
    {
        txt: '품질 보증 기준',
        cont: '본 상품에 이상이 있을 경우 공정거래위원회 고시 「소비자분쟁해결기준」에 따라 보상해드립니다.'
    },
    {
        txt: '소비자 상담 관련 전화번호',
        cont: '고객상담실 1544-5418'
    },
];

const recommendedData = [
    {
        img : '../image/sub/recommended/1-1.jpg',
        txt : '입꼬리 메이커 0.8g',
        price : '12,000원'
    },
    {
        img : '../image/sub/recommended/2-1.jpg',
        txt : '크레마 벨벳 틴트 3.6g',
        price : '12,000원'
    },
    {
        img : '../image/sub/recommended/3-1.jpg',
        txt : '글라스 루즈 틴트 3.2g',
        price : '14,000원'
    },
    {
        img : '../image/sub/recommended/4-1.jpg',
        txt : '시럽 글로시 밤 2.5g',
        price : '14,000원'
    },
];