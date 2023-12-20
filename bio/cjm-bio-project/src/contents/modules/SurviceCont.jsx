import { Link } from "react-router-dom";
import { serviceData } from "../data/serviceData";
export function SurviceCont(props){
    const selData = serviceData[props.category];
    const makeCode = (data) => {
        const temp = [];
        const split_data = data.split('^');
        for(let i=0; i<split_data.length; i++){
            temp[i] = <span>{split_data[i]}</span>
        }
        return temp;
    }
    return(
        <>
            <div className="service-cont-wrap">
                <h1>COMPANY</h1>
                <p>새로운 역사를 만들어 가는 셀트리온의 노력은 계속됩니다</p>
                <div className="service-cont">
                    {
                        selData.map((v,i) =>
                            <div className="service-cont-bx" key={i}>
                                <h2>{v.txt.indexOf('^') == -1? v.txt : makeCode(v.txt)}</h2>
                                <div className="service-cont-img">
                                    <img src={v.img} alt='서비스' />
                                </div>
                                <p>{v.cont}</p>
                                {/* <Link to='' className="button-link">
                                    <button>VIEW MORE</button>
                                </Link> */}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}