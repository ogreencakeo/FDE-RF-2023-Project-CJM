import { Link } from "react-router-dom";
import "../css/login.css";
import { Seaching2 } from "./module/Seaching2";
import { useState } from "react";
export function Login() {
    const [userId, setUserId] = useState("");
    const [pwd, setPwd] = useState("");

    const [userIdError, setUserIdError] = useState(false);
    const [pwdError, setPwdError] = useState(false);

    const msgId = ["반드시 입력하셔야 합니다.", "아이디가 존재하지 않습니다."];

    const msgPwd = ["반드시 입력하셔야 합니다.", "비밀번호가 일치하지 않습니다."];

    const [idMsg, setIdMsg] = useState(msgId[0]);
    const [pwdMsg, setPwdMsg] = useState(msgPwd[0]);

    // 아이디 유효성 검사
    const changeUserId = (e) => {

    };

    return (
        <div className="login-page-wrap">
            <div className="login-bx">
                <h1>로그인</h1>
                <form method="post" action="process.php">
                    <ul>
                        <li>
                            <input type="text" maxLength="20" placeholder="아이디를 입력해주세요" value={userId} onChange={changeUserId} />
                        </li>
                        <li>
                            <input type="password" maxLength="20" placeholder="비밀번호를 입력해주세요" value={pwd} />
                        </li>
                    </ul>
                </form>
                <div className="find-id-password">
                    <span>아이디 찾기</span>
                    <span>비밀번호 찾기</span>
                </div>
                <div className="login-button">
                    <button>로그인</button>
                    <button>
                        <Link to="/member">회원가입</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
