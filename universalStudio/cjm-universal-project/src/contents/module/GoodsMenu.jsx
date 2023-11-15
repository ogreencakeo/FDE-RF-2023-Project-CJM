
// // import { useState } from "react";
// // import { GoodsCategory } from "./GoodsCategory";

// // export function GoodsMenu(){
// //     const [goodscats, setGoodscats] = useState(['supermario']);
// //     return(
// //         <>
// //             <div class="goods_menu">
// //                 <ul>
// //                     <li><a href="#" onClick={setGoodscats(['supermario'])}>슈퍼 닌텐도 월드™</a></li>
// //                     <li><a href="#" onClick={setGoodscats(['snoopy'])} >스누피</a></li>
// //                     <li><a href="#" onClick={setGoodscats(['harryPotter'])}>위저딩 월드 오브 해리 포터™</a></li>
// //                     <li><a href="#" onClick={setGoodscats(['sesame'])}>세서미 스트리트™</a></li>
// //                     <li><a href="#" onClick={setGoodscats(['spiderman'])}>스파이더맨</a></li>
// //                     <li><a href="#" onClick={setGoodscats(['jurassicPark'])}>쥬라기 월드</a></li>
// //                 </ul>
// //             </div>
// //             <div class="goods_bx_wrap">
// //                 <GoodsCategory  cat = {goodscats}/>
// //             </div>
// //         </>
// //     )
// // }

// import React, { useState } from "react";
// import { GoodsCategory } from "./GoodsCategory";
// // import "./GoodsMenu.css"; // 스타일 파일을 import

// export function GoodsMenu() {
//     const [goodscats, setGoodscats] = useState(['supermario']);

//     const handleClick = (category) => {
//         setGoodscats([category]);
//     };

//     return (
//         <>
//             <div className="goods_menu">
//                 <ul>
//                     <li><a href="#" onClick={() => handleClick('supermario')}>슈퍼 닌텐도 월드™</a></li>
//                     <li><a href="#" onClick={() => handleClick('snoopy')}>스누피</a></li>
//                     <li><a href="#" onClick={() => handleClick('harryPotter')}>위저딩 월드 오브 해리 포터™</a></li>
//                     <li><a href="#" onClick={() => handleClick('sesame')}>세서미 스트리트™</a></li>
//                     <li><a href="#" onClick={() => handleClick('spiderman')}>스파이더맨</a></li>
//                     <li><a href="#" onClick={() => handleClick('jurassicPark')}>쥬라기 월드</a></li>
//                 </ul>
//             </div>
//             <div className="goods_bx_wrap">
//                 <GoodsCategory cat={goodscats} />
//             </div>
//         </>
//     );
// }