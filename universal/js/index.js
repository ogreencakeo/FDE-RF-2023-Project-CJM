import dFn from './dom.js';

const main_img_stage = dFn.qs('.header-main-img-wrap');
setTimeout(()=>{
    main_img_stage.classList.add('on');
},400);

// universal 글자 물결
const wave_text = 'Universal Studios';
const span_wave = dFn.qs('.span_wave');
let wave_span_code = ''

let seqNum = 0;

for(let x of wave_text){
    console.log(x);
    if(x == ' ') wave_span_code += '&nbsp;&nbsp';
    else wave_span_code += `<span style="animation-delay : ${seqNum*0.1}s;">${x}</span>`
    seqNum ++;
}

span_wave.innerHTML = wave_span_code;