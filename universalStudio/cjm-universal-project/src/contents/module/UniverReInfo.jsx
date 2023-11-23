import { univerRecomData } from "../../data/module_data/uniRecomm_data";
import "../../css/universal_recomm.css";

// 폰트어썸
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
// import { faEarthAsia } from "@fortawesome/free-light-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function UniverReInfo(props) {
    const selData = univerRecomData[props.category];
    return (
        <div className="universal_recommend_info">
            <h1>{props.category == "food" ? "푸드&레스토랑의 추천 정보" : ""}</h1>
            {/* <span><FontAwesomeIcon icon={faListOl} /></span> */}
            <div className="universal_recommend_info_bx">
                <table>
                    <tbody>
                        {selData.map((v, i) => (
                            <tr key={i}>
                                <td>
                                    <span className="faEarthAsia" style={{color : props.color}}>
                                        {/* <FontAwesomeIcon icon={faCircleCheck} /> */}
                                        <FontAwesomeIcon icon={faEarthAsia} />
                                    </span>
                                </td>
                                <td>
                                    <img src={v.img} alt={v.txt} />
                                </td>
                                <td>
                                    <span>{v.txt}</span>
                                </td>
                                <td>
                                    <span>{v.cont}</span>
                                </td>
                            </tr>
                        ))}
                        {/* <tr>
                        <td>저알레르기 메뉴</td>
                        <td></td>
                    </tr> */}
                    </tbody>
                </table>
                <div className="universal_recomm_img"></div>
            </div>
        </div>
    );
}
