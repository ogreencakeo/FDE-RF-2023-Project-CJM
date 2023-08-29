
window.addEventListener('load', exhibitionFn);

function exhibitionFn(){

    const move_to_exhibition1 = document.querySelector('.move-to-exhibition');
    const exhibition_arr = [
        즉시배송,
        등급혜택,
        이벤트/쿠폰,
        모바일교환권,
        하나더,
        물가안정365,
        홈플식탁,
        홈플러스시그니처,
        산지직
    ];
    
    let hcode = '';

    for(let i=0; i<exhibition_arr.length; i++){
        console.log(move_to_exhibition[i]);
        console.log(exhibition_arr[i]);
        move_to_exhibition2[i].innerHTML = `
                <a href="#"><img src="./images/move-to-exhibition${i+1}.png" alt="기획전 이미지"> ${exhibition_arr[i]}</a>
        `;
    }

    
}
