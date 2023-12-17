import { business_data } from '../data/business_data.js';

export function BusinessValue(props) {
    const selData = business_data[props.cat];
    return (
        <div className="bio-talent-div">
            <div className="business-value-tit">{props.cat}</div>
            <div className='business-value-bx'>
                {
                    selData.map((v, i) =>
                        <div className="bio-talent-bx" key={i}>
                            {/* <h2>{v.num}</h2> */}
                            {/* <div className='bio-talent-img'>
                                <img src={v.icon} alt="핵심가치" />
                            </div> */}
                            <div className="bio-talent-icon">
                                <h1>{v.icon}</h1>
                            </div>
                            <div className="bio-talent-txt">
                                <p>{v.txt}</p>
                                <p>{v.txt2}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}