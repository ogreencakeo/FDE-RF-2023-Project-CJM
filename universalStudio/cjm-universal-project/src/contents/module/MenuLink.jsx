// import React from 'react';
// import { Link } from "react-router-dom";
// // import { MenuLinkData } from "../../data/goods/menuData";
// import { useState } from "react";
// import '../../css/menu_link.css'

// // 시즈널메뉴 링크, 굿즈 링크
// export function MenuLink(props) {
//     const muLink = MenuLinkData[props.menu];
//     const [redClassName, setRedClassName] = useState(0);
//     const colorChange = (idx) => {
//         setRedClassName(idx);
//     }
//     return (
//         <div className="menu_link">
//             <ul>
//                 {
//                     muLink.map((v, i) =>
//                         <li onClick={() => colorChange(i)}
//                             key={i}
//                         >
//                             <Link className={redClassName === i ? 'red-text' : 'black-text'} to={v.link}>{v.txt}</Link>
//                         </li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }