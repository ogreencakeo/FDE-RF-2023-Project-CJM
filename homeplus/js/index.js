
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

window.addEventListener('load', function(){
    const move_to_exhibition = document.querySelector('.move-to-exhibition');
    let hcode = '';

    hcode += '<nav><ul>';
    for(let i=0; i<exhibition_arr.length; i++){
        hcode += `
            <li>
                <a href = "#"></a>
            </li>
        `;
    }
    hcode += '</ul></nav>';
    move_to_exhibition.innerHTML = hcode;

    const exhibition_li = move_to_exhibition.querySelectorAll('li a');
    for(let i=0; i<exhibition_li.length; i++){
        exhibition_li[i].innerHTML += `
            <img src="./images/move-to-exhibition${i+1}.png" alt="">${exhibition_arr[i]}
        `;
    }

});
