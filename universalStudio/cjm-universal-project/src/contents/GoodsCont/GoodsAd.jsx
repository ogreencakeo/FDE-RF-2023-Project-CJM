import React from 'react';
import {goodsAdData} from '../../data/goods/goodsAdData';
import '../../css/goods_ad.css';

export function GoodsAd(props){
    const selData = goodsAdData[props.ad];
    return(
        <>
            <div className="goods_ad_wrap">
                <div className="goods_ad_bx">
                    <h1 className='goods_tot'>{selData.tit}</h1>
                    <div className="goods_ad_cont">
                        <div className="goods_img">
                            <img src={`../../images/${selData.logo}`} alt={selData.product} />
                        </div>
                        <div className="good_ad">
                            <p>{selData.location}</p>
                            <p>캐릭터 상품 : {selData.product} </p>
                            <h2>{selData.cont}</h2>
                        </div>
                    </div>
                </div>
                <div className="goods_shop_map">
                    <h1>숍의 위치</h1>
                    <div className="shop_map">
                        <img src={`../../images/${selData.map}`} alt={`${selData.location}의 위치`} />
                    </div>
                </div>
            </div>
        </>
    )
}