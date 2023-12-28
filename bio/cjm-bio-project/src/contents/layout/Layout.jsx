import {TopArea} from './TopArea';
import {MainArea} from './MainArea';
import {FooterArea} from './FooterArea';
import { bioConn } from '../modules/bioContent';

import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export function Layout(){
    // 로그인 상태 체크변수
    const [logSts, setLogSts] = useState(localStorage.getItem('bio-minfo'));
    const [logMsg, setLogMsg] = useState(null);

    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    });

    const goNav = useNavigate();
    const chgPage = useCallback((pgName, param) => goNav(pgName, param),[] );

    // 로그아웃
    const logOut = useCallback(() => {
        localStorage.removeItem('bio-minfo');
        setLogSts(null);
        setLogMsg(null);
    }, []);

    useEffect(()=>{
        if(localStorage.getItem('bio-minfo')){
            const minfo = JSON.parse(localStorage.getItem('bio-info'));
            setLogMsg(`welcome ${minfo.unm}`);
        }
    }, [])

    return(
        <bioConn.Provider value={{chgPage, logSts, setLogSts, setLogMsg}}>
            <TopArea chgPageFn={chgPage} logSts={logSts} logMsg={logMsg} logOut={logOut} />
            <MainArea />
            <FooterArea />
        </bioConn.Provider>
    );
}