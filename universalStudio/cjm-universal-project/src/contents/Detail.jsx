import { useLocation } from "react-router-dom";

export function Detail() {
    const loc = useLocation();
    const name = loc.state.name;
    return(
        <>
            {name}  
        </>
    );
}
