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
        이미지 : "saja-item1",
        추천상품문구 : "",
        이름: "신선농장 15Brix 샤인머스캣 1KG(박스)",
        정가가격: "19,990 원 ",
        할인율 : "15%",
        정가 : "16,990 원",
        가격그램 : "(100G 당 1,699원)",
        리뷰 : "평점4.2(3,333건)",
        월구매수: "월 53,410개 구매"
    },
    대란: {
        이미지 : "saja-item2",
        추천상품문구 : "온라인만 할인",
        이름: "행복대란 30개입",
        정가가격: "7,890 원 ",
        할인율 : "12%",
        정가 : "6,890 원",
        가격그램 : "(1개 당 229.7원)",
        리뷰 : "평점4.7(24,639건)",
        월구매수: "월 65,999개 구매"
    },
    소고기: {
        이미지 : "saja-item3",
        추천상품문구 : "",
        이름: "USDA 프라임 척아이롤(미국산 목심+등심) 100G/소고기",
        정가가격: "3,200 원 ",
        할인율 : "30%",
        정가 : "2,240 원",
        가격그램 : "(100G 당 2,240원)",
        리뷰 : "평점4.6(18,726건)",
        월구매수: "월 99,999+개 구매"
    },
    락토핏: {
        이미지 : "saja-item4",
        추천상품문구 : "건강 3만↑1만 상품권",
        이름: "종근당건강 락토핏 생유산균 코어 2G*60포",
        정가가격: "19,900 원 ",
        할인율 : "30%",
        정가 : "13,900 원",
        가격그램 : "(100G 당 11,583.3원)",
        리뷰 : "평점4.7(518건)",
        월구매수: "월 3,039개 구매"
    },
    점보리빙박스: {
        이미지 : "saja-item5",
        추천상품문구 : "▷픽업전용",
        이름: "홈플러스시그니처 점보리빙박스 75L(크림)",
        정가가격: "19,900 원 ",
        할인율 : "55%",
        정가 : "8,900 원",
        가격그램 : "",
        리뷰 : "",
        월구매수: "월 102개 구매"
    },
    깐마늘: {
        이미지 : "saja-item6",
        추천상품문구 : "",
        이름: "깐마늘 1kg(봉)",
        정가가격: "9,990 원",
        할인율 : "",
        정가 : "",
        가격그램 : "(100G 당 999원)",
        리뷰 : "평점4.7(15,793건)",
        월구매수: "월 9,887개 구매"
    }
};
const saja_items2 = {
    샤인머스캣2: {
        이미지 : "saja-item1",
        추천상품문구 : "",
        이름: "신선농장 15Brix 샤인머스캣 1KG(박스)",
        정가가격: "19,990 원 ",
        할인율 : "15%",
        정가 : "16,990 원",
        가격그램 : "(100G 당 1,699원)",
        리뷰 : "평점4.2(3,333건)",
        월구매수: "월 53,410개 구매"
    },
    대란2: {
        이미지 : "saja-item2",
        추천상품문구 : "온라인만 할인",
        이름: "행복대란 30개입",
        정가가격: "7,890 원 ",
        할인율 : "12%",
        정가 : "6,890 원",
        가격그램 : "(1개 당 229.7원)",
        리뷰 : "평점4.7(24,639건)",
        월구매수: "월 65,999개 구매"
    },
    소고기: {
        이미지 : "saja-item3",
        추천상품문구 : "",
        이름: "USDA 프라임 척아이롤(미국산 목심+등심) 100G/소고기",
        정가가격: "3,200 원 ",
        할인율 : "30%",
        정가 : "2,240 원",
        가격그램 : "(100G 당 2,240원)",
        리뷰 : "평점4.6(18,726건)",
        월구매수: "월 99,999+개 구매"
    },
    락토핏: {
        이미지 : "saja-item4",
        추천상품문구 : "건강 3만↑1만 상품권",
        이름: "종근당건강 락토핏 생유산균 코어 2G*60포",
        정가가격: "19,900 원 ",
        할인율 : "30%",
        정가 : "13,900 원",
        가격그램 : "(100G 당 11,583.3원)",
        리뷰 : "평점4.7(518건)",
        월구매수: "월 3,039개 구매"
    },
    점보리빙박스: {
        이미지 : "saja-item5",
        추천상품문구 : "▷픽업전용",
        이름: "홈플러스시그니처 점보리빙박스 75L(크림)",
        정가가격: "19,900 원 ",
        할인율 : "55%",
        정가 : "8,900 원",
        가격그램 : "",
        리뷰 : "",
        월구매수: "월 102개 구매"
    },
    깐마늘: {
        이미지 : "saja-item6",
        추천상품문구 : "",
        이름: "깐마늘 1kg(봉)",
        정가가격: "9,990 원",
        할인율 : "",
        정가 : "",
        가격그램 : "(100G 당 999원)",
        리뷰 : "평점4.7(15,793건)",
        월구매수: "월 9,887개 구매"
    }
};

const saja_item_arr = [saja_items, saja_items2];
console.log(saja_item_arr);


for(let i in saja_item_arr){
    console.log('saja_item_arr i >>', saja_item_arr);
    console.log('saja_item_arr [i] >>', saja_item_arr[i]);
    
}

window.addEventListener("load", function () {
    const move_to_exhibition = document.querySelector(".move-to-exhibition");
    let hcode = "";

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

    
    // 사자 
    let saja_hcode = "";
    const saja_items_div = document.querySelector('.saja-items-div');
    // console.log(saja_items_div);

    // saja_hcode += '<div class="saja-item-box"><div></div></div>';

    // <img src="./images/saja-item1.jpg" alt=""></img>

    console.log(saja_items);
    for(let x in saja_items){
        // console.log("x =>>>>>>>", x);
        // console.log("saja_items[x]['이미지'] : ", saja_items[x]["이미지"]);
        // console.log('saja_items[x] :', saja_items[x]);

        saja_hcode += `
            <div class="saja-item-box">
                <div class = "saja-item-img">
                    <img src="./images/${saja_items[x]["이미지"]}.jpg" alt="사자이미지${x}"></img>
                    <section>
                        ${(x == '깐마늘')? '<span style="display:none"></span>' : '<span><img src="./images/saja-icon1.png" alt=""></span>'}
                        <span><img src="./images/saja-icon2.png" alt=""></span>
                    </section>
                    <div class="saja-hover-btn">
                        <a>
                            <span>
                                <img src="./images/saja-hover-btn1.png" alt="">
                            </span>
                        </a>
                        <a>
                            <span>
                                <img src="./images/saja-hover-btn1.png" alt="">
                            </span>
                        </a>
                    </div>
                </div>
                <section>
                    <div class="saja-item-explanation">
                        <div class="saja-item-exp-name">
                            <p>${saja_items[x]["추천상품문구"]}</p>
                            <p>${saja_items[x]["이름"]}
                        </div>
                        <div class="saja-item-exp-price">
                            <p>${saja_items[x]["정가가격"]}</p>
                            <span>${saja_items[x]["할인율"]}</span>
                            <span>${saja_items[x]["정가"]}</span>
                            <span>${saja_items[x]["가격그램"]}</span>
                        </div>
                        <div class="saja-item-exp-review">
                            <span>${saja_items[x]["리뷰"]}</span>
                            <span>${saja_items[x]["월구매수"]}</span>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }
    saja_items_div.innerHTML = saja_hcode;


    ////////////////////////////

    // 사자물품 버튼에 따른 nav 갯수 구하기
    const saja_total = document.querySelector('.saja-total-btn');
    const saja_nav_btn = this.document.querySelector('.saja-event-nav-wrap').querySelectorAll('button');
    const saja_nav_blength = saja_nav_btn.length;
    let saja_hcode2 = "";
    let saja_length_btn = document.querySelector('.saja-itmes-btnBx').querySelector('strong');
    console.log('saja_nav_btn >',saja_nav_btn);


    for(let x of saja_nav_btn){
        x.onclick = () => {
            let btxt = x.innerHTML;
            console.log('btxt :', btxt);
            let saja_length;
            console.log(saja_nav_blength); // 6
            switch(btxt){
                case 'MD추천' : 
                    saja_length = 1;
                    break;
                case '신선한' : 
                    saja_length = 2;
                    break;
                case '식품' : 
                    saja_length = 3;
                    break;
                case '간편한' : 
                    saja_length = 4;
                    break;
                case '가공필템' : 
                    saja_length = 5;
                    break;
                case '생활용품' : 
                    saja_length = 6;
                    break;
            }
            saja_length_btn.innerHTML = `다음상품 ${saja_length} / ${saja_nav_blength}`;
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
    
});

