import { Link } from "react-router-dom";
import { serviceData } from "../data/serviceData";
import { useEffect, useState } from "react";
export function SurviceCont(props) {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const selData = serviceData[props.category];
    const makeCode = (data) => {
        const temp = [];
        const split_data = data.split('^');
        for (let i = 0; i < split_data.length; i++) {
            temp[i] = <span>{split_data[i]}</span>
        }
        return temp;
    }

    const makeSpan = () => {
        const temp = [];
        for(let i=0; i<15; i++){
            temp[i] = <li>CELLTRION</li>
        }
        return temp;
    }
    return (
        <>
            <div className="service-cont-wrap">
                <div className="service-cont-main-img">
                    <section>
                        <h2>Research & Development</h2>
                        <p>혁신 의약품 및 생명공학 기술 개발로 미래 성장 동력을 발굴합니다</p>
                    </section>
                </div>
                <div className="service-cont">
                    {
                        selData.map((v, i) =>
                            <div className="service-cont-bx" key={i}>
                                <div className="service-cont-img">
                                    <img src={v.img} alt='서비스' />
                                </div>
                                <h2>{v.txt.indexOf('^') == -1 ? v.txt : makeCode(v.txt)}</h2>
                                <p>{v.cont}</p>
                                {/* <Link to='' className="button-link">
                                    <button>VIEW MORE</button>
                                </Link> */}
                            </div>
                        )
                    }
                </div>
                <div class="fbx f1" style={{ left: `-${scrollPosition}px` }}>
                    <div class="tbx txt-ani1">
                        <ul>
                            {makeSpan()}
                        </ul>
                        <ul>
                            {makeSpan()}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}