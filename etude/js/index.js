
const navList = document.querySelector('.nav-wrap ul');
let temp = [];
for (let i = 0; i < navData.length; i++) {
    temp[i] = `
        <li>${navData[i]}</li>
    `
}
navList.innerHTML += temp.join('');


// head Swpier
const swiperContainer = new Swiper('.header-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

for (let i = 0; i < mainBanImg.length; i++) {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    const imgElement = document.createElement('img');
    imgElement.src = mainBanImg[i];

    swiperSlide.appendChild(imgElement);
    swiperContainer.appendSlide(swiperSlide);
}

swiperContainer.update(); // Swiper 업데이트



// main1
const main1Bx = document.querySelector('.main1-wrap');

temp = [];
main1Data.map((v, i) =>{
    temp[i] =`
        <div class='main1Bx'>
            <div class='main1Img'>
                <img src=${v.img} alt='메인이미지' />
            </div>
            <section>
                <p>${v.txt}</p>
                <h2>${v.cont}</h2>
            </section>
        </div>
    `
});

main1Bx.innerHTML += temp;

// main3
const main3Bx = document.querySelector('.main3-wrap');
temp = [];

for(let i=0; i<main3Data.length; i++){
    temp[i] = `
        <div class='main3Bx'>
            <div class='main3-img'>
                <img src=${main3Data[i]} alt='main3사진'/>
                <span></span>
            </div>
        </div>
    `
}

main3Bx.innerHTML += temp.join('');

const main4Bx = document.querySelector('.main4-img-l');

temp = [];
main4Data.map((v, i) => {
    temp[i] = `
        <div class='main4Bx'>
            <div class='main4Bx-img'>
                <img src=${v.img} alt='main4 이미지' />
            </div>
            <section>
                <h2>${v.cont}</h2>
                <h1>${v.txt}</h1>
                <h2>${v.price}</h3>
            </section>
        </div>
    `
});

main4Bx.innerHTML += temp.join('');

const giftBx = document.querySelector('.gift-bx-wrap');
temp = [];
for(let i=0; i<giftBxData.length; i++){
    temp[i] = `
        <div class='gift-bx'>
            <img src=${giftBxData[i]} alt='선물이미지' />
        </div>
    `
}

giftBx.innerHTML += temp.join('');



// whats new Swiper
const swiperContainer2 = new Swiper('.whats-new-swipe-container', {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

// Swiper의 wrapper 요소 가져오기
const swiperWrapper = document.querySelector('.whats-new-swipe-container .swiper-wrapper');

// 각 상품에 대해 반복
whatsData.forEach((item, index) => {
    // Swiper 슬라이드 요소 생성
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    // 각 상품에 대한 HTML 내용 생성
    const content = `
            <div class='whats-swpie-bx'>
                <img src="${item.img}" alt="${item.txt}" class="whats-img-${index+1}">
                <div class="whats-content">
                    <p>${item.cont}</p>
                    <h2>${item.txt}</h2>
                    <h3>${item.price}</h3>
                </div>
            </div>
    `;

    // Swiper 슬라이드에 HTML 내용 설정
    slide.innerHTML = content;

    // Swiper wrapper에 슬라이드 추가
    swiperWrapper.appendChild(slide);
});

// 슬라이드 추가 후 Swiper 업데이트
swiperContainer2.update();


// 미디어 쿼리
const mediaQuery = window.matchMedia('(max-width: 767px)');

// 미디어 쿼리 변경 사항 감지
function handleMediaQueryChange(event) {
    if (event.matches) {
        // 작은 화면에 대한 옵션
        swiperContainer2.params.slidesPerView = 1;
        swiperContainer2.params.spaceBetween = 5;
    } else {
        // 큰 화면에 대한 옵션
        swiperContainer2.params.slidesPerView = 4;
        swiperContainer2.params.spaceBetween = 10;
    }

    // 스와이퍼 업데이트
    swiperContainer2.update();
}

// 초기 호출
handleMediaQueryChange(mediaQuery);

// 미디어 쿼리 변경 시 이벤트 리스너 등록
mediaQuery.addListener(handleMediaQueryChange);