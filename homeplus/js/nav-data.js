const category = {
    "과일": {
        "사과/배": ["배", "사과"],
        "감귤/만감류": ["감귤", "천혜향/한라봉/기타만감류"],
        "토마토": ["방울토마토", "토마토"],
        "딸기/체리/블루베리": ["딸기", "블루베리", "체리"],
        "감/홍시/곶감/밤": ["감/홍시", "곶감", "밤"],
        "수박/메론/참외": ["메론", "수박", "참외"],
        "포도/자두/복숭아": ["국산포도", "복숭아", "수입포도", "자두"],
        "바나나/파인애플": ["바나나", "파인애플"],
        "오렌지/자몽/레몬": ["레몬/라임", "오렌지", "자몽/메로골드"],
        "키위/석류/아보카도": ["그린키위/골드키위/참다래", "석류", "아보카도"],
        "망고/열대과일": ["두리안/망고/망고스틴", "야자/용과/코코넛/파파야/패션후르츠"],
        "기타 과일": ["기타과일", "매실/모과/무화과/유자", "산딸기/아로니아", "살구/플럼코트"]
    },
    "쌀/잡곡": {

    },
    "채소": {},
    "견과": {},
    "수산물/건어물": {},
    "정육/계란": {},
    "친환경/유기농": {},
    "델리/치킨/초밥": {},
    "우유/유제품": {},
    "냉장/냉동/밀키드": {},
    "두부/김치/반찬": {},
    "커피/차": {}
}


const domFn = {
    qs: (x) => document.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsEl: (el, x) => el.querySelector(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn)
}


domFn.addEvt(window, "load", loadFn);

function loadFn() {
    for (let x in category) {
        console.log(x);
        makeCode(category[x]);
    }

    function makeCode(obj) {
        for (let x in obj) {
            console.log("obj x>>>>>>>>>>", x);
            // console.log("obj[x] >>>>>>>>>>", obj[x]);
            obj[x].map(val=>console.log('val :', val));
        }
    }
}
