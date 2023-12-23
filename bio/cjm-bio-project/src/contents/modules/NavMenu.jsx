import {Link} from 'react-router-dom';

import { navData } from '../data/navData.js';

export function NavMenu(props) {
    const selData = navData[props.cat];
    console.log(selData);
    return (
        <ul>
            {selData.map((v, i) =>
                <li className='footer-li' key={i}>
                    <Link to={v.link}> {v.txt}</Link>
                </li>
            )}
        </ul>
    )
}