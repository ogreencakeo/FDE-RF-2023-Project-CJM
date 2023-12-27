import { Banner } from "../modules/Banner";
import '../../css/main.css';

// 모듈
import { SurviceCont } from '../modules/SurviceCont';
import { VidSwiper } from "../plugin/swiper/VidSwiper.jsx";
import { ResearchField } from "../plugin/swiper/ResearchField.jsx";
import { AtAGlance } from "../modules/AtAGlance.jsx";
import { ContactUs } from "../modules/ContactUs.jsx";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBraille }
    from "@fortawesome/free-solid-svg-icons";
import { faBuilding }
    from "@fortawesome/free-regular-svg-icons";
import { Laboratory } from "../modules/Laboratory.jsx";



export function Main() {
    
    return (
        <>
            {/* 메인 비주얼 */}
            <div className="main-visual">
                <div className="main-visual-img"></div>
                <div className="main-visual-sec">
                    <h2>OUR CELLTRION</h2>
                    <h1>Biologics that make more sense</h1>
                </div>
                <p>세계적 수준의 바이오의약품 R&D 역량과 전문성을 바탕으로 새로운 패러다임을 제시할 첨단 의약품을 개발합니다</p>
            </div>
            {/* 서비스 */}
            <SurviceCont category='main' />
            {/* 한눈에 */}
            <AtAGlance />
            {/* 연구소 */}
            <Laboratory />
            {/* 비디오 */}
            <VidSwiper category='main' />
            
            {/* 메인 테크 */}
            <div className="main-tech-wrap">
                <div className="main-tech-img">
                    <img src="../images/main/mainTech.jpg" alt="메인테크" />
                </div>
                <div className="main-tech-vision">
                    <div className="green-div"></div>
                    <h3>COMPANY <b><FontAwesomeIcon icon={faBuilding} /></b></h3>
                    <p>글로벌 헬스케어 리딩기업 셀트리온</p>
                    <h3>OUR VISION <b><FontAwesomeIcon icon={faBraille} /></b></h3>
                    <p>셀트리온은 차세대 바이오의약품 및 케미컬의약품 개발을 통해 인류의 건강과 복지 증진의 가치를 실현하는 세계적인 종합생명공학 기업으로 성장해나가겠습니다.</p>
                </div>
            </div>
            
            {/* 보도자료 */}
            <ContactUs />
            {/* 연구분야 */}
            {/* <ResearchField /> */}
            {/* <div className="main_visual01">
                <div className="main_visual_img"></div>
            </div> */}
            {/* <Banner category='main' /> */}
            

            {/*  */}

            {/* <PlatformTech />
            <Banner category='main' />
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
            </div> */}

            
            {/* 핵심가치 */}
            {/* <BusinessValue cat='핵심가치' /> */}
            
        </>
    );
}