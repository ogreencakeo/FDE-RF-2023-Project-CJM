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

for(let i=0; i<tintData.length; i++){
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
}

document.querySelector('.close-btn').onclick = function(){
    document.querySelector('.modal').style.display = 'none';
}

// 서브 - 상세페이지
const detailPage = document.querySelector('.sub-explanation-bx1');

temp = [];
for(let i=0; i<explanData.length; i++){
    temp[i] = `
        <div class='sub-detail-bx'>
            <img src=${explanData[i]} alt='상세페이지 이미지' />
        </div>
    `
}
detailPage.innerHTML += temp.join('');