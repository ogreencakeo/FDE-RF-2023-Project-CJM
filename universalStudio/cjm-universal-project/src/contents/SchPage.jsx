import { useLocation } from "react-router-dom";
import { Seaching2 } from "./module/Seaching2";

export function SchPage(){
    const loc = useLocation();
    let keyword;

    if(loc.state) keyword = loc.state.keyword;

    return(
        <>
            <h1 className="tit">검색 결과</h1>
            <Seaching2 kword={keyword} />
        </>
    );
}