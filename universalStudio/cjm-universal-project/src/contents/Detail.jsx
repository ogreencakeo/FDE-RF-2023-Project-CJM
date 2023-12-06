import { useLocation } from "react-router-dom";
import '../css/detail.css';
import { Map } from "./module/Map";

export function Detail() {
    const loc = useLocation();
    const name = loc.state.name;
    const img = loc.state.img;
    const map = loc.state.map;
    const title = loc.state.title;
    const desc = loc.state.desc;
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
                    <Map category='attraction' map={map} shopLocation='어트랙션' />
                </div>
            </div>
        </>
    );
}
