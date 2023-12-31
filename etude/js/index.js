
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

main1Bx.innerHTML += temp.join('');

// main2
const main2Img = [
    "../image/main/main2/img1.jpg",
    "../image/main/main2/img2.jpg",
    "../image/main/main2/img3.jpg",
];

const main_img_bx  = document.querySelector('.main-img-bx');
const main_img = document.createElement('img');
main_img.classList.add('main-img');

const randomImg = Math.floor(Math.random()*3);
main_img.setAttribute('src', main2Img[randomImg]);

main_img_bx.appendChild(main_img);

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


// main4
const main4Bx = document.querySelector('.main4-img-l');

temp = [];
main4Data.map((v, i) => {
    temp[i] = `
        <div class='main4Bx'>
            <div class='main4Bx-img' onmouseover="changeImgFn(${i})" onmouseout="restoreImgFn(${i})">
                <img src=${v.img} alt='main4 이미지' id='image${i}' />
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

const changeImgFn = (index) => {
    const img = document.getElementById(`image${index}`);
    img.src = `../image/main/main4/${index+1}-2.jpg`;
}

const restoreImgFn = (index) => {
    const img = document.getElementById(`image${index}`);
    img.src = main4Data[index].img;
}

// giftBx

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
whatsData.forEach((v, i) => {
    // Swiper 슬라이드 요소 생성
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    // 각 상품에 대한 HTML 내용 생성
    const content = `
            <div class='whats-swpie-bx'>
                <div  class="whats-img" onmouseover='changeImgFn2(${i})' onmouseout='restoreImgFn2(${i})'>
                    <img src="${v.img}" alt="${v.txt}" id='whatsImg${i}'>
                </div>
                <div class="whats-content">
                    <p>${v.cont}</p>
                    <h2>${v.txt}</h2>
                    <p><strong>${v.price}</strong>원</p>
                </div>
            </div>
    `;

    // Swiper 슬라이드에 HTML 내용 설정
    slide.innerHTML = content;

    // Swiper wrapper에 슬라이드 추가
    swiperWrapper.appendChild(slide);
});

const changeImgFn2 = (idx) => {
    const img = document.getElementById(`whatsImg${idx}`);
    img.src = `../image/main/whatsNew/${idx+1}-2.jpg`;
};

const restoreImgFn2 = (idx) => {
    const img = document.getElementById(`whatsImg${idx}`);
    img.src = whatsData[idx].img;
};

// 슬라이드 추가 후 Swiper 업데이트
swiperContainer2.update();


// 미디어 쿼리
const mediaQuery = window.matchMedia('(max-width: 767px)');

// 미디어 쿼리 변경 사항 감지
function handleMediaQueryChange(event) {
    if (event.matches) {
        // 작은 화면에 대한 옵션
        swiperContainer2.params.slidesPerView = 2;
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


// sns 스와이퍼
const swiperContainer3 = new Swiper('.sns-bx2-swipe-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    // autoplay: {
    //     delay: 2500, 
    //     disableOnInteraction: false, 
    // },
    loop : 'true'
});

for (let i = 0; i < snsData.length; i++) {
    const swiperSlide3 = document.createElement('div');
    swiperSlide3.classList.add('swiper-slide');

    const imgElement3 = document.createElement('img');
    imgElement3.src = snsData[i];

    swiperSlide3.appendChild(imgElement3);
    swiperContainer3.appendSlide(swiperSlide3);
}

swiperContainer3.update(); // Swiper 업데이트


// news-event Swiper
const swiperContainer4 = new Swiper('.news-event-swipe-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Swiper의 wrapper 요소 가져오기
const swiperWrapper4 = document.querySelector('.news-event-swipe-container .swiper-wrapper');

// 각 상품에 대해 반복
newsEventData.forEach((item, index) => {
    // Swiper 슬라이드 요소 생성
    const slide4 = document.createElement('div');
    slide4.classList.add('swiper-slide');

    // 각 상품에 대한 HTML 내용 생성
    const content4 = `
            <div class='evnet-swipe-bx'>
                <img src=${item.img} alt=${item.txt}>
            </div>
    `;

    // Swiper 슬라이드에 HTML 내용 설정
    slide4.innerHTML = content4;

    // Swiper wrapper에 슬라이드 추가
    swiperWrapper4.appendChild(slide4);
});

// 슬라이드 추가 후 Swiper 업데이트
swiperContainer4.update();

// // // 미디어 쿼리
// const mediaQuery2 = window.matchMedia('(max-width: 767px)');
// function handleMediaQueryChange(event) {
//     if (event.matches) {
//         // 작은 화면에 대한 옵션
//         swiperContainer4.params.slidesPerView = 1;
//         swiperContainer4.params.spaceBetween = 5;
//     } else {
//         // 큰 화면에 대한 옵션
//         swiperContainer4.params.slidesPerView = 2; // 변경된 값 (원래는 4)
//         swiperContainer4.params.spaceBetween = 10;
//     }

//     // 스와이퍼 업데이트
//     swiperContainer4.update();
// }

// // 초기 호출
// handleMediaQueryChange(mediaQuery2);

// // 미디어 쿼리 변경 시 이벤트 리스너 등록
// mediaQuery2.addListener(handleMediaQueryChange);

