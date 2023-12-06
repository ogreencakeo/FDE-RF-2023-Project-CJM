import { useContext } from 'react';
import '../../css/logo.css';
import { universalCon } from './universalContext';
export function Logo(){
    const myCon = useContext(universalCon);
    return(
        <div className="nav-logo">
            <img src= {process.env.PUBLIC_URL+ "/images/universal_logo.webp"} alt="로고" onClick={()=>myCon.chgPage('/')} />
        </div>
    )
}