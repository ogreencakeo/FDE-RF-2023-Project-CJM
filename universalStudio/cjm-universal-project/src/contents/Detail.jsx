import { useLocation } from "react-router-dom";

export function Detail() {
    const loc = useLocation();
    const name = loc.state.name;
    const img = loc.state.img;
    return(
        <>
            <div className="attraction-detail-wrap">
                <div className="attraction-detail-main-img">
                    
                    <img src={`../../images/attraction/${img}`} alt="" />
                </div>
            </div>
            <h1>{name}</h1> 
        </>
    );
}
