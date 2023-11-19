import React from 'react';
import { Link } from "react-router-dom";
import { goodsMenu } from "../../data/goods/goodsMenu";
import { useState } from "react";

export function GoodsMenu() {
    const [redClassName, setRedClassName] = useState(0);
    const colorChange = (idx) =>{
        setRedClassName(idx);
    }       
    return (
        <div className="goods_menu">
        <ul>
            {
                goodsMenu.map((v, i)=>
                        <li onClick={()=>colorChange(i)} 
                        key={i}
                        >
                            <Link className={redClassName === i ? 'red-text' : 'black-text'} to={v.link}>{v.txt}</Link>
                        </li>
                    )
            }
        </ul>
        </div>
    )
}