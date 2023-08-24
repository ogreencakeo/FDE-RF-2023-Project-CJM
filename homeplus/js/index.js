var move_to_exhibition = document.querySelector('.move-to-exhibition nav');

var move_to_exhibition_hcode = '';

for(var i=0; i<9; i++){
    move_to_exhibition_hcode += `
        <ul>
            <li>
                <a href="#"><img src="./images/move-to-exhibition${i+1}.png" alt="">즉시배송</a>
            </li>
        </ul>
    `;
}
                // </li>
                // <li>
                //     <a href="#"><img src="" alt="">등급혜택</a>
                // </li>
                // <li>
                //     <a href="#"><img src="" alt="">이벤트/쿠폰</a>
                // </li>
                // <li>
                //     <a href="#"><img src="" alt="">모바일교환권</a>
                // </li>
                // <li>
                //     <a href="#"><img src="" alt="">하나더</a>
                // </li>
                // <li>
                //     <a href="#"><img src="" alt="">물가안정365</a>
                // </li>
                // <li>
                //     <a href="#"><img src="" alt="">홈플식탁</a>
                // </li>
                // <li>
                //     <a href="#"><img src="" alt="">홈플러스 시그니처</a>
                // </li>
                // <li>
                //     <a href="#"><img src="" alt="">산지직</a>
                // </li>