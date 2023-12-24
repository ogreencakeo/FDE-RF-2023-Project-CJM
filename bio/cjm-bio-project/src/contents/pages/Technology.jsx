import {techData} from '../data/technology.js';
import '../../css/technology.css';
export function Technology(){
    return(
        <div className='technology-wrap'>
            <div className="technology-bx-wrap">
                {
                    techData.map((v, i) =>
                        <div className='technology-bx' key={i}>
                            <img src={v.img} alt="기술사진" />
                            <h2>{v.name}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
}