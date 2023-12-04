import {TopArea} from './TopArea';
import {MainArea} from './MainArea';
import {FooterArea} from './FooterArea';
import { useNavigate } from 'react-router-dom';
import { universalCon } from '../contents/module/universalContext';
import { useCallback, useEffect, useLayoutEffect } from 'react';

export function Layout(){

    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    });
    
    const goNav = useNavigate();

    const chgPage = useCallback((pgName, param) => goNav(pgName, param), []);
    return(
        <universalCon.Provider value={{chgPage}}>
            <TopArea chgPageFn={chgPage} />
            <MainArea />
            <FooterArea />
        </universalCon.Provider>
    )
}