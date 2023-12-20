import { Banner } from "../modules/Banner";
import { SurviceCont } from '../modules/SurviceCont';
import '../../css/main.css';

import { surviceData } from '../data/serviceData.js';
import { VidSwiper } from "../plugin/swiper/VidSwiper.jsx";


import { BusinessValue } from "../modules/BusinessValue.jsx";
import { BusinessCont } from "../modules/BusinessCont.jsx";
import { PlatformTech } from "../modules/PlatformTech.jsx";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDna }
    from "@fortawesome/free-solid-svg-icons";

export function Main() {
    const historyData = [
        {
            txt: '새로운 도전과 창조의 신화가 시작되다',
            cont: '서정진 회장은 2000년, 셀트리온의 전신인 넥솔을 창업해 다양한 비즈니스의 가능성을 탐색했습니다. 2002년 셀트리온은 설립 후, 바이오의약품 생산 설비를 구축하기 위한 준비를 진행하며 창업의 과정을 거쳤습니다.'
        },
        {
            txt: '성장의 기틀을 다지다',
            cont: '2003년부터 2008년까지 셀트리온은 미지의 영역을 개척하고 높이 도약할 수 있도록 기반을 다졌습니다. 수많은 난제들이 있었으나 셀트리온은 온갖 어려움을 이겨내고 사업 기반을 다졌습니다.'
        },
        {
            txt: '바이오시밀러 시대를 열다',
            cont: '2013년 5월 세계 최초 항체 바이오시밀러 램시마가 유럽의약품청(EMA)로부터 허가를 받으며 셀트리온의 글로벌 시장 진출이 본격화되었습니다.또한 셀트리온은 글로벌 시장에 의약품을 안정적으로 공급하기 위해 2공장을 신설하고 대량 생산 역량을 갖추었습니다.'
        },
        {
            txt: '고속 성장의 궤도에 올라서다',
            cont: '2016년, 셀트리온은 유럽에 이어 미국 FDA로부터 램시마의 판매 허가를 획득하며 새로운 기회의 신대륙에 발을 내디뎠습니다. 또한 셀트리온은 항체 신약과 백신, 바이오베터 개발 등 새로운 치료제 및 신기술 개발에도 앞장서며 글로벌 종합생명공학 회사로 발전해 나가고 있습니다'
        },
    ]
    return (
        <>
            <Banner category='main' />
            {/* 핵심기술 */}
            <PlatformTech />
            {/* 서비스 */}
            <SurviceCont category='main' />
            {/* 역사 */}
            <div className="history-wrap">
                <div className="history-top">
                    <p>CELLTRION</p>

                    <div className="green-div"></div>

                    <div className="history-img-bx">
                        <div className="history-cont-bx">
                            {
                                historyData.map((v, i) =>
                                    <div className="history-cont" key={i}>
                                        <h1>{v.txt}</h1>
                                        <p>{v.cont}</p>
                                    </div>
                                )
                            }
                        </div>
                        <div className="history-img">
                            <img src="../images/main/history.jpg" alt="사진" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_visual01">
                <div className="main_visual_img"></div>
                {/* <img src="../images/main/main_visual01.png" alt="메인 이미지" /> */}
                <div className="main_visual_cont">
                    <h1>Company</h1>
                    <h2>대한민국 대표 바이오기업 셀트리온</h2>
                </div>
            </div>
            {/* 인재상 */}
            <BusinessCont cat='main' />
            {/* 핵심가치 */}
            <BusinessValue cat='핵심가치' />
            
            <VidSwiper category='main' />
        </>
    );
}