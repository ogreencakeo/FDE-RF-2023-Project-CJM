
// const domFn = {
//     qs: (x) => document.querySelector(x),
//     qsa: (x) => document.querySelectorAll(x),
//     qsEl: (el, x) => el.querySelector(x),
//     qsaEl: (el, x) => el.querySelectorAll(x),
//     addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn)
// }

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
    "커피/차": {},
    "생수/음료" :{},
    "주류이지픽업" :{},
    "과자/시리얼" :{},
    "베이커리/잼" :{},
    "라면/즉석식품/통조림" :{},
    "정류/양념/제빵" :{},
    "세탁/청소/욕실" :{},
    "제지/위생/뷰티" :{},
    "건강식품" :{},
    "반려동물" :{},
    "유아동/완구" :{},
    "주방용품" :{},
    "리빙/인테리어" :{},
    "패션의류/잡화" :{},
    "문구/취미용품" :{},
    "가전/디지털" :{},
    "자동차/레저" :{},
    "E쿠폰/여행" :{},
}


let catagory_btn = domFn.qs('.catagory-icon');
let catagory_wrap = domFn.qs('.catagory-wrap');

domFn.addEvt(window, "load", loadFn);

function loadFn() {

    domFn.addEvt(catagory_btn, "click", showCatagory);
    let nav_code = '<div class="fruit_wrap">';
    // 카테고리
    function showCatagory(){
        catagory_wrap.classList.toggle('catagory-wrap');
        catagory_wrap.classList.toggle('catagory-wrap-on');
        for(let x in category){
            nav_code += `
                    <ul>
                        <a href="#">
                            ${x}
                            <div>
                                <li>${makeCatagory(category[x])}</li>
                            </div>
                        </a>
                    </ul>
            `;
            console.log('catagory[x]', category[x]);
        }
        nav_code += '</div>';
        catagory_wrap.innerHTML = nav_code;
        console.log(catagory_wrap.innerHTML);
    }

    function makeCatagory(obj){
        for(let x in obj){
            console.log(x);
            nav_code += `
                ${x}
            `; 
        }
        
    }

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
