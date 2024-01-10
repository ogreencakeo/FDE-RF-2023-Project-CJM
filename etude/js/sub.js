window.onload = function() {
    window.scrollTo(0, 0);
};

// nav
const navList = document.querySelector('.nav-wrap ul');
let temp = [];
for (let i = 0; i < navData.length; i++) {
    temp[i] = `
        <li>${navData[i]}</li>
    `
}
navList.innerHTML += temp.join('');

// tint
const tintBx = document.querySelector('.sub-option-bx-wrap');

temp = [];

for (let i = 0; i < tintData.length; i++) {
    temp[i] = `
        <div class='tint-bx' onclick="showTintFn('${tintData2[i].img}', '${tintData2[i].txt}', '${tintData2[2].price}' )">
            <img src=${tintData[i]} alt='틴트이미지' />
        </div>
    `
}

tintBx.innerHTML += temp.join('');

const showTintFn = (modalImg, modalTxt, modalPrice) => {
    const TintTxt = document.querySelector('.modal-content h1');
    const TintPrice = document.querySelector('.modal-content h2');
    const TintImg = document.querySelector('.modal-content img');

    TintTxt.textContent = modalTxt;
    TintPrice.textContent = modalPrice;
    TintImg.src = modalImg;
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.sub-btn-bx').style.display = 'none';
}

document.querySelector('.close-btn').onclick = function () {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.sub-btn-bx').style.display = 'block';
}

// 서브 - 상세페이지
const detailPage = document.querySelector('.sub-explanation-bx1');

temp = [];
for (let i = 0; i < explanData.length; i++) {
    temp[i] = `
        <img src=${explanData[i]} alt='상세페이지 이미지' />
    `
}
detailPage.innerHTML += temp.join('');


// 서브 페이지 버튼 클릭시
const subBx1Btn = document.querySelector('.sub-bx1-btn button');
const subBx1Wrap = document.querySelector('.sub-explanation-bx1');

subBx1Btn.onclick = function(){
    subBx1Wrap.classList.toggle('on');

    const icon = subBx1Btn.querySelector('.fa-solid');
    icon.classList.toggle('fa-caret-down');
    icon.classList.toggle('fa-caret-up');

    const spanEle = subBx1Btn.querySelector('span:first-child');
    spanEle.textContent = subBx1Wrap.classList.contains('on')? '닫기' : '더보기';
};

// 서브 - 진성품, 상품정보
const subBx2Wrap = document.querySelector('.sub-explanation-bx2-wrap');

temp = [];

const makeCode = (data) => {
    const split_data = [];
    const make_split = data.split('^');
    console.log(make_split);
    for(let i=0; i<make_split.length; i++){
        split_data[i] = `
            <p>${make_split[i]}</p>
        `
    }
    return split_data;

}

productInfo.map((v, i) => {
    temp[i] = `
        <div class='sub-product-info-bx'>
            <div class='product-info1'>
                <p>${v.txt}</p>
            </div>
            <div class='product-info2 info2-${i+1}'>
                ${v.cont.indexOf('^') !== -1 ? makeCode(v.cont).join('') : `<p>${v.cont}</p>`}
            </div>
        </div>
    `
});

subBx2Wrap.innerHTML += temp.join('');

// 서브 - 진성품, 상품정보 - 클릭시 색상 변경
const subBtn = document.querySelectorAll('.sub-btn-bx li a');
console.log('subBtn : ', subBtn);

subBtn.forEach(ele => {
    window.addEventListener(ele, 'click', function(){
        console.log('hihih');
        subBtn.forEach(x => x.classList.remove('redBtn'));
        ele.classList.remove('redBtn');
    });
});


// 추천제품
const recommended_bx = document.querySelector('.recommended-bx-wrap');

temp = [];
recommendedData.map((v, i)=>{
    temp[i] = `
        <div class='recommended-bx'>
            <div class='recommended-bx-img' onmouseover='productImgFn(${i})' onmouseout='restoreProductFn(${i})'>
                <img src=${v.img} alt=${v.txt} id='product-img-${i}' />
            </div>
            <h2>${v.txt}</h2>
            <h3>${v.price}</h3>
        </div>
    `
});

recommended_bx.innerHTML += temp.join('');

const productImgFn = (idx) => {
    const imgEle = document.getElementById(`product-img-${idx}`);
    imgEle.src = `../image/sub/recommended/${idx+1}-2.jpg`;
};

const restoreProductFn = (idx) => {
    const imgEle = document.getElementById(`product-img-${idx}`);
    imgEle.src = recommendedData[idx].img;
};