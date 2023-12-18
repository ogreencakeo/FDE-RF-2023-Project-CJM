import { useLocation } from "react-router-dom";
import { Seaching2 } from "./module/Seaching2";

export function SchPage(){
    const loc = useLocation();
    let keyword;

    if(loc.state) keyword = loc.state.keyword;

    return(
        <>
            <Seaching2 kword={keyword} />
        </>
    );
}