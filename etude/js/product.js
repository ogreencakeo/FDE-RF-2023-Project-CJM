window.onload = function () {
    window.scrollTo(0, 0);
};

// 네비 리스트
const navList = document.querySelector(".nav-wrap ul");

let temp = [];
navData.map((v, i) => {
    temp[i] = `
        <li>
            <a href=${v.link}>
                ${v.txt}
            </a>
        </li>
    `
}).join('');

navList.innerHTML += temp.join("");


// 네비 스크롤 내리시 hide 처리하기
let lastPosiont = 0;
const nav = document.querySelector(".nav-wrap");

const handleSroll = () => {
    let scrollPostion = window.scrollY || window.pageYOffset;
    console.log(scrollPostion);
    if (scrollPostion > lastPosiont) {
        nav.classList.add("hide");
        console.log("hi");
    } else {
        nav.classList.remove("hide");
    }
    lastPosiont = scrollPostion;
};

window.addEventListener("scroll", handleSroll);

// 스크롤시 Top 버튼 생기게 하기 
const scrollBtn = document.querySelector('.scroll-btn');
console.log('scrollBtn :', scrollBtn);


const topBtnShow = () => {
    const scrollPostion = window.scrollY || window.pageYOffset;
    if (scrollBtn) {
        if (scrollPostion > 2000) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }

    // return(()=> {window.removeEventListener('scroll', topBtnShow)});
};

window.addEventListener('scroll', topBtnShow);

// Top 버튼 클릭시 위로 올라가게 하기
const topBtnScroll = () => {
    window.scrollTo(0, 0);
};

scrollBtn.addEventListener('click', topBtnScroll);

// 상품 결과 박스
function showProduct(category){
    const product = productData[category];
    const resultBx = document.querySelector('.product-option-result');

    // 결과박스 비우기
    resultBx.innerHTML = '';

    product.forEach((v)=>{
        const productBx = document.createElement('div');
        productBx.innerHTML = `
            <div class='product-result-img'>
                <img src="${v.img}"  alt = "${v.title}"/>
            </div>
            <div class='product-result-content'>
                <p>${v.hashtag}</p>
                <p>${v.title}</p>
                <p><b>${Number(v.price).toLocaleString()}</b> 원</p>
            </div>
        `;

        resultBx.append(productBx);
    });

    // 개수 반영
    const categoryLength = document.querySelector('.product-length h3');
    categoryLength.innerHTML = `총 ${product.length}개`;

}

// 윈도우 로딩 시 아이 버튼 클릭
window.onload = function() {
    document.getElementById('eyeBtn').click();
};

// 클릭시 색상변경
const productBtn = document.querySelectorAll('.product-category-option button');

productBtn.forEach((v) => {
    v.addEventListener('click', function(){
        productBtn.forEach((btn) => {
            btn.classList.remove('on');
        });
        v.classList.add('on');
    });
});

