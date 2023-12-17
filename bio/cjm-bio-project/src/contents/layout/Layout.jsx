import {TopArea} from './TopArea';
import {MainArea} from './MainArea';
import {FooterArea} from './FooterArea';
import { bioConn } from '../modules/bioContent';

import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export function Layout(){

    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    });

    const goNav = useNavigate();
    const chgPage = useCallback((pgName, param) => goNav(pgName, param),[] );

    return(
        <bioConn.Provider value={{chgPage}}>
            <TopArea/>
            <MainArea />
            <FooterArea />
        </bioConn.Provider>
    );
}