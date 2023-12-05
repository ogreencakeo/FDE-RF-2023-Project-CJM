import '../css/login.css';
import { Seaching2 } from './module/Seaching2';
export function Login(){
    return(
        <div className="login-page-wrap">
            <div className="login-bx">
                <h1>로그인</h1>
                <ul>
                    <li><input type="text" maxLength="20" placeholder="아이디를 입력해주세요" /></li>
                    <li><input type="password" maxLength="20" placeholder="비밀번호를 입력해주세요" /></li>
                </ul>
                <div className="find-id-password">
                    <span>아이디 찾기</span>
                    <span>비밀번호 찾기</span>
                </div>
                <div className="login-button">
                    <button>로그인</button>
                    <button>회원가입</button>
                </div>
            </div>
        </div>
    );
}