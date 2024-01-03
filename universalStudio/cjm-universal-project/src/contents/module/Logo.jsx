import { useContext, useEffect } from 'react';
import '../../css/logo.css';
import { universalCon } from './universalContext';
export function Logo(){
    const myCon = useContext(universalCon);

    useEffect(()=>{
        const logoSrollTo = ()=>{
            window.scrollTo(0,0);
            console.log('hi');
        }
        const logoClick = document.querySelector('.nav-logo img');

        if(logoClick){
            logoClick.addEventListener('click', logoSrollTo);
        }

        return(()=>{
            logoClick.removeEventListener('click', logoSrollTo);
        })
    }, []);

    return(
        <div className="nav-logo">
            <img src= {process.env.PUBLIC_URL+ "/images/universal_logo.webp"} alt="로고" onClick={()=>myCon.chgPage('/')} />
            {/* <img src= {process.env.PUBLIC_URL+ "/images/logo.png"} alt="로고" onClick={()=>myCon.chgPage('/')} /> */}
        </div>
    )
}