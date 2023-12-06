import { useLocation } from "react-router-dom";
import '../css/detail.css';
import { Map } from "./module/Map";

export function Detail() {
    const loc = useLocation();
    const name = loc.state.name;
    const img = loc.state.img;
    const mapLocal = loc.state.map;
    const title = loc.state.title;
    const desc = loc.state.desc;
    const logo = loc.state.logo;
    return(
        <>
            <div className="attraction-detail-wrap">
                <div className="attraction-detail-main-img">
                    <img src={`../../images/attraction/${img}`} alt="" />
                </div>
                <div className="attraction-detail-cont">
                    <h1>{name}</h1> 
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <Map cat='attraction' mapi={mapLocal} shopLocation='어트랙션' />
                    <div className="attraction-logo-img">
                        <img src={`../../images/attraction/${logo}`} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
