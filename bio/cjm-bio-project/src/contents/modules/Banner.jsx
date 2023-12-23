import {banData} from '../data/banner'
import '../../css/banner.css';
// 제이쿼리 + 제이쿼리 UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
$.easing.easeInOut = $.easing.easeInOut || function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
};

export function Banner(props){
    const selData = banData[props.category];

    const makeCode = (data) => {
        const temp = [];
        const split_data = data.split('^');
        for(let i=0; i<split_data.length; i++){
            temp[i] = <p>{split_data[i]}</p>
        }
        return temp;
    };

    const makeList = (data) => {
        return data.map((v, i) =>
            <li key={i}>
                <img src={v.src} alt='' />
                <section className='bantit'>
                    <h3>{v.tit}</h3>
                    <p>{v.subtit.indexOf('^') == -1? v.subtit : makeCode(v.subtit)}</p>
                    {/* {v.btn != '' && <button>{v.btn}</button>} */}
                </section>
            </li>
        )
    }

    const A_TM = 600;
    const A_ES = 'easeInOut';
    let cSts = 0;
    let sNum = 0;

    const goSlide = (e) => {
        const tg = e.target;

        const slideBox = $(tg).siblings('.slider');
        const indic = $(tg).siblings('.indic').find('li');
        const slideCnt = slideBox.find('li').length;

        // 광클금지
        if(cSts) return;
        cSts = 1;
        setTimeout(()=>(cSts=0), A_TM);

        let isR = $(tg).is('.rb');

        if(isR){
            slideBox.animate({
                left : '-100%'
            }, A_TM, A_ES, ()=>{
                slideBox.append(slideBox.find('li').first())
                .css({left : '0'});
            });
            sNum++;
            if(sNum > slideCnt) sNum = 0;
        }else{
            slideBox.prepend(slideBox.find('li').last())
            .css({
                left : '0'
            }).animate({left : '0'}, A_TM, A_ES);
            sNum--;
            if(sNum<0) sNum = slideCnt-1;
        }
        indic.eq(sNum).addClass('on').siblings().removeClass('on');
    }

    return(
        <div className="banner">
            <ul className="slider">{makeList(selData)}</ul>
            {
                selData.length > 1 && (
                    <>
                        <div className='abtn lb' onClick={goSlide}>＜</div>
                        <div className='abtn rb' onClick={goSlide}>＞</div>
                        <ol className='indic'>
                            {
                                selData.map((v, i) => 
                                    <li className={i==0? 'on' : ''} key={i}></li>
                                )
                            }
                        </ol>
                    </>
                )
            }
        </div>
    )
}