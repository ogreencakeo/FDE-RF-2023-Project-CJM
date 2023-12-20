

import { platfromData } from '../data/platfromData.js';
// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiohazard }
    from "@fortawesome/free-solid-svg-icons";
export function PlatformTech() {
    const selData = platfromData;
    return (
        <>
            <div className="platform-tech-wrap">
                <div className="platform-tech-div">
                    <div className="platform-tech-bx">
                        <img src="../images/platformTech/1.jpg" alt="핵심기술" />
                        <div className="platfrom-tech-cont">
                            <h1 className='at-a-glance'>At a Glance</h1>
                            {
                                selData.map((v, i) =>
                                    <li className="platfrom-tech-li" key={i}>
                                        <h1>{v.font}</h1>
                                        <div>
                                            <h2>{v.txt}</h2>
                                            <p>{v.cont}</p>
                                        </div>
                                    </li>
                                )
                            }
                            <h1 className='bio-icon'><FontAwesomeIcon icon={faBiohazard} /></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}