import { univerRecomData } from "../../data/module_data/uniRecomm_data";
import "../../css/universal_recomm.css";

// 폰트어썸
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
// import { faEarthAsia } from "@fortawesome/free-light-svg-icons";
import { faEarthAsia, faSunPlantWilt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

{/* <span className="faEarthAsia" style={{ color: props.color }}> */}
{/* <FontAwesomeIcon icon={faCircleCheck} /> */ }
{/* <FontAwesomeIcon icon={faEarthAsia} /> */ }

export function UniverReInfo(props) {
    const selData = univerRecomData[props.category];
    return (
        <div className="universal_recommend_info">
            <div className="universal_re_main_img">
                {
                    props.category == 'food' ? 
                    <img src={`../../images/seasonal/character/character3.png`} alt="" /> : ""
                }
            </div>
            <div className="universal_re_main_tit" style={{ backgroundColor: props.color }}>{props.category == "food" ? "푸드&레스토랑" : ""}</div><br />
            <div className="universal_re_main_tit2" style={{ backgroundColor: props.color }}>UNIVERSAL STUDIO만의 추천정보</div>
            <FontAwesomeIcon icon={faSunPlantWilt} />
            <div className="universal_recommend_info_bx">
                <table>
                    <tbody>
                        {selData.map((v, i) => (
                            <tr key={i}>
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
                        
                    </tbody>
                </table>
                <div className="universal_recomm_img"></div>
            </div>
        </div>
    );
}
