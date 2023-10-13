import dFn from './dom.js';

const main_img_stage = dFn.qs('.header-main-img-wrap');
setTimeout(()=>{
    main_img_stage.classList.add('on');
},400);

// universal 글자 물결
const universal_span_mave = 'Universal Studios';
const wave_span_code = dFn.qs('.universal-span-move');

universal_span_mave.forEach((ele)=>{
    wave_span_code.innerHTML += `${this}`;
})