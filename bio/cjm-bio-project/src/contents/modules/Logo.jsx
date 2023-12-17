import { useContext } from "react"
import { bioConn } from "./bioContent"

export function Logo(){

    const myCon = useContext(bioConn);
    return(
        <>
            <img src="../images/main/header_logo.png" alt="로고"
                onClick={()=>myCon.chgPage('/')}/>
        </>
    )
}