import { Formulation } from "./Formulation";
import { BioBetter } from "./BioBetter";
import { DrugDevelopment } from "./DrugDevelopment";
import { Healthcare } from "./Healthcare";

export function NewMedicines(){
    return(
        <>
            <Formulation />
            <BioBetter />
            <DrugDevelopment />
            <Healthcare />
        </>
    );
}