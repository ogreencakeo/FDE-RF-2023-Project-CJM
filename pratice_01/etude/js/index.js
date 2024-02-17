
const navList = document.querySelector('.nav-wrap ul');

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

navList.innerHTML += temp.join('');

const nav = document.querySelector('.nav-wrap');

let lastPosition = 0;

const handleScroll = () => {
    let scrollPostion = window.scrollY || window.pageYOffset;
    if(scrollPostion > lastPosition){
        nav.classList.add('hide');
    }else{
        nav.classList.remove('hide');
    }
    lastPosition = scrollPostion;
}

window.addEventListener('scroll', handleScroll);

const scrollBtn = document.querySelector('.scroll-btn');

const scrollBtnFn = () => {
    let btnPosition = window.scrollY || window.pageYOffset;
    if(btnPosition > 2000){
        scrollBtn.style.display = 'block';
    }else{
        scrollBtn.style.display = 'none';
    }
};

window.addEventListener('scroll', scrollBtnFn);

const goTopFn = () => {
    window.scrollTo(0,0);
};

scrollBtn.addEventListener('click', goTopFn);

const swiperContainer = new Swiper('.header-swiper-container', {
    slidesPerView : 1,
    spaceBetween : 10,
    pagination : {
        el :"swiper-pagination",
        clickable : true,
        renderBullet : function(index, className){
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

for(let i=0; i<mainBanImg.length; i++){
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    const imgElement = document.createElement('img');
    imgElement.src = mainBanImg[i];

    swiperSlide.appendChild(imgElement);
    swiperContainer.appendSlide(swiperSlide);
}

swiperContainer.update();

const etudeTit = document.querySelector('.header-swiper-container>h1');

setInterval(()=>{
    titInterval();
}, 800);

function titInterval(){
    etudeTit.classList.toggle('on');
}

