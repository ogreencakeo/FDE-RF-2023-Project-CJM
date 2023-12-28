import { Link } from 'react-router-dom';

import { navData } from '../data/navData.js';

export function NavMenu(props) {
    const selData = navData[props.cat];
    console.log(selData);
    return (
        <ul>
            {selData.map((v, i) =>
                <li className='footer-li' key={i}>
                    {
                        v.sub ? <span>{v.txt}</span> : <Link to={v.link}> {v.txt}</Link>
                    }
                    {
                        v.sub && (
                            <div className="smenu">
                                <ol>
                                    {
                                        v.sub.map((v, i) =>
                                            <li key={i}>
                                                <Link to={v.link}>{v.txt}</Link>
                                            </li>
                                        )
                                    }
                                    {
                                        logSts === null && (
                                            <li>
                                                <Link to='/member'>JOIN US</Link>
                                                <Link to='/login'>LOGIN</Link>
                                            </li>
                                        )
                                    }
                                </ol>
                            </div>
                        )
                    }
                </li>
            )}
        </ul>
    )
}