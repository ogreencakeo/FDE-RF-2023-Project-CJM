
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
import { GoodsMenu } from './module/GoodsMenu';

export function Goods() {
    return (
    <>
        <div className="goods_wrap">
            <div className="goods_menu">
                <GoodsMenu />
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