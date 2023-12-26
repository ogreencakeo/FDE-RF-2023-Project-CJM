import '../../css/formulation.css';
import { BusinessCont } from "../modules/BusinessCont";
import { FormulationImg } from "../modules/FormulationImg";

export function BioBetter(){
    return(
        <>
            <FormulationImg />
            <BusinessCont cat='bioBetter' />
        </>
    );
}