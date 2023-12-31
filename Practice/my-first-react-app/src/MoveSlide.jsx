// YourPage.js

import React from 'react';
import YourSlider from './YourSlider';

export const MoveSlide = () => {
    const images = [
        '../../image/goods1.jpg',
        '../../image/goods2.jpg',
        '../../image/goods3.jpg',
        '../../image/goods4.jpg',
        '../../image/goods5.jpg',
        '../../image/goods6.jpg',
        '../../image/goods7.jpg',
    ];

    return (
        <div>
            {/* 페이지의 다른 내용들 */}
            <YourSlider images={images} />
        </div>
    );
};
