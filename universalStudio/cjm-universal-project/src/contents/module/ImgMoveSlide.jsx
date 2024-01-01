import React, { Fragment } from "react";
import '../../css/img_move.css'
// 데이터
import { moveImgData } from "../../data/move_img_data";

// ImgMovSlide 코드
export function ImgMoveSlide(props) {

    const selData = moveImgData[props.imgMove];
    console.log('selData', selData);

    // const makeMoveSlide = () => {
    //     if (!selData) {
    //         return null;
    //     }

    //     // 데이터를 복제하여 섞기
    //     const shuffledData = [...selData].sort(() => Math.random() - 0.5);

    //     const data = new Set();
    //     const selectedData = shuffledData
    //         .filter((v) => {
    //             if (!data.has(v)) {
    //                 data.add(v);
    //                 return true;
    //             }
    //             return false;
    //         })
    //         // .slice(0, 8);
    //         .slice(0, 8);

    //     console.log('shuffledData', shuffledData);
    //     console.log('selectedData', selectedData);

    //     // JSX 엘리먼트를 반환
    //     return selectedData.map((v, i) => (
    //         <ul key={i}>
    //             <li>
    //                 <img src={process.env.PUBLIC_URL + v} alt={`움직이는 이미지 ${i}`} />
    //             </li>
    //         </ul>
    //     ));
    // };


    return (
        <div className="image-move-wrap">
            <div className="image-move img-move-ani">
                <ul>
                    {
                        selData.map((v, i) =>
                            <li key={i}>
                                <img src={process.env.PUBLIC_URL + v} alt={`움직이는 이미지 ${i}`} />
                            </li>
                        )}
                </ul>
                <ul>
                    {
                        selData.map((v, i) =>
                            <li key={i}>
                                <img src={process.env.PUBLIC_URL + v} alt={`움직이는 이미지 ${i}`} />
                            </li>
                        )}
                </ul>
            </div>
        </div>
    );
}
