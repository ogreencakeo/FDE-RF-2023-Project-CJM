import { useEffect, useState } from 'react';
import '../../css/history.css';
import { Banner } from '../modules/Banner';
export function History() {
    const historyData = {
        one : [
            {
                date : '2001.10',
                cont : 'JVC 설립을 위한 MOU 체결'
            },
            {
                date : '2002.02',
                cont : '셀트리온 설립'
            },
        ],
        two : [
            {
                date : '2005.06',
                cont : 'BMS와 제품 공급계약 체결'
            },
            {
                date : '2005.07',
                cont : '1공장 준공식(50,000L)'
            },
            {
                date : '2007.12',
                cont : '1공장 cGMP 생산 설비 미국 FDA 인준'
            },
            {
                date : '2008.08',
                cont : '코스닥 상장'
            },
        ],
    };
    const imgData = {
        one : [{img : '../images/main/history/1.jpg'}],
        two : [{img : '../images/main/history/2.jpg'}]
    }

    const mainData = {
        one : [{img : './images/main/history/main/1.jpg'}]
    }

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

    useEffect(()=>{
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
                        <button onClick={()=>showHistory('one')} >2000-2002</button>
                        <button onClick={()=>showHistory('two')} >2003-2008</button>
                        <button></button>
                        <button></button>
                    </ul>
                    <div className="history-main-img" >
                            {/* <img src="../images/main/history.jpg" alt="사진" /> */}
                            {
                                selData3.map((v, i) =>
                                    <div key={i}>
                                        <img src={v.img} alt="역사" />
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