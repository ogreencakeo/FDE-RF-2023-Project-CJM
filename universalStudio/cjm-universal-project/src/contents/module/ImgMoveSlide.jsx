import React from "react";
import '../../css/img_move.css'
// 데이터
import { moveImgData } from "../../data/move_img_data";

// ImgMovSlide 코드
export function ImgMoveSlide(props) {
    const selData = moveImgData[props.imgMove];
    // console.log(props.imgMove);
    console.log(selData);
    return (
        <div className="image-move-wrap">
            <div className="image-move img-move-ani">
                <ul>
                    {
                        selData.map((v, i) =>
                            <li key={i}>
                                <img src={v} alt={`움직이는 이미지 ${i}`} />
                            </li>)
                    }
                    {/* {Array.isArray(props.imgMove) &&
                        props.imgMove.map((v, i) => (
                            <li key={i}>
                                <img src={v} alt={`움직이는 이미지${i + 1}`} />
                            </li>
                        ))} */}
                </ul>
                <ul>
                    {
                        selData.map((v, i) =>
                            <li key={i}>
                                <img src={v} alt={`움직이는 이미지 ${i}`} />
                            </li>)
                    }
                </ul>
            </div>
        </div>
    );
}
