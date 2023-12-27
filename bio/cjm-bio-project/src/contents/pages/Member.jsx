// 로컬스트로지 생성 JS
import { useContext, useState } from 'react';
import {initData} from '../data/mem_fn.js';

import {Link} from 'react-router-dom';

// 컨텍스트 API 불러오기
import { bioConn } from '../modules/bioContent.jsx';

export function Member(){
    const myCon = useContext(bioConn);

    // 입력요소 상태변수
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [chkPwd, setChkPwd] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    // 에러 상태관리 변수
    const [ userIdError, setUserIdError] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [chkPwdError, setChkPwdError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const msgId = [
        "User ID must contain a minimum of 5 characters",
        "This ID is already in use!",
        "That's a great ID!",
    ];

    const msgEtc = {
        pwd: "5 to 15 digits in the form of special characters, characters, and numbers",
        confPwd: "Password verification does not match",
        req: "This is a required entry",
        email: "Please enter a valid email format",
    }; 

    const [idMsg, setIdMsg] = useState(msgId[0]);

    const changeUserId = (e) => {
        const valid = /^[A-Za-z0-9+]{5,}$/;

        if(valid.test(e.target.value)){
            initData();
            let memData = localStorage.getItem('bio-mem-data');
            memData = JSON.parse(memData);

            let isOk = true; // 기존 아이디가 있으면 상태값 false로 업데이트

            memData.forEach((v) => {
                if(v.uid === e.target.value){
                    setIdMsg(msgId[1]);
                    setUserIdError(true);
                    isOk = false;
                }
            });

            // 기존 아이디가 없으면 들어감
            if(isOk){
                setIdMsg(msgId[0]);
                setUserIdError(false);
            }
        }else{
            setUserIdError(true);
        }
        setUserId(e.target.value);
    };

    const changePwd = (e) => {
        const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        if(valid.test(e.target.value)) setPwdError(false);
        else setPwdError(true);
        setPwd(e.target.value);
    };

    const changeChkPwd = (e) => {
        if(pwd === e.target.value) setChkPwdError(false);
        else setChkPwdError(true);

        setChkPwd(e.target.value);
    };

    const changeUserName = (e) => {
        if(e.target.value !== '') setUserIdError(false);
        else setUserIdError(true);

        setUserName(e.target.value);
    };

    const changeEmail = (e) => {
        const valid = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(valid.test(e.target.value)) setEmailError(false);
        else setEmailError(true);

        setEmail(e.target.value);
    };

    const totalValid = () => {
        if(!userId) setUserIdError(true);
        if(!pwd) setPwd(true);
        if(!chkPwd) setChkPwd(true);
        if(!userName) setUserName(true);
        if(!email) setEmail(true);

        if(
            userId &&
            pwd &&
            chkPwd &&
            userName &&
            email &&
            !userIdError &&
            !pwdError &&
            !chkPwdError &&
            !userNameError &&
            !emailError
        ) return true;
        else return false;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(totalValid()){
            initData();
            let memdata = localStorage.getItem('bio-mem-data');
            memdata = JSON.parse(memdata);

            let newData = {
                idx : memdata.length + 1,
                uid : userId,
                pwd : pwd,
                unm : userName,
                eml : email
            };

            memdata.psuh(newData);
            localStorage.setItem('bio-mem-data', JSON.stringify(memdata));
            myCon.chgPage('login', {})
        }
    }

    return(
        <div className="outbx">
            <section className="membx">
                <h2>회원가입</h2>
                <form action="process.php" method='post'>
                    <ul>
                        <li>
                            <label>ID : </label>
                            <input type="text" maxLength="20" placeholder='Please enter your ID' value={userId} onChange={changeUserId} />
                            {
                                userIdError && (
                                    <div className="msg">
                                        <small style={{
                                            color : 'red', fontSize : '10px'
                                        }}>{idMsg}</small>
                                    </div>
                                )
                            }
                            {
                                !userIdError && userId && (
                                    <div className="msg">
                                        <small style={{
                                            color : 'green',
                                            fontSize : '10px'
                                        }}>
                                            {msgId[2]}
                                        </small>
                                    </div>
                                )
                            }
                        </li>
                        <li>
                            <label>Password : </label>
                            <input type="password" maxLength="20" placeholder='Please enter your Password' value={pwd} onChange={changePwd} />
                            {
                                pwdError && (
                                    <div className="msg" style={{
                                        color : 'red', fontSize : '10px'
                                    }}>{msgEtc.pwd}</div>
                                )
                            }
                        </li>
                        <li>
                            <label>Confirm Password : </label>
                            <input type="password" maxLength="20" placeholder='Please enter your Confirm Password' value={chkPwd} onChange={changeChkPwd} />
                            {
                                chkPwdError && (
                                    <div className="msg">
                                        <small style={{
                                            color : 'red', fontSize : '10px'
                                        }}>{msgEtc.confPwd}</small>
                                    </div>
                                )
                            }
                        </li>
                        <li>
                            <label>User Name : </label>
                            <input type="text" 
                                maxLength="20"
                                placeholder='Please enter your Name'
                                value={userName}
                                onChange={changeUserName}
                            />
                            {
                                userNameError && (
                                    <div className="msg">
                                        <small style={{
                                            color : 'red', fontSize : '10px'
                                        }}>{msgEtc.req}</small>
                                    </div>
                                )
                            }
                        </li>
                        <li>
                            <label>Email : </label>
                            <input type="text" maxLength="50" placeholder='Please enter your Email' value={email} onChange={changeEmail} />
                            {
                                emailError && (
                                    <div className="msg">
                                        <small style={{
                                            color : 'red', fontSize : '10px'
                                        }}>
                                            {msgEtc.email}
                                        </small>
                                    </div>
                                )
                            }
                        </li>
                        <li style={{overflow : 'hidden'}}>
                            <button className='sbtn' onClick={onSubmit}>Submit</button>
                        </li>
                        <li>
                            Are you already a Member?
                            <Link to='/login'>Log In</Link>
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    )
}