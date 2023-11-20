import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navMenu } from '../data/navMenu';
import { Logo } from '../contents/module/Logo';
// import '../css/nav.css';
export function TopArea() {
    return (
        <>
            <header className="top-area">
                <nav className="gnb">
                    <ul>
                        <li>
                            <Logo />
                        </li>

                        {
                            navMenu.map((v, i) =>
                                <li key={i}>
                                    <Link to={v.link}>{v.txt}</Link>
                                    {
                                        v.sub && (
                                            <div className="smenu">
                                                <ol>
                                                    {
                                                    v.sub.map((v, i) =>
                                                        <li key={i}>
                                                            <Link to={v.link}>{v.txt}</Link>
                                                        </li>)

                                                    }
                                                </ol>
                                            </div>
                                        )
                                    }
                                </li>
                            )
                        }
                        <li style={{marginLeft: 'auto'}}>
                            <Link to='/member'>Join US</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                    {/* <button className='bambtn'></button> */}
                </nav>
            </header>
        </>
    );
}
