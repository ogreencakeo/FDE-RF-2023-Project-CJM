import { useLocation } from "react-router-dom";
import { Seaching } from "./module/Seaching";

export function SchPage(){
    const loc = useLocation();
    let keyword;

    if(loc.state) keyword = loc.state.keyword;

    return(
        <>
            <h1 className="tit">검색 결과</h1>
            <Seaching kword={keyword} />
        </>
    );
}