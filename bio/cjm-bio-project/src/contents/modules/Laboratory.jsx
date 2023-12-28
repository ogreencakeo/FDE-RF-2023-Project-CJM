// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVialVirus, faGears, faWrench, faFlask}
    from "@fortawesome/free-solid-svg-icons";

export function Laboratory() {
    const labData = [
        {
            img: '../images/main/lab3.jpg',
            txt: '감염성 바이러스^ 치료 신약 개발',
            cont: 'BL-2 Bio Safety Level 2 연구시설 별도 보유',
            icon : <FontAwesomeIcon icon={faVialVirus} />,
            color : '#649460'
            
        },
        {
            img: '../images/main/lab1.jpg',
            txt: '선도적 기술력과 역량',
            cont: '세포주∙배양 공정∙정제 공정 개발 분야',
            icon : <FontAwesomeIcon icon={faWrench} />,
            color : '#5a256e'

        },
        {
            txt: '핵심 기반기술 축적',
            cont: '항체 개발 및 ADC 융합기술 등',
            icon : <FontAwesomeIcon icon={faGears} />,
            color: '#00363bff'
        },
        {
            img: '../images/main/lab2.jpg',
            txt: '최신 연구 설비',
            cont: '물리화학 및 생물학적 분석',
            icon : <FontAwesomeIcon icon={faFlask} />,
            color : '#f44336'
        },
    ];

    const makeCode = (data) => {
        const temp = [];
        const split_data = data.split('^');
        for(let i=0; i<split_data.length; i++){
            temp[i] = <p>{split_data[i]}</p>
        }
        return temp;
    };
    return (
        <div className="laboratory-wrap">
            {
                labData.map((v, i) => 
                    <div className="laboratory-bx" key={i}>
                        {v.img? <img src={v.img} alt="연구소" /> : <div style={{ backgroundColor: '#1f4d52ff', width: '100%', height: '100%' }}></div>}
                        <section>
                            <h3>연구소</h3>
                            <div className="laboratory-bx-cont">
                                <h1>{v.txt.indexOf('^') == -1? v.txt : makeCode(v.txt)}</h1>
                                <h2>{v.cont}</h2>
                                <h4 className="laboratory-icon" style={{
                                    color : v.color
                                }}>{v.icon}</h4>
                            </div>
                        </section>
                    </div>
                
                )
            }
        </div>
    );
}