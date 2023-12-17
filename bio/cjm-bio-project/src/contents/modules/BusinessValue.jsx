import { business_data } from '../data/business_data.js';

export function BusinessValue(props) {
    const selData = business_data[props.cat];
    return (
        <>
            <div className="business-value-tit">{props.cat}</div>
            {
                selData.map((v, i) =>
                    <div className="bio-talent-bx" key={i}>
                        <h2>{v.num}</h2>
                        <h1>{v.icon}</h1>
                        <p>{v.txt}</p>
                        <p>{v.txt2}</p>
                    </div>
                )
            }
        </>
    );
}