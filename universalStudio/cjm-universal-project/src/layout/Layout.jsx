import {TopArea} from './TopArea';
import {MainArea} from './MainArea';
import {FooterArea} from './FooterArea';
import { useNavigate } from 'react-router-dom';
import { universalCon } from '../contents/module/universalContext';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

export function Layout(){

    

    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
        
    });

    useEffect(()=>{
        if (localStorage.getItem("universal-minfo")) {
            const minfo = JSON.parse(localStorage.getItem("universal-minfo"));
            // 유저아이콘
            const usrIcon = ["🧡", "💜", "💚", "💙", "💛", "🤎"];
            // 컨텍스트 API에 공개된 로그인 메시지 업데이트하기!
            setLogMsg("Welcome " + minfo.unm + usrIcon[Math.floor(Math.random() * 5)]);
        } // if ///////////
    },[])
    
    const goNav = useNavigate();

    const chgPage = useCallback((pgName, param) => goNav(pgName, param), []);

    // 로그인 상태 체크변수
    const [logSts, setLogSts] = useState(localStorage.getItem('minfo'));
    // 로그인 환영 메시지 상태변수
    const [logMsg, setLogMsg] = useState(null);

    const logOut = useCallback(()=>{
        localStorage.removeItem('minfo');
        setLogSts(null);
        setLogMsg(null);
        alert('로그아웃 되었습니다!');
        chgPage('/', {});
    }, [])

    return(
        <universalCon.Provider value={{chgPage, setLogSts, setLogMsg}}>
            <TopArea chgPageFn={chgPage} logSts={logSts} logMsg={logMsg} logOut={logOut}/>
            <MainArea />
            <FooterArea />
        </universalCon.Provider>
    )
}