import { useEffect, useState } from 'react';
import '../css/loading.css';

export function Loading() {
    const loadingTxt = 'LOADING';


    const [progress, setProgress] = useState(0);
    const [txt, setTxt] = useState(0);

    
    useEffect(() => {
        const progressBarInterval = setInterval(() => {
            // setTxt((idx)=>{
            //     idx++;
            //     if(idx>100){
            //         idx = 100;
            //     }
            //     return idx;
            // })
            setProgress((prevProgress) => {
                // const newProgress = (prevProgress + 1) % 101;

                prevProgress++;
                if(prevProgress>100){
                    prevProgress = 100;
                }


                // 로딩이 완료되면 interval 정리
                // if (prevProgress === 100) {
                //     clearInterval(progressBarInterval);
                // }

                return prevProgress;
            });
            
        }, 4200 / 100); 
        

        return () => clearInterval(progressBarInterval);
    }, []);
    // useEffect(()=>{
    //     const timeInterval = setInterval(()=>{
    //         setTxt((idx)=>{
    //             idx++;
    //             if(idx>100){
    //                 idx = 100;
    //             }
    //             return idx;
    //         })
    
    //         return() => clearInterval(timeInterval);
    //     }, 3400/100);
    // }, []);




    const makeCode = () => {
        return loadingTxt.split('').map((v, i) => (
            <span key={i} style={{ '--char-index': i }}>
                {v}
            </span>
        ));
    };

    return (
        <div className="loadpage-page">
            <div>
                <div className='loadpage-img-bx'>
                    {/* 이미지를 상태에 따라 렌더링 */}
                    <img src={process.env.PUBLIC_URL + '/images/loading/1.png'} alt="Loading" />
                </div>
                <h1 className="loading-text">
                    {makeCode()}
                </h1>
                {/* 프로그레스 바 */}
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                {/* 퍼센티지 */}
                <h3 style={
                    {
                        color: progress >80 ? 'red' : 'black',
                    }
                }>{progress} %</h3>
            </div>
        </div>
    );
};
