
// CSS
import '../css/member.css';


// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

// 로컬스토리지 생성 JS
import { clearData, initData} from '../Function/mem_fn.js';

export function Member(){

    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [chkPwd, setChkPwd] = useState('');
    const [userName, SetUserName] = useState('');
    const [email, setEmail] = useState('');

    const [userIdError, setUserIdError] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [chkPwdError, setChkPwdError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const msgId = [
        '아이디는 최소 5문자가 포함되어있습니다.',
        '이미 사용중인 아이디입니다.',
        '사용 가능한 아이디입니다.'
    ];

    const msgEtc = {
        pwd : '특수문자, 문자, 숫자 형태로 5~15자리를 사용하십시오.',
        confPwd : '비밀번호 확인이 일치하지 않습니다.',
        req : '필수항목은 반드시 기입하셔야 합니다.',
        email : '이메일 형식에 맞게 입력해주세요'
    };

    const [idMsg, setIdMsg] = useState(msgId[0]);

    const changeUserId = (e) => {
        const valid = /^[A-Za-z0-9+]{5,}$/;
        if(valid.test(e.target.value)){
            initData();
            let memData = localStorage.getItem('universal-mem-data');
            memData = JSON.parse(memData);

            let isOk = true;

            memData.forEach((v) => {
                if(v.uid === e.target.value){
                    setIdMsg(msgId[1]);
                    setUserIdError(true);
                    isOk = false;
                }
            });

            if(isOk){
                setIdMsg(msgId[2]);
                setUserIdError(false);
            }

        }else{
            setIdMsg(msgId[0]);
            setUserIdError(true);
        }
        setUserId(e.target.value);
    };

    const changePwd = (e) => {
        const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        if(valid.test(e.target.value))setPwdError(false);
        else setPwdError(true);

        setPwd(e.target.value);
    };


    return(
        <div className="join-the-membership-wrap">
            <div className="member-bx">
                <h1><FontAwesomeIcon icon={faUserGroup} /></h1>
                <h2>회원가입</h2>
                <form action="process.php" method='post'>
                    <table>
                        <tr>
                            <td><label>아이디</label></td>
                            <td>
                                <input type="text" maxLength='20' placeholder='아이디를 입력해주세요' onChange={changeUserId} value={userId} />
                                {
                                    userIdError && (
                                        <div className="msg" 
                                        style={{
                                            color:'red',
                                            fontSize : '10px'
                                        }}>{idMsg}</div>
                                    )
                                }
                                {
                                    !userIdError && userId && (
                                        <div className="msg"
                                        style={{
                                            color : 'green',
                                            fontSize : '10px'
                                        }}>
                                            {msgId[2]}
                                        </div>
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <td><label>비밀번호</label></td>
                            <td>
                                <input type="password" maxLength='20' placeholder='비밀번호를 입력해주세요' value={pwd} onChange={changePwd} />
                                {
                                    pwdError && (
                                        <div className="msg">
                                            <small style={{
                                                color : 'red',
                                                fontSize : '10px'
                                            }}>{msgEtc.pwd}</small>
                                        </div>
                                    )
                                }
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}