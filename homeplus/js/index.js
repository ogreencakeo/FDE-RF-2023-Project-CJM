
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
    let shopping_curation_btn = document.querySelectorAll('.nav-btngo2');
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
            saja_nav_btn.forEach(x => x.classList.remove('nav-check-red'));
            x.classList.add('nav-check-red');
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
                            <img src="./images/saja-item/${saja_key[x]["이미지"]}" alt="사자이미지">
                            </img>
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
    // const sub_change = domFn.qs('.saja-item-img img');
    // console.log('sub_change :', sub_change);
    // domFn.addEvt(sub_change, 'click', (ele)=>{
    //     ele.location.href = "./sub.html";
    // });


    for(let x of shopping_curation_btn){
        
        let shopping_curation_btxt = shopping_curation_btn.innerText;
        console.log('shopping_curation_btn x>>', x);
        
        x.onclick = () => {
            console.log(x.classList.contains('nav-check-red'));
            shopping_curation_btn.forEach(x=> x.classList.remove('nav-check-red'));
            x.classList.add('nav-check-red');
            console.log(x.classList.contains('nav-check-red'))
            // console.log('shopping_curation_btn x >>>', x);
            
        }
    }
}

