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
    if(scrollBtn){
        if(scrollPostion > 2000){
            scrollBtn.style.display = 'block';
        }else{
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


// 메이크업 룩
const makeupWrap = document.querySelector('.makeup-look-main');
temp = [];
let selTemp = [];

const makeCode = (data) => {
    data.map((v, i) => {
        selTemp[i] = `
            <div class='makeup-grid-bx'>
                <img src="${v.img}" />
                <div class='makeup-grid-cont'>
                    <p>${v.txt}</p>
                    <p>${v.cont}</p>
                </div>
            </div>
        `
    });
    return selTemp;
}

for(let i=0; i<makeUpData.length; i++){
    temp[i] = `
        <div class='makeup-grid'>
            ${makeCode(makeUpData[i]).join('')}
        </div>
    `
    console.log(makeUpData[i])
}



// makeUpData.map((v, i) => {
//     const j = v[i];
//     temp[i] = `
//         <div class='makeup-look-grid'>
//             <img src="${j.img}" />
//         </div>
//     `
// }).join('');

// makeUpData.map((v, i) => {
//     temp[i] = `
//         <div class='makeup-look-grid'>
//             <img src="${v.img}" />
//         </div>
//     `
// }).join('');

makeupWrap.innerHTML += temp.join('');