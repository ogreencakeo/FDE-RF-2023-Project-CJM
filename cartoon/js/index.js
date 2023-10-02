import dFn from './dom.js';

const main_img_stage = dFn.qs('.header-main-img-wrap');
setTimeout(()=>{
    main_img_stage.classList.add('on');
},400);
