// YourComponent.jsx

import React from 'react';
import './YourComponent.css';

export const YourComponent = ({ images }) => {
  return (
    <div className="fbx f1">
      <div className="tbx txt-ani1">
        <ul>
          {images.map((image, index) => (
            <li key={index}><img src={image} alt={`이미지${index + 1}`} /></li>
          ))}
        </ul>
        <ul>
          {images.map((image, index) => (
            <li key={index}><img src={image} alt={`이미지${index + 1}`} /></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

