const domFn = {
    qs : (x) => document.querySelector(x),
    qsa : (x) => document.querySelectorAll(x),
    qsEl : (el, x) => el.querySelector(x),
    qsaEl : (el, x) => el.querySelectorAll(x),
    addEvt : (ele, evt, fn) => ele.addEventListener(evt, fn)
}
domFn.addEvt(window, 'load', loadFn);

const notice_info = domFn.qs('.notice-information table');

const notice_value = [
    ['상품명', '23년 올해 첫 수확한 햇밤 1.5KG(봉)'], 
    ['상품코드/모델', '053068645 (상품문의 시 필요할 수 있으므로 참고하시기 바랍니다.)'], 
    ['포장단위별 내용물의 용량(중량), 수량, 크기','햇밤(봉)'], 
    ['생산자 및 소재지 (제조업체의 명칭 및 소재지)','대왕유통(주) / 신선식품은 점포별 수급 상황에 따라 생산자 정보가 상이할 수 있으나, 철저한 관리를 통해 동일한 품질로 제공하오니 쇼핑에 참고하시기 바랍니다.'], 
    ['농수산물의 원산지 표시에 관한 법률에 따른 원산지	','국내산'], 
    ['제조연월일, 유통기한(소비기한) 또는 품질유지기한	','가공되지 않은 농/수산물은 별도의 소비기한(유통기한)은 없으나 가급적 빠른 시일 내에 드시기를 권장 드립니다.'], 
    ['세부 품목군별 표시사항	','해당사항 없음'], 
    ['상품구성	','햇밤(봉)'], 
    ['보관방법 또는 취급방법	','구입 후 냉장보관하시기 바랍니다.'], 
    ['식품 등의 표시, 광고에 관한 법률에 따른 소비자안전을 위한 주의사항	','해당사항 없음'], 
    ['A/S 책임자 및 소비자상담 관련 전화번호	','02-3459-8000'], 
];

function loadFn(){
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
}

const precautions_content = [
    [product-detail-icon1,],
    [product-detail-icon1,],
    [product-detail-icon1,],
];