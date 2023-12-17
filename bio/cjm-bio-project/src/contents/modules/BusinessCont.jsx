import {contData} from '../data/contData';

export function BusinessCont(props){
    const selData = contData[props.cat];

    return(
        <div className="business-cont-wrap">
            {
                selData.map((v, i) =>
                    <div className="business-explain-bx" key={i}>
                        <div className='business-explain-txt'>{v.tit}</div>
                        <h2>{v.cont}</h2>
                    </div>
                )
            }
        </div>
    )
}