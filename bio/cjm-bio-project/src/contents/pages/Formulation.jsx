import '../../css/formulation.css';
import {FormulationImg} from '../modules/FormulationImg';
import {BusinessCont} from '../modules/BusinessCont';

export function Formulation(){
    return(
        <>
            <FormulationImg />
            <BusinessCont cat='formulation' />
        </>
    );
}