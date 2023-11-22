import {TopArea} from './TopArea';
import {MainArea} from './MainArea';
import {FooterArea} from './FooterArea';
import { useNavigate } from 'react-router-dom';
import { universalCon } from '../contents/module/universalContext';
import { useEffect } from 'react';

export function Layout(){

    useEffect(()=>{
        window.scrollTo(0, 0);
    });
    
    const goNav = useNavigate();
    const chgPage = (txt) => goNav(txt);
    return(
        <universalCon.Provider value={{chgPage}}>
            <TopArea />
            <MainArea />
            <FooterArea />
        </universalCon.Provider>
    )
}