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
    아이템1: {
        이미지 : "saja-item1",
        추천상품문구 : "",
        이름: "신선농장 15Brix 샤인머스캣 1KG(박스)",
        정가가격: "19,990 원 ",
        할인율 : "15%",
        정가 : "16,990 원",
        가격100g : "100G 당 1,699원",
        리뷰 : "평점4.2(3,333건)",
        월구매수: "월 53,410개 구매"
    },
    아이템2: {
        이미지 : "saja-item2",
        추천상품문구 : "",
        이름: "신선농장 15Brix 샤인머스캣 1KG(박스)",
        정가가격: "19,990 원 ",
        할인율 : "15%",
        정가 : "16,990 원",
        가격100g : "100G 당 1,699원",
        리뷰 : "평점4.2(3,333건)",
        월구매수: "월 53,410개 구매"
    },
    아이템3: {
        이미지 : "saja-item3",
        추천상품문구 : "",
        이름: "신선농장 15Brix 샤인머스캣 1KG(박스)",
        정가가격: "19,990 원 ",
        할인율 : "15%",
        정가 : "16,990 원",
        가격100g : "100G 당 1,699원",
        리뷰 : "평점4.2(3,333건)",
        월구매수: "월 53,410개 구매"
    },
    아이템4: {
        이미지 : "saja-item4",
        추천상품문구 : "",
        이름: "신선농장 15Brix 샤인머스캣 1KG(박스)",
        정가가격: "19,990 원 ",
        할인율 : "15%",
        정가 : "16,990 원",
        가격100g : "100G 당 1,699원",
        리뷰 : "평점4.2(3,333건)",
        월구매수: "월 53,410개 구매"
    },
    아이템5: {
        이미지 : "saja-item5",
        추천상품문구 : "",
        이름: "신선농장 15Brix 샤인머스캣 1KG(박스)",
        정가가격: "19,990 원 ",
        할인율 : "15%",
        정가 : "16,990 원",
        가격100g : "100G 당 1,699원",
        리뷰 : "평점4.2(3,333건)",
        월구매수: "월 53,410개 구매"
    },
    아이템6: {
        이미지 : "saja-item6",
        추천상품문구 : "",
        이름: "신선농장 15Brix 샤인머스캣 1KG(박스)",
        정가가격: "19,990 원 ",
        할인율 : "15%",
        정가 : "16,990 원",
        가격100g : "100G 당 1,699원",
        리뷰 : "평점4.2(3,333건)",
        월구매수: "월 53,410개 구매"
    }
};


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
    const saja_itmes_div = document.querySelectorAll('.saja-itmes-div');
    console.log(saja_item_box);

    // <img src="./images/saja-item1.jpg" alt=""></img>
    for(let x in saja_items){
        console.log("x =", x);
        console.log("saja_items[x]['이미지'] : ", saja_items[x]["이미지"]);
        saja_hcode += `
            <div class="saja-item-box">
                <div>
                    <img src="../images/${saja_items[x]["이미지"]}.jpg" alt="사자이미지${x}"></img>
                </div>
            </div>
        `;
    }

    saja_itmes_div.innerHTML = saja_hcode;
});

