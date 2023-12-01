export function Member(){
    return(
        <>
            <div className="join-the-membership-wrap">
                <div className="member-bx">
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
                                <input type="text" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    )
}