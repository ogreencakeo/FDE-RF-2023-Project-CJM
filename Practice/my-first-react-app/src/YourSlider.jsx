// YourSlider.js

import React, { useState, useEffect } from 'react';
import './YourSlider.css';

const YourSlider = ({ images }) => {
    const imageSet = images.concat(images);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => {
            clearInterval(slideInterval);
        };
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSet.length);
    };

    const sliderWidth = imageSet.length * 300;

    const handleSliderClick = () => {
        const transitionDuration = 2;
        const transitionDelay = 0.001;

        setTimeout(() => {
            nextSlide();
        }, transitionDelay * 1000);

        document.querySelector('.your-slider').style.transition = `transform ${transitionDuration}s linear`;
    };

    const handleTransitionEnd = () => {
        document.querySelector('.your-slider').style.transition = 'none';
    };

    return (
        <div className="your-slider-container">
            <div
                className="your-slider"
                style={{
                    width: `${sliderWidth}px`,
                    transform: `translateX(-${currentIndex * 300}px)`,
                }}
                onClick={handleSliderClick}
                onTransitionEnd={handleTransitionEnd}
            >
                {imageSet.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} style={{ width: '300px' }} />
                ))}
            </div>
        </div>
    );
};

export default YourSlider;
