const introduceBx = document.querySelector('.introduce-cont-bx');

let temp = [];

// 에듀케이션
introduceData.map((v, i) => {
    temp[i] = `
        <div class='introduce-bx'>
            <h2><p class="fa-regular fa-circle-check"></p>${v.tit}</h2>
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
            <h2><p class="fa-regular fa-circle-check"></p>${v.tit}</h2>
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
            <h2><p class="fa-regular fa-circle-check"></p>${v.tit}</h2>
            <p>
                <a href=${v.url} target='_blank'><i class="fa-solid fa-link"></i> ${v.url}</a>
            </p>
        </div>
    `
});

project2Url.innerHTML += temp.join('');


// 헤더 색상 변경
const headerColor = document.querySelectorAll('.header-nav li a');

headerColor.forEach((v, i) => {
    v.addEventListener('click' , function(){
        headerColor.forEach((j) => {
            j.classList.remove('color-change');
        })
        v.classList.add('color-change');
    });
});

headerColor[0].click();