import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';

export function LoadingPage() {
    const loadText = 'UNIVERSAL STUDIO';
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        // 페이지가 처음 마운트될 때만 실행
        // const interval = setInterval(() => {
        //     if (currentIdx < loadText.length) {
        //         setCurrentIdx((prevIdx) => prevIdx + 1);
        //     } else {
        //         clearInterval(interval);
        //         setTimeout(() => {
        //             setIsVisible(false);
        //             setTimeout(() => {
        //                 setIsMainVisible(true);
        //             }, 1000)
        //         }, 200);
        //     }
        // }, 200);
    }); // 두 번째 인자로 빈 배열을 전달하여 처음 마운트될 때만 실행


    return (
        <div className={`loading-page ${isVisible ? 'visible' : 'hidden'}`}>
            <div>
                <FontAwesomeIcon icon={faEarthAsia} />
            </div>
            <div className="load-text">
                {loadText.split('').map((v, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                        {v}
                    </span>
                ))}
            </div>
        </div>
    );
}