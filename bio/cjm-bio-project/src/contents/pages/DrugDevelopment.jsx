import '../../css/formulation.css';
import { BusinessCont } from "../modules/BusinessCont";
import { FormulationImg } from "../modules/FormulationImg";

export function DrugDevelopment(){
    return(
        <>
            <FormulationImg />
            <BusinessCont cat='newDrugDevelopment' />
        </>
    )
}