// GridAnimation.jsx

import React from "react";
import '../../css/grid_ani.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFan} from "@fortawesome/free-solid-svg-icons";

export function GridAnimation() {
    const items = [
        "https://placekitten.com/600/600",
        "https://placekitten.com/601/601",
        "https://placekitten.com/602/602",
        "https://placekitten.com/603/603",
    ];

    const makeCode = () => {
        const temp = [];
        for (let i = 0; i < 4; i++) {
            temp[i] = <div key={i} className="grid-item">
                <h1 className="fan-span">
                    <FontAwesomeIcon icon={faFan} />
                </h1>
            </div>
        }
        return temp;
    }

    return (
        <div className="grid-container">
            {makeCode()}
            {/* {items.map((item, index) => (
        <div key={index} className="grid-item">
            <img src={item} alt={`Item ${index + 1}`} />
        </div>
      ))} */}
        </div>
    );
}
