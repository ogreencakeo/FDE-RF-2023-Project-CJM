import { useEffect, useState } from 'react';
import { Banner } from '../modules/Banner';
import '../../css/history.css';
import { historyData, imgData, mainData } from '../data/historyData.js';

export function History() {

    const [historyBtn, setHistoryBtn] = useState('one');
    const [selData, SetSelData] = useState(historyData[historyBtn]);

    const [historyImg, setHistoryImg] = useState('one');
    const [selData2, SetSelData2] = useState(imgData[historyImg]);

    const [mainImg, setMainImg] = useState('one');
    const [selData3, SetSelData3] = useState(mainData[mainImg]);

    const showHistory = (data) => {
        setHistoryBtn(data);
        setHistoryImg(data);
        setMainImg(data);
    };

    useEffect(() => {
        const selectedData = historyData[historyBtn];
        const selectedData2 = imgData[historyImg];
        const selectedData3 = mainData[mainImg];
        SetSelData(selectedData);
        SetSelData2(selectedData2);
        SetSelData3(selectedData3);
    }, [historyBtn, historyImg, mainImg]);


    return (
        <>
            <div className="history-wrap">
                <div className="history-top">
                    {/* <p>CELLTRION</p> */}
                    <ul>
                        <button onClick={() =>showHistory('one')} >STEP1</button>
                        <button onClick={() =>showHistory('two')} >STEP2</button>
                        <button onClick={() =>showHistory('three')}>STEP3</button>
                        <button onClick={() =>showHistory('four')}>STEP4</button>
                    </ul>
                    <div className="history-main-img" >
                        {/* <img src="../images/main/history.jpg" alt="사진" /> */}
                        {
                            selData3.map((v, i) =>
                                <div key={i}>
                                    <img src={v.img} alt="역사" />
                                    <section>
                                        <h2>{v.txt}</h2>
                                        <p>{v.cont}</p>
                                    </section>
                                </div>
                            )
                        }
                    </div>
                    <div className="history-img-bx">
                        <div className="history-cont-bx">
                            {
                                selData.map((v, i) =>
                                    <div className="history-cont" key={i}>
                                        <h1>{v.date}</h1>
                                        <p>{v.cont}</p>
                                    </div>
                                )
                            }
                        </div>
                        <div className="history-img" >
                            {/* <img src="../images/main/history.jpg" alt="사진" /> */}
                            {
                                selData2.map((v, i) =>
                                    <div key={i}>
                                        <img src={v.img} alt="역사" />

                                    </div>
                                )
                            }
                        </div>
                        <div className="green-div"></div>
                    </div>
                </div>
                <Banner category='main' />
            </div>
        </>
    );
}