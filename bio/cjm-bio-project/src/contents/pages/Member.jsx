// 로컬스트로지 생성 JS
import { useContext, useState } from 'react';
import {initData} from '../data/mem_fn.js';

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
    

    return(
        <div className="outbx">
            <section className="membx">
                <h2>회원가입</h2>
                <form action="process.php" method='post'>
                    <ul>
                        <li>
                            <label>ID : </label>
                            <input type="text" maxLength="20" placeholder='Please enter your ID' />
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    )
}