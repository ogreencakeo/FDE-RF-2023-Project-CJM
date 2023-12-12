import { Banner } from "../modules/Banner";
import {SurviceCont} from '../modules/SurviceCont';
import '../../css/main.css';

import {surviceData} from '../data/serviceData.js';

export function Main(){
    return(
        <>
            <Banner category='main' />
            <SurviceCont />
        </>
    );
}