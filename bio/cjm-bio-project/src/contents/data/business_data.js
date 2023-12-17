// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  fa1, fa2, fa3, fa4, fa5, faHeadSideVirus, faPuzzlePiece,faArrowTrendUp, faPlaneDeparture }  
from "@fortawesome/free-solid-svg-icons";


export const business_data = {
    "핵심가치" : [
        {
            // num: <FontAwesomeIcon icon={fa1} />,
            // icon : "../images/business_data/main/1.png",/
            icon : <FontAwesomeIcon icon={faHeadSideVirus} />,
            txt : '창의성',
            txt2 : '발상의 전환과 창의적인 사고로 문제를 해결합니다.'
        },
        {
            // num: <FontAwesomeIcon icon={fa2} />,
            icon :  <FontAwesomeIcon icon={faPuzzlePiece} />,
            txt : '원칙준수',
            txt2 : '원칙을 준수하며 신념과 신뢰의 가치를 중시합니다.'
        },
        {
            // num: <FontAwesomeIcon icon={fa3} />,
            icon :  <FontAwesomeIcon icon={faArrowTrendUp} />,
            txt : '도전정신',
            txt2 : '난관에 굴하지 않고 새로운 길을 찾기 위해 끊임없이 도전합니다.'
        },
        {
            // num: <FontAwesomeIcon icon={fa4} />,
            icon : <FontAwesomeIcon icon={faPlaneDeparture} />,
            txt : '세계제일주의',
            txt2 : '세계 시장을 주도하기 위한 최고의 전문성과 경쟁력을 강조합니다.'
        },
        
    ]
}