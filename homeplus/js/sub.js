const domFn = {
    qs : (x) => document.querySelector(x),
    qsa : (x) => document.querySelectorAll(x),
    qsEl : (el, x) => el.querySelector(x),
    qsaEl : (el, x) => el.querySelectorAll(x),
    addEvt : (ele, evt, fn) => ele.addEventListener(evt, fn)
}
domFn.addEvt(window, 'load', loadFn);



// 상품고시정보
const notice_info = domFn.qs('.notice-information table');
// 상품주의사항
const precautions_box = domFn.qs('.product-precautions');

function loadFn(){
    // 좋아요 버튼
    const like_btn = domFn.qs('.like-btn>span');

    // 좋아요 버튼
    domFn.addEvt(like_btn, 'click', ()=>{
        like_btn.classList.toggle('on');
    });

    // 상품고시정보
    for(let x of notice_value){
        console.log('notice_value x>>', x);
        console.log('notice_value x>>', x[0]);
        console.log('notice_value x>>', x[1]);
        notice_info.innerHTML += `
            <tr>
                <td>${x[0]}</td>
                <td>${x[1]}</td>
            </tr>
        `;
    }

    // 상품 주의사항
    for(let x of precautions_content){
        console.log(x);
        precautions_box.innerHTML += `
            <div class="product-precautions-box">
                <img src="./images/product-detail/${x[0]}.jpg" alt="">
                <div class="product-precautions-content">
                    <span>${x[1]}</span>
                    <span>
                        ${x[2]}
                    </span>
                </div>
            </div>
        `;
    }
}
