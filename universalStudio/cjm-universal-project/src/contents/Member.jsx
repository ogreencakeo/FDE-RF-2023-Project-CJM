import { Link } from "react-router-dom";

// CSS
import '../css/member.css';

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Member() {

    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [chkPwd, setChkPwd] = useState('');
    const [userName, SetUserName] = useState('');
    const [email, setEmail] = useState('');

    // 에러 상태관리 변수
    const [userIdError, setUserIdError] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [phkPwdError, setChkPwdError] = useState(false);
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

    // 아이디 유효성 검사
    const changeUserId = (e) => {
        const valid = /^[A-Za-z0-9+]{5,}$/;
        if(valid.test(e.target.value)){
            // 로컬스토리지 체크 함수 호출

            // setIdMsg(msgId[1])
            
        }
    }

    const changePwd = (e) => {
        const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

        if(valid.test(e.target.value)) setChkPwd(false);
        else setChkPwd(true);
    }

    return (
        <>
            <div className="join-the-membership-wrap">
                {/* 회원가입 박스 */}
                <div className="member-bx">
                    <h1><FontAwesomeIcon icon={faUserGroup} /></h1>
                    <h2>회원가입</h2>
                    <form action="process.php" method="post">
                        <table>
                            <tr>
                                <td><label>아이디 </label></td>
                                <td><input type="text" maxLength="20" placeholder="아이디를 입력해주세요" value={userId} onChange={changeUserId} /></td>
                            </tr>
                            <tr>
                                <td><label>비밀번호 </label></td>
                                <td><input type="password" maxLength="20" placeholder="비밀번호를 입력해주세요" /></td>
                            </tr>
                            <tr>
                                <td><label>비밀번호 확인 </label></td>
                                <td><input type="password" maxLength="20" placeholder="비밀번호를 다시 입력해주세요" /></td>
                            </tr>
                            <tr>
                                <td><label>닉네임</label></td>
                                <td><input type="text" maxLength="20" placeholder="이름을 입력해주세요" /></td>
                            </tr>
                            <tr>
                                <td><label>이메일</label></td>
                                <td><input type="text" maxLength={50} placeholder="예)universal@studio.com" /></td>
                            </tr>
                            <tr cosp>
                                <button className="sbtn">
                                    가입하기
                                </button>
                            </tr>

                        </table>
                        <p>로그인 페이지로 이동하겠습니까?
                            <strong>
                                <Link className="login-link" to='/login'>로그인하기</Link>
                            </strong>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}