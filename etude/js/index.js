
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