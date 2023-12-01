import { Link } from "react-router-dom";

// CSS
import '../css/member.css';

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faUserGroup} from "@fortawesome/free-solid-svg-icons";

export function Member(){
    return(
        <>
            <div className="join-the-membership-wrap">
                {/* 회원가입 박스 */}
                <div className="member-bx">
                    <h1><FontAwesomeIcon icon={faUserGroup} /></h1>
                    <h2>회원가입</h2>
                    <form action="process.php" method="post">
                        <ul>
                            {/* 아이디 */}
                            <li>
                                <label>아이디 </label>
                                <input type="text" maxLength="20" placeholder="아이디를 입력해주세요" />
                            </li>
                            {/* 비밀번호 */}
                            <li>
                                <label>비밀번호 </label>
                                <input type="password" maxLength="20" placeholder="비밀번호를 입력해주세요" />
                            </li>
                            {/* 비밀번호 확인 */}
                            <li>
                                <label>비밀번호 확인 </label>
                                <input type="password" maxLength="20" placeholder="비밀번호를 한번 더 입력해주세요" />
                            </li>
                            {/* 이름 */}
                            <li>
                                <label>닉네임</label>
                                <input type="text" maxLength="20" placeholder="이름을 입력해주세요" />
                            </li>
                            {/* 이메일 */}
                            <li>
                                <label>이메일</label>
                                <input type="text" maxLength={50} placeholder="예)universal@studio.com" />
                            </li>
                            {/* 버튼 */}
                            <li style={{overflow : 'hidden'}}>
                                <button className="sbtn">
                                    가입하기
                                </button>
                            </li>
                            {/* 로그인 페이지 링크 */}
                            <li>
                                로그인 페이지로 이동하겠습니까?
                                <Link to='/login'>로그인하기</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    )
}