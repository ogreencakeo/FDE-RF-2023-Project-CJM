import { Link } from "react-router-dom";
import { navMenu } from "../data/navMenu.js";

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

                    </ul>
                </nav>
            </header>
        </>
    )
}