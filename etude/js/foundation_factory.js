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


// 맞춤서비스
const customizedService = document.querySelector('.customized-service-bx-r');
temp = [];

customized.map((v, i) => {
    temp[i] = `
        <div class='customized-service-cont'>
            <p class="${v.icon}"></p>
            <p>${v.title}</p>
            <p>${v.txt}</p>
            <p>${v.subtxt? v.subtxt : ''}</p>
        </div>
    `
}); 

customizedService.innerHTML += temp.join('');

// 모델 배너 문구 setTimeOut으로 설정함
const facotryBannerCont = document.querySelector('.factory-banner-cont p span:last-child');
const bannerTxt = [
    '21C1',
    '21.5N1',
    '13.5C2', 
    '17.5W1'
];
let index = 0;

setInterval(()=>{
    index = index + 1;
    if(index >= bannerTxt.length) index = 0;
    facotryBannerCont.innerHTML = bannerTxt[index];
},300);

// 나만의 파운데이션 만들기
const makeOwnWrap = document.querySelector('.make-own-bx-wrap');
temp = [];
makeOwnData.map((v, i) => {
    temp[i] = `
        <div class='make-own-bx'>
            <img src = "${v.img}" alt="${v.txt}" />
            <div class='make-own-cont'>
                <p>${v.txt.split('^')[0]}</p>
                <p>${v.txt.split('^')[1]}</p>
                <p>${v.txt.split('^')[2]}</p>
            </div>
        </div>
    `
});

makeOwnWrap.innerHTML += temp.join('');

// 팩토리 - 상점 위치
// 맞춤서비스
const storePosition = document.querySelector('.store-position-bx-r');
temp = [];

storePositionData.map((v, i) => {
    temp[i] = `
        <div class='store-position-cont'>
            <p class="${v.icon}"></p>
            <p>${v.title}</p>
            <p>${v.txt}</p>
            <p>${v.subtxt? v.subtxt : ''}</p>
        </div>
    `
}); 

storePosition.innerHTML += temp.join('');

// 팩토리 둘러보기
const takeTour = document.querySelector('.factory-take-tour');
temp = [];
for(let i=0; i<takeTourData.length; i++){
    temp[i] = `
        <div class='factory-take-tour-bx'>
            <img src="${takeTourData[i]}" alt="파운데이션팩토리 이미지"/>
        </div>
    `
}

takeTour.innerHTML += temp.join('');

// 팩토리 - 공지
const storeNotice = document.querySelector('.store-notice-bx');
temp = [];

for(let i=0; i<factoryNoticeData.length; i++){
    temp[i] =  `
        <div class='store-notice-cont'>
            <ul>
                <li>${factoryNoticeData[i]}</li>
            </ul>
        </div>
    `;
}

storeNotice.innerHTML += temp.join('');

// 스크롤 내릴시 공지 애니메이션
const storeNoticeBx = document.querySelector('.store-notice-bx');

const showNotice = () => {
    const storeNoticeBxPosition = storeNoticeBx.getBoundingClientRect().top;
    if(storeNoticeBxPosition < window.innerHeight){
        storeNoticeBx.classList.add('on');
    }else{
        storeNoticeBx.classList.remove('on');
    }
};

window.addEventListener('scroll', showNotice);