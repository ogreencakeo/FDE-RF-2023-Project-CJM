import React from "react";
import '../../css/img_move.css'

// ImgMovSlide 코드
export function ImgMoveSlide(props) {
    console.log(props.imgMove);
    return (
        <div className="image-move-wrap">
            <div className="image-move img-move-ani">
                <ul>
                    {Array.isArray(props.imgMove) &&
                        props.imgMove.map((v, i) => (
                            <li key={i}>
                                <img src={v} alt={`굿즈 이미지${i + 1}`} />
                            </li>
                        ))}
                </ul>
                <ul>
                {Array.isArray(props.imgMove) &&
                        props.imgMove.map((v, i) => (
                            <li key={i}>
                                <img src={v} alt={`굿즈 이미지${i + 1}`} />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}
