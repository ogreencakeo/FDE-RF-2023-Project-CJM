
import { createElement, useEffect, useState } from 'react';
import '../css/loading.css';

export function Loading() {
    const loadingTxt = 'UNIVERSALSTUDIO';

    const makeCode = () => {
        return loadingTxt.split('').map((v, i) => (
            <span key={i} style={{ '--char-index': i }}>
                {v}
            </span>
        ));
    };

    const loadImg = [
        '/images/loading/1.png',
        '/images/loading/2.png',
        '/images/loading/3.png',
        '/images/loading/4.png',
    ];

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImgIndex((i) => (i + 1) % loadImg.length);
        }, 1100);

        return () => clearInterval(intervalId);
    }, [currentImgIndex, loadImg]);

    return (
        <div className="loadpage-page">
            <div>
                <div className='loadpage-img-bx'>
                    {/* 이미지를 상태에 따라 렌더링 */}
                    <img src={process.env.PUBLIC_URL + loadImg[currentImgIndex]} alt="Loading" />
                </div>
                <h1 className="loading-text">
                    {makeCode()}
                </h1>
            </div>
        </div>
    );
};