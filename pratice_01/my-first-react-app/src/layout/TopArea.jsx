import { Link } from "react-router-dom";
import { navMenu } from "../data/navMenu.js";

// 폰트어썸
// 폰트어썸 불러오기
import { faSearch, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function TopArea() {
    return (
        <>
            <header className="top-area">
                <div className="logmsg"></div>
                <nav className="gnb">
                    <ul>
                        <li></li>
                        {
                            navMenu.map((v, i) => (
                                <li key={i}>
                                    {
                                        v.sub ? <a href="#" onClick={(e) => e.preventDefault()}>{v.txt}</a>
                                            : <Link to={v.link}>{v.txt}</Link>
                                    }
                                    {
                                        v.sub && (
                                            <div className="smenu">
                                                <ol>
                                                    {
                                                        v.sub.map((v, i) => (
                                                            <li key={i}>
                                                                <Link to={v.link}>{v.txt}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ol>
                                            </div>
                                        )
                                    }
                                </li>
                            ))
                        }
                        <li style={{marginLeft : 'auto'}}>
                            <div className="searchingGnb">
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="schbtnGnb"
                                    title="Open Search"
                                />
                                <input type="text" style={{display : 'none'}} />
                                <input id="schinGnb" type="text" placeholder="어트랙션 검색" />
                            </div>
                            <a href="#">
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        <li>
                            <Link to='/member'>회원가입</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}