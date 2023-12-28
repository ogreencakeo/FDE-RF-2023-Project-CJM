// 로컬스 데이터 초기화 함수
import { useContext, useState } from "react";
import { initData } from "../data/mem_fn"
// 컨텍스트 API
import { bioConn } from "../modules/bioContent"

// 제이쿼리
import $ from 'jquery';

export function Login(){
    const myCon = useContext(bioConn);
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [userIdError, setUserIdError] = useState(false);
    const [pwdError, setPwdError] = useState(false);

    const msgId = [
        "This is a required entry", //필수입력
        "ID does not exist", //아이디가 존재하지 않습니다
    ];
    const msgPwd = [
        "This is a required entry", 
        "Password doesn't match",
    ];

    const [idMsg, setIdMsg] = useState(msgId[0]);
    const [pwdMsg, setPwdMsg] = useContext(msgPwd[0]);

    const changeUserId = (e) => {
        if(e.target.value !== '') setUserIdError(false);
        else{
            setIdMsg(msgId[0]);
            setUserIdError(true);
        }
        setUserId(e.target.value);
    };

    return(
        <div className="login-bx">
            <section className="membx" style={{minHeight : '300px'}}>
                <h2>LOG IN</h2>
                <form method="post" action="process.php">
                    <ul>
                        <li>
                            <label>ID : </label>
                            <input type="text" maxLength="20" placeholder="Please enter your ID" value={userId} onChange={changeUserId}  />
                        </li>
                        <li>
                            <label>Password : </label>
                            <input type="password" maxLength='20' placeholder="Please enter your Password" value={pwd} onChange={changePwd} />
                        </li>
                        <li style={{overflow : 'hidden'}}>
                            <button className="sbtn" onClick={onSubmit}>Submit</button>
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    )
}