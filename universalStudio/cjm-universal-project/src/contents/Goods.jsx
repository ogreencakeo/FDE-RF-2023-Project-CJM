
// export function Goods(){
//     return(
//         <div className="goods_wrap">
//             <GoodsMenu />
//         </div>
//     )
// }
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { Supermario } from './GoodsCont/Supermario';
import { Snoopy } from "./GoodsCont/Snoopy";
import { HarryPotter } from './GoodsCont/HarryPotter';
import { Spiderman } from './GoodsCont/Spiderman';
import { Sesame } from './GoodsCont/Sesame';
import { JurassicPark } from './GoodsCont/JurassicPark';
import { TopArea } from '../layout/TopArea';
import { FooterArea } from '../layout/FooterArea';

import '../css/goods.css';

export function Goods() {
    return (
    <>
        <div className="goods_wrap">
            <div className="goods_menu">
                <ul>
                    <li><Link to="supermario">슈퍼 닌텐도 월드™</Link></li>
                    <li><Link to="snoopy">스누피</Link></li>
                    <li><Link to="harryPotter">위저딩 월드 오브 해리 포터™</Link></li>
                    <li><Link to="sesame">세서미 스트리트™</Link></li>
                    <li><Link to="spiderman">스파이더맨</Link></li>
                    <li><Link to="jurassicPark">쥬라기 월드</Link></li>
                </ul>
            </div>
            <div className="goods_bx_wrap">
                <Routes>
                    <Route index element={<Supermario />} />
                    <Route path='supermario' element={<Supermario />} />
                    <Route path='snoopy' element={<Snoopy />} />
                    <Route path='harryPotter' element={<HarryPotter />} />
                    <Route path='sesame' element={<Sesame />} />
                    <Route path='spiderman' element={<Spiderman />} />
                    <Route path='jurassicPark' element={<JurassicPark />} />
                </Routes>
            </div>
        </div>
    </>
    );
}