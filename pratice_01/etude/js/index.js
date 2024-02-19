
const nav_list = document.querySelector('.nav-wrap ul');
let temp = [];
navData.map((v, i) => {
    temp[i] = `
        <li>
            <a href="${v.link}">${v.txt}</a>
        </li>
    `
}).join('');

nav_list.innerHTML += temp.join('');

const nav_wrap = document.querySelector('.nav-wrap');

let lastPosition = 0;
const scrollFn = () => {
    let scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > lastPosition) {
        nav_wrap.classList.add('hide');
    } else {
        nav_wrap.classList.remove('hide');
    }
    lastPosition = scrollPosition;
};
window.addEventListener('scroll', scrollFn);

const scroll_btn = document.querySelector('.scroll-btn');
const showBtn = () => {
    let scrollBtnPosition = window.scrollY || window.pageYOffset;
    if (scrollBtnPosition > 2000) {
        scroll_btn.style.display = 'block';
    } else {
        scroll_btn.style.display = 'none';
    }
};
window.addEventListener('scroll', showBtn);

const goTopFn = () => {
    window.scrollTo(0, 0);
}

scroll_btn.addEventListener('click', goTopFn);

const shuffledData = main1Data.sort(()=>Math.random() - 0.5);
const unipueImg = new Set();

const selectedData = shuffledData.filter((v) => {
    if(!unipueImg.has(v.img)){
        unipueImg.has(v.img);
        return true;
    }
    return false;
}).slice(0, 5);

const main1Bx = document.querySelector('.main1-wrap');

const main1RandomResult = selectedData.map((v) => 
    `
    <div class='main1Bx'>
        <div class='main1Img' onClick="location.href='./sub.html'">
            <img src=${v.img} alt='메인이미지' />
        </div>
        <section>
            <p style='background: linear-gradient(to right, ${v.color}, #f74d52, yellow);' class='fas ${v.font}'>&nbsp;${v.cat}</p>
            <p>${v.txt}</p>
            <h2>${v.cont}</h2>
        </section>
    </div>
    `
);

main1Bx.innerHTML += main1RandomResult.join('');

// main2
const main2Img = [
    "../image/main/main2/img1.jpg",
    "../image/main/main2/img2.jpg",
    "../image/main/main2/img3.jpg"
];

const main_img_bx = document.querySelector('.main-img-bx');
const main_img = document.createElement('img');
main_img.classList.add('main-img');

const randomImg = Math.floor(Math.random() * 3);
main_img.setAttribute('src', main2Img[randomImg]);

main_img_bx.appendChild(main_img);



