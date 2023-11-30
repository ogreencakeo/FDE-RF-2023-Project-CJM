
import { Link } from 'react-router-dom';
// CSS
import '../../css/attractionCont.css';
// 데이터
import {attractionData} from '../../data/attraction/attractionData';

export function AttractionCont(){
    const selData = attractionData;
    return(
        <>
            <div className="attractionCont-list-wrap">
                {
                    selData.map((v, i) => 
                        <Link to='/detail' state={{
                            name : v.name,
                            logo : v.logo,
                            img : v.img,
                            map : v.map,
                            title : v.title,
                            desc : v.desc
                        }}>
                            <div className='attractionCont-list-bx' key={i}>
                                <div className="attractionCont-list-img">
                                    <img src={`../images/attraction/${v.img}`} alt={v.name} />
                                </div>
                                <h2>{v.name}</h2>
                            </div>
                        </Link>
                    )
                }
            </div>
        </>
    )
}