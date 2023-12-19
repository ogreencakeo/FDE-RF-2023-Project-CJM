import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlaskVial, faPlaneDeparture, faSackDollar, faEarthAsia}  
from "@fortawesome/free-solid-svg-icons";

export const platfromData = [
    {
        txt : '최초 개발',
        cont : '1ST 항체 바이오시밀러',
        font : <FontAwesomeIcon icon={faFlaskVial} />,
        color : '#ba1a1aff'
    },
    {
        txt : '국내 바이오의약품 생산∙수출',
        cont : '1위',
        font : <FontAwesomeIcon icon={faPlaneDeparture} />,
        color : '#1f4d52ff'
    },
    {
        txt : '매출액',
        cont : '2 조 2,840억 원',
        font : <FontAwesomeIcon icon={faSackDollar}/>,
        color : 'rgb(11, 87, 208)'
    },
    {
        txt : '글로벌 판매 허가',
        cont : '100여국',
        font : <FontAwesomeIcon icon={faEarthAsia} />,
        color : 'rgb(24 49 83)'
    },
]