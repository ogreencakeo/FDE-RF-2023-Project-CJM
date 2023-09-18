const domFn = {
    qs: (x) => document.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsEl: (el, x) => el.querySelector(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
};

domFn.addEvt(window, "load", loadFn);

function loadFn() {
    console.log("로딩완료");
    const move_to_exhibition = domFn.qs(".move-to-exhibition");
    // 사자
    let saja_items_div = domFn.qs(".saja-items-div");
    let saja_nav_btn = domFn.qsa(".nav-btngo");
    let saja_item_arr = [saja_items, saja_items2, saja_items3, saja_items4, saja_items5, saja_items6];
    let saja_length_btn = domFn.qs(".saja-itmes-btnBx strong");
    const saja_nav_blength = saja_nav_btn.length;
    
    // 큐레이션
    let curation_box = domFn.qs(".shopping-curation-box");
    const curation_items_arr = [curation_items1, curation_items2, curation_items3, curation_items4];
    let shopping_curation_btn = domFn.qsa(".nav-btngo2");
    
    let hcode = "";
    let curation_hcode = "";

    // 카테고리 nav
    // let catagory_btn = domFn.qs('.catagory-icon');

    // let catagory_wrap = domFn.qs('.catagory-wrap');
    // let nav_code = '';
    // let catagory_btn2 = domFn.qs('.cata-wrap-nav1');

    // 카테고리
    // for(let x in catagory){
    //     nav_code += `
    //         <ul>
    //             <li>
    //                 <a href="#">
    //                     <div class="cata-wrap-nav1">
    //                         ${x}
    //                         <div class="cata-wrap-nav2">
    //                             ${domFn.addEvt(catagory_btn2, 'mouseover', showCata(catagory[x]))}
    //                         </div>
    //                     </div>
    //                 </a>
    //             </li>
    //         </ul>
    //     `;
    // }

    // // domFn.addEvt(catagory_btn, 'mouseover', showCata(catagory[x]));

    // function showCata(obj){
    //     console.log('로딩');
    //     for(let x in obj){
    //         console.log(x);
    //     }
    // }

    // function makeCatagory(obj){
    //     console.log('obj',obj);
    //     let nav_code='';
    //     for(let x in obj){
    //         // console.log(x);
    //         nav_code += `
    //             <dl>
    //                 <dt>${x}</dt>
    //                 ${obj[x].map((val) => `<dd><a href="#">${val}</a></dd>`).join("")}
    //             </dl>
    //         `;
    //     }
    //     return nav_code;
    // }
    // catagory_wrap.innerHTML = nav_code;

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

    // banner 슬라이드
    const banner_slide = domFn.qs(".side-content-box ul");
    const banner_btn = domFn.qsa(".side-content-box button");
    // console.log('banner_btn :', banner_btn);

    banner_btn.forEach((ele) => domFn.addEvt(ele, "click", goSlide));

    function goSlide() {
        console.log(" banner_slide 로딩완료");
        if (stsWheel) return;
        stsWheel = 1;
        setTimeout(() => (stsWheel = 0), 400);

        let isRight = this.classList.contains("rightbtn");
        domFn.qsaEl(banner_slide, "li");
        let eachOne = domFn.qsaEl(banner_slide, "li");

        if (isRight) {
            banner_slide.style.left = "-100%";
            banner_slide.style.transition = ".4s ease-in-out";
            setTimeout(() => {
                banner_slide.appendChild(eachOne[0]);
                banner_slide.style.left = "0";
                banner_slide.style.transition = "none";
            }, 400);
        } else {
            banner_slide.insertBefore(eachOne[eachOne.length - 1], eachOne[0]);
            banner_slide.style.left = "-100%";
            banner_slide.style.transition = "none";
            setTimeout(() => {
                banner_slide.style.left = "0";
                banner_slide.style.transition = ".4s ease-in-out";
            }, 0);
        }
    }

    
    // 사자
    saja_nav_btn.forEach((ele) => {
        domFn.addEvt(ele, "click", () => {
            saja_nav_btn.forEach((x) => x.classList.remove("nav-check-red"));
            ele.classList.add("nav-check-red");
            let btxt = ele.innerHTML;
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
                            <img src="./images/saja-item/${
                                saja_key[x]["이미지"]
                            }" alt="사자이미지" onClick="location.href='./sub.html'"></img>
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
        });
    });
    const sub_change = domFn.qsa(".saja-item-img");
    console.log("sub_change :", sub_change);
    // domFn.addEvt(sub_change, 'click', (ele)=>{
    //     ele.location.href = "./sub.html";
    // });

    const idName = { 두유: "du", 참깨흑임자드레싱: "cham", 클렌징폼: "cl", 도넛튜브: "do" };

    // 큐레이션
    // curation_hcode
    let alm = 0;
    for (let x of curation_items_arr) {
        for (let y in x) {
            for (let i = 0; i < 4; i++) {
                console.log("y :", y);
                // console.log('x[y] :', x[y]);
                curation_hcode += `
                    <div class = "curation-item-img" ${
                        (y == "두유" || y == "참깨흑임자드레싱" || y == "클렌징폼" || y == "도넛튜브") && i == 0
                            ? "id=" + idName[y]
                            : ""
                    }>
                        <div class = "curation-img-wrap">
                            <img src="./images/shopping-curation/${
                                x[y]["이미지"]
                            }" alt="큐레이션이미지"  onClick="location.href='./sub.html'"></img>
                            <section>
                                ${
                                    y == "더블팩샐러드" ||
                                    y == "히알루론산마스크팩" ||
                                    y == "도넛튜브" ||
                                    y == "해먹매쉬라운지튜브" ||
                                    y == "보조배터리" ||
                                    y == "콜맨레이체어" ||
                                    y == "춘천닭갈비" ||
                                    y == "춘천닭갈비"
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

        console.log(alm + "나야나");
        alm++;
    }
    curation_box.innerHTML = curation_hcode;

    // 큐레이션 색상
    shopping_curation_btn.forEach((ele) => {
        domFn.addEvt(ele, "click", (e) => {
            console.log("shopping_curation_btn 로딩완료");
            shopping_curation_btn.forEach((x) => x.classList.remove("nav-check-red"));
            ele.classList.add("nav-check-red");
        });
    });

    saja_nav_btn[0].click();

    // 큐레이션 버튼 이동
    const btnShop = domFn.qsa(".nav-btngo2");
    const targetId = { 간식타임: "du", 아삭아삭: "cham", 맑은피부: "cl", 캠핑가자: "do" };

    btnShop.forEach((ele) => {
        domFn.addEvt(ele, "click", () => {
            // console.log(ele.innerText);
            location.href = "index.html#" + targetId[ele.innerText];
        });
    });

    const snack_time = domFn.qs('#du').getBoundingClientRect().top // 간식타임
    const crunchy = domFn.qs('#cham').getBoundingClientRect().top; // 아삭아삭
    const clear_skin = domFn.qs('#cl').getBoundingClientRect().top; // 맑은피부
    const go_camping = domFn.qs('#do').getBoundingClientRect().top; // 캠핑가자
    
    domFn.addEvt(window, 'scroll', goCuration);

    // console.log('snack_time', snack_time);
    function goCuration(){
        shopping_curation_btn.forEach(ele=>ele.classList.remove('nav-check-red'));
        if(window.scrollY>snack_time){
            // shopping_curation_btn.forEach(ele=>ele.classList.remove('nav-check-red'));
            shopping_curation_btn[0].classList.add('nav-check-red');
        }
        if(window.scrollY>crunchy){
            // shopping_curation_btn.forEach(ele=>ele.classList.remove('nav-check-red'));
            shopping_curation_btn[1].classList.add('nav-check-red');
        }
        if(window.scrollY>clear_skin){
            // shopping_curation_btn.forEach(ele=>ele.classList.remove('nav-check-red'));
            shopping_curation_btn[2].classList.add('nav-check-red');
        }
        if(window.scrollY>go_camping){
            // shopping_curation_btn.forEach(ele=>ele.classList.remove('nav-check-red'));
            shopping_curation_btn[3].classList.add('nav-check-red');
        }
    }


    // 최근본 상품
    let viewed_img = domFn.qs(".recentley-viewed-img");
    let view_item = domFn.qsa(".saja-item-img>img");
    console.log(saja_item_arr[1]["감자"]["이미지"]);
    console.log(view_item);

    // 최근본 상품
    view_item.forEach((ele) => {
        console.log("ele", ele);
        domFn.addEvt(ele, "click", showViewed);
    });

    function showViewed() {
        console.log("this", this);
    }

}
