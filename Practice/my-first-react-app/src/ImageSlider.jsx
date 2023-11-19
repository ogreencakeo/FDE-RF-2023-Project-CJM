import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

export const ImageSlider = () => {
  const text = 'UNIVERSAL STUDIO';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isH2Visible, setIsH2Visible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // 모든 글자가 나타나면 로딩 페이지를 숨깁니다.
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          // 1초 후에 h2 태그를 보이도록 설정
          setTimeout(() => {
            setIsH2Visible(true);
          }, 1000);
        }, 200);
      }
    }, 200);

    // 컴포넌트가 언마운트되면 interval 클리어
    return () => clearInterval(interval);
  }, [currentIndex, text.length]);

  return (
    <>
      <div className={`loading-page ${isVisible ? 'visible' : 'hidden'}`}>
        {text.split('').map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.15}s` }}>
            {char}
          </span>
        ))}
        {/* h2 태그는 로딩 페이지의 영향을 받지 않도록 밖에 위치시킵니다. */}
      </div>
      <h2 className={isH2Visible ? 'visible' : 'hidden'}>hi</h2>
    </>
  );
};

