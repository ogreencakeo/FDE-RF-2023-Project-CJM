import { useContext } from 'react';
import '../../css/logo.css';
import { universalCon } from './universalContext';
export function Logo(){
    const myCon = useContext(universalCon);
    return(
        <div className="nav-logo">
            <img src="./images/seasonal/map_logo.png" alt="로고" onClick={()=>myCon.chgPage('/')} />
        </div>
    )
}