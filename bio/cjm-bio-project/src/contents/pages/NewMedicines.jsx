import { Formulation } from "./Formulation";
import { BioBetter } from "./BioBetter";
import { DrugDevelopment } from "./DrugDevelopment";
import { Healthcare } from "./Healthcare";
import { Route, Routes } from "react-router-dom";

export function NewMedicines(){
    return(
        <Routes>
            <Route element=''/>
            <Route path="newformulation" element={<Formulation />}/>
            <Route path="bioBetter" element={<BioBetter />}/>
            <Route path="newDrugDevelopment" element={<DrugDevelopment />}/>
            <Route path="digitalHealthcare" element={<Healthcare />}/>
        </Routes>
    );
}