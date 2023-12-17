import { navData } from '../data/navData.js';
import {Link} from 'react-router-dom';

export function NavMenu(props) {
    const selData = navData[props.cat];
    console.log(selData);
    return (
        <ul>
            {selData.map((v, i) =>
                <li key={i}>
                    <Link to={v.link}> {v.txt}</Link>
                </li>
            )}
        </ul>
    )
}