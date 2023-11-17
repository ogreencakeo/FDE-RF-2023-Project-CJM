// YourPage.js

import React from 'react';
import {YourComponent} from './YourComponent';

export const YourPage = () => {
   // YourComponent에 전달할 이미지 배열
  const imagesForYouerComponent = [
    '../../image/goods1.jpg',
    '../../image/goods2.jpg',
    '../../image/goods3.jpg',
    '../../image/goods4.jpg',
    '../../image/goods5.jpg',
    '../../image/goods6.jpg',
  ];

  return (
    <div>
      {/* 페이지의 다른 내용들 */}
      <YourComponent images={YourComponent} />
    </div>
  );
};

