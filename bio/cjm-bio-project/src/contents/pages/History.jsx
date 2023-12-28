import { useEffect, useState } from 'react';
import { Banner } from '../modules/Banner';
import '../../css/history.css';
import { historyData, dateData, contData } from '../data/historyData.js';

export function History() {

    // const [historyBtn, setHistoryBtn] = useState('one');
    // const [selData, SetSelData] = useState(historyData[historyBtn]);

    // const [historyImg, setHistoryImg] = useState('one');
    // const [selData2, SetSelData2] = useState(imgData[historyImg]);

    // const [mainImg, setMainImg] = useState('one');
    // const [selData3, SetSelData3] = useState(mainData[mainImg]);

    // const showHistory = (data) => {
    //     setHistoryBtn(data);
    //     setHistoryImg(data);
    //     setMainImg(data);
    // };

    // useEffect(() => {
    //     const selectedData = historyData[historyBtn];
    //     const selectedData2 = imgData[historyImg];
    //     const selectedData3 = mainData[mainImg];
    //     SetSelData(selectedData);
    //     SetSelData2(selectedData2);
    //     SetSelData3(selectedData3);
    // }, [historyBtn, historyImg, mainImg]);

//    const makeCode = () => {
//         const temp = [];
//         const
//    }
    return (
        <>
            <div className="history-wrap">
                <div>
                    {
                        historyData.map((v, i) =>
                            <div className="history-main-bx" key={i}>
                                <div className="history-bx-img">
                                    <img src={v.img} alt="" />
                                    <section>
                                        <h1>{v.txt}</h1>
                                        <h2>{v.cont}</h2>
                                    </section>
                                </div>
                                <div className='history-bx'>
                                    {
                                        v.history.map((v, i) => 
                                            <div key={i}>
                                                <span>{v.date}</span>
                                                <span>{v.cont}</span>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="img-lab-div">
                    <img src="../images/main/img_lab01.jpg" alt="연구실" />
                    <section>
                        <h1>국내 최대 규모 R&D 전문 인력</h1>
                        <h2>전체 임직원의 33%</h2>
                    </section>
                </div>
                {/* <Banner category='main' /> */}
            </div>
        </>
    );
}