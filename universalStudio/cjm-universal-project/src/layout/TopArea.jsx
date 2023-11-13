// 상단영역
import { Link } from "react-router-dom";
import { navMenu } from "../data/navMenu";

export function TopArea() {
    return (
        <div className="header-top">
            <nav>
                <div className="top-nav-bx">
                    <ul className="top-nav">
                        <li>
                            <a href="#">로그인</a>
                        </li>
                        <li>
                            <a href="#">회원가입</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-logo">
                    <img src="./images/universal_logo.webp" alt="로고" />
                </div>
                <ul className="bottom-nav">
                    {navMenu.map((v, i) => (
                        <li key={i}>
                            <Link to={v.link}>
                                <span data-hover={v.txt}>{v.txt}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
