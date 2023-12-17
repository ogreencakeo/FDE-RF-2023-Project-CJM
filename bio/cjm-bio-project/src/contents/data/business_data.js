// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp }  from "@fortawesome/free-regular-svg-icons";
import { faScaleBalanced, faBuildingShield, faCircleDollarToSlot, faArrowTrendUp, fa1, fa2, fa3, fa4, fa5 }  
from "@fortawesome/free-solid-svg-icons";


export const business_data = {
    "Business DNA" : [
        {
            num: <FontAwesomeIcon icon={fa1} />,
            icon : <FontAwesomeIcon icon={faThumbsUp} />,
            txt : 'Quality',
            txt2 : '품질'
        },
        {
            num: <FontAwesomeIcon icon={fa2} />,
            icon : <FontAwesomeIcon icon={faScaleBalanced} />,
            txt : 'Compliance',
            txt2 : '준법'
        },
        {
            num: <FontAwesomeIcon icon={fa3} />,
            icon : <FontAwesomeIcon icon={faBuildingShield} />,
            txt : 'Safety',
            txt2 : '안전'
        },
        {
            num: <FontAwesomeIcon icon={fa4} />,
            icon :<FontAwesomeIcon icon={faCircleDollarToSlot} />,
            txt : 'Cost',
            txt2 : '원가 경쟁력'
        },
        {
            num: <FontAwesomeIcon icon={fa5} />,
            icon :<FontAwesomeIcon icon={faArrowTrendUp} />,
            txt : 'Agility',
            txt2 : '신속성'
        },
    ]
}