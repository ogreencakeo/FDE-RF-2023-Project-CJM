import { useContext } from "react"
import { bioConn } from "./bioContent"

export function Logo(){

    const myCon = useContext(bioConn);
    return(
        <>
            <img src="../images/main/Samsung_Biologics_Logo.svg.png" alt="로고"
                onClick={()=>myCon.chgPage('/')}/>
        </>
    )
}