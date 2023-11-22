import React from 'react';
import {goodsAdData} from '../../data/goods/goodsAdData';
import '../../css/goods_ad.css';
import { Map } from '../module/Map';

export function GoodsAd(props){
    const selData = goodsAdData[props.ad];
    const color = props.bg_color;
    return(
        <>
            <div className="goods_ad_wrap">
                <div className="goods_ad_bx">
                    <div className="goods_ad">
                        <h1 className='goods_tit'>{selData.tit}</h1>
                        <div className="goods_ad_cont">
                            <div className="goods_img_logo">
                                <img src={`../../images/${selData.logo}`} alt={selData.product} />
                            </div>
                            <div className="good_ad">
                                <span className='goods_location' style={{backgroundColor : color}}>{selData.location}</span>
                                <div className="goods_sub_cont">
                                    <span className='goods_product'>캐릭터 상품 : {selData.product} </span>
                                    <span className='goods_cont'>{selData.cont}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goods_shop_map">
                    {/* <h1>숍의 위치</h1>
                    <div className="shop_map">
                        <img src={`../../images/${selData.map}`} alt={`${selData.location}의 위치`} />
                    </div> */}
                    <Map shop_info={selData.map} shop_location={selData.location} cat='goods' />
                </div>
            </div>
        </>
    )
}