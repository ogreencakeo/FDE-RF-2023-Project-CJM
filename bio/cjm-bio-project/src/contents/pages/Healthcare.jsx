import '../../css/formulation.css';
import { BusinessCont } from "../modules/BusinessCont";
import { FormulationImg } from "../modules/FormulationImg";

export function Healthcare(){
    return(
        <>
            <FormulationImg />
            <BusinessCont cat='digitalHealthcare' />
        </>
    )
}