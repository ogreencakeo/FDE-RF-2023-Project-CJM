// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp }  from "@fortawesome/free-regular-svg-icons";
import { faScaleBalanced, faBuildingShield, faCircleDollarToSlot, faArrowTrendUp }  from "@fortawesome/free-solid-svg-icons";


export const business_data = {
    "BusinessDNA" : [
        {
            icon : <FontAwesomeIcon icon={faThumbsUp} />,
            txt : 'Quality',
            txt2 : '품질'
        },
        {
            icon : <FontAwesomeIcon icon={faScaleBalanced} />,
            txt : 'Compliance',
            txt2 : '준법'
        },
        {
            icon : <FontAwesomeIcon icon={faBuildingShield} />,
            txt : 'Safety',
            txt2 : '안전'
        },
        {
            icon :<FontAwesomeIcon icon={faCircleDollarToSlot} />,
            txt : 'Cost',
            txt2 : '원가 경쟁력'
        },
        {
            icon :<FontAwesomeIcon icon={faArrowTrendUp} />,
            txt : 'Agility',
            txt2 : '신속성'
        },
    ]
}