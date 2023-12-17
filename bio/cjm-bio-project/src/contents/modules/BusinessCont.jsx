export {businessContData } from '../data/businessContData';

export function BusinessCont(props){
    const selData = businessContData[props.cat];

    return(
        <div className="business-cont-wrap">
            <div className="business-value-tit">{selData.tit}</div>
        </div>
    )
}