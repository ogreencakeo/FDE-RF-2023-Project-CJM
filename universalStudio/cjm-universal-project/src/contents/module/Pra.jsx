import { useState } from "react"
import { initData } from "../../Function/mem_fn";

export function Pra(){

    const [logSts, setLogSts] = useState(localStorage.getItem('universal-minfo'));
    


    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');

    const [userIdError, setUserIdError] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const msgId = ["반드시 입력하셔야 합니다.", "아이디가 존재하지 않습니다."];
    const msgPwd = ["반드시 입력하셔야 합니다.", "비밀번호가 일치하지 않습니다."];

    const [idMsg, setIdMsg] = useState(msgId[0]);
    const [pwdMsg, setPwdMsg] = useState(msgPwd[0]);

    const changeUserId = (e) => {
        if(e.target.value !== '') setUserIdError(false);
        else{
            setIdMsg(msgId[0]);
            setUserIdError(true);
        }
        setUserId(e.target.value);
    };

    const changePwd = (e) => {
        if(e.target.value !== '') setPwdError(false);
        else{
            setPwdError(true);
            setPwdMsg(msgPwd[0]);
        }
        setPwd(e.target.value)
    };

    const totalValid = () => {
        if(!userId) setUserIdError(true);
        if(!pwd) setPwdError(true);
        if(userId && pwd) return true;
        else return false;
    };

    const onSubmit = (e) => {
        if(totalValid){
            initData();
            let memData = localStorage.getItem('universal-mem-data');
            memData = JSON.parse(memData);

            let findData = memData.find((v) => {
                if(v['uid'] === userId) return true;
            });

            if(findData){
                setUserIdError(false);
                if(findData['pwd'] === [pwd]){
                    setPwdError(false);
                    localStorage.setItem('universal-minfo', JSON.stringify(findData));
                    myCon.setLogSts(localStorage.getItem('universal-minfo'))
                }else{
                    setPwdMsg(msgPwd[1]);
                    setPwdError(true);
                }
            }else{
                setIdMsg(msgId[1]);
                setUserIdError(true);
            }

        }
    };

    return(
        <>
            <div className="login-bx">
                <form action="process.php" method="post">
                    <ul>
                        <li>
                            <input type="text" maxLength='20' placeholder="아이디를 입력" value={userId} onChange={changeUserId} />
                            {
                                userIdError && (
                                    <div className="msg" style={{color : 'red', fontSize : '10px'}}>{msgId}</div>
                                )
                            }
                        </li>
                        <li>
                            <input type="password" maxLength='20' placeholder="비밀번호 입력" value={pwd} onChange={changePwd} />
                        </li>
                    </ul>
                </form>
            </div>
            <div>
                <button onClick={onSubmit}></button>
            </div>
        </>
    )
}