const introduceBx = document.querySelector('.introduce-cont-bx');

let temp = [];

// 에듀케이션
introduceData.map((v, i) => {
    temp[i] = `
        <div class='introduce-bx'>
            <h2><p class="fa-regular fa-circle-check"></p> ${v.tit}</h2>
            <p>${
                v.tit === '공모전' ? (
                    `<a href='./crape.pdf' target='_blank'><i class="fa-solid fa-link"></i> ${v.txt}</a><br />
                    <a href='./result.pdf' target='_blank'><i class="fa-solid fa-link"></i> 논문내용</a>`
                ) : (v.txt)
            }</p>
        </div>
    `
});

introduceBx.innerHTML += temp.join('');

// 프로젝트1
const explain1 = document.querySelector('.project-explain');
temp = [];
explain1Data.map((v, i) => {
    temp[i] = `
        <div class='project-explain-bx'>
            <h3><i class="fa-solid fa-angle-right"></i> ${v.tit}</h3>
            <p>${v.txt}</p>
        </div>
    `
});

explain1.innerHTML += temp.join('');

const project1Url = document.querySelector('.project1-url');
temp = [];
project1UrlData.map((v, i) => {
    temp[i] = `
        <div class='project1-url-bx'>
            <h2><p class="fa-regular fa-circle-check"></p> ${v.tit}</h2>
            <p>
                <a href=${v.url} target='_blank'><i class="fa-solid fa-link"></i> ${v.url}</a>
            </p>
        </div>
    `
});

project1Url.innerHTML += temp.join('');

// 프로젝트2
const explain2 = document.querySelector('.project-explain2');
temp = [];
explainData2.map((v, i) => {
    temp[i] = `
        <div class='project-explain-bx'>
            <h3><i class="fa-solid fa-angle-right"></i> ${v.tit}</h3>
            <p>${v.txt}</p>
        </div>
    `
});
explain2.innerHTML += temp.join('');

const project2Url = document.querySelector('.project2-url');
temp = [];
project2UrlData.map((v, i) => {
    temp[i] = `
        <div class='project2-url-bx'>
            <h2><p class="fa-regular fa-circle-check"></p> ${v.tit}</h2>
            <p>
                <a href=${v.url} target='_blank'><i class="fa-solid fa-link"></i> ${v.url}</a>
            </p>
        </div>
    `
});

project2Url.innerHTML += temp.join('');

// 움직이는 글자
const move_spans = document.querySelectorAll('.move-span');

move_spans.forEach(ele => {
    let temp = [];
    for (let i = 0; i < 2; i++) {
        temp[i] = `
            <ul>
                <li>CHOIJIMIN</li>
                <li>CHOIJIMIN</li>
                <li>CHOIJIMIN</li>
                <li>CHOIJIMIN</li>
            </ul>
        `;
    }
    ele.innerHTML += temp.join('');
});


// 스크롤시 색상 변경
const headerColor = document.querySelectorAll('.header-nav li a');

let stsClick = 0;
let btnScrollY;

let sectionPositions;

const updateButtonPositions = () => {
    sectionPositions = Array.from(headerColor).map((link) => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        return targetSection.offsetTop;
    });
};

const scrollFn = () => {
    if (stsClick) return;
    btnScrollY = window.scrollY || document.documentElement.scrollTop;

    for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (btnScrollY >= sectionPositions[i]) {
            setActiveClass(i);
            break;
        }
    }
};

const setActiveClass = (index) => {
    headerColor.forEach((v) => v.classList.remove('color-change'));
    headerColor[index].classList.add('color-change');
};

window.addEventListener('scroll', scrollFn);

headerColor.forEach((v, i) => {
    v.addEventListener('click', function (event) {
        event.preventDefault();
        headerColor.forEach((j) => {
            j.classList.remove('color-change');
        });
        v.classList.add('color-change');
        stsClick = true;

        const targetId = v.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
        });

        setTimeout(() => {
            stsClick = false;
        }, 1000); // 클릭 후 1초 동안은 스크롤 이벤트 무시
    });
});

// 초기 색상 설정
headerColor[0].click();

// 초기화 함수 호출
updateButtonPositions();

// 창 크기 변경에 대응하기 위한 리사이즈 이벤트 추가
window.addEventListener('resize', updateButtonPositions);

//// 스크롤 이벤트
const header_bg = document.querySelectorAll('.h1-tit');
const show_img = document.querySelectorAll('.show-img');

const showBx = (txt) => {
    txt.forEach((v) => {
        const tgPosition = v.getBoundingClientRect().top;
        if(tgPosition < window.innerHeight){
            v.classList.add('on');
        }else{
            v.classList.remove('on');
        }
    })
};

window.addEventListener('scroll', ()=>showBx(header_bg));
window.addEventListener('scroll', ()=>showBx(show_img));