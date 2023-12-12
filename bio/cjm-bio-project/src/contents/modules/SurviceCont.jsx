import { Link } from "react-router-dom";
import { serviceData } from "../data/serviceData";
export function SurviceCont(props){
    const selData = serviceData[props.category]
    return(
        <>
            <div className="service-cont-wrap">
                <div className="service-cont">
                    {
                        selData.map((v,i) =>
                            <div className="service-cont-bx" key={i}>
                                <h2>{v.txt}</h2>
                                <div className="service-cont-img">
                                    <img src={v.img} alt={v.txt} />
                                </div>
                                <p>{v.cont}</p>
                                <Link to='' className="button-link">
                                    <button>VIEW MORE</button>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}