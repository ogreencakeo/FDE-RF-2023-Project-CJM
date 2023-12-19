import { memo } from "react";
import { Logo } from "../modules/Logo";
import { NavMenu } from "../modules/NavMenu";

export const FooterArea = memo(()=>{
    return(
        <div className="footer-wrap">
            <div className="footer">
                {/* <h1>CELLTRION</h1> */}
                <div style={{textAlign : 'center'}}><Logo /></div>
                <p>인천광역시 연수구 아카데미로 23</p>
                <nav className="footer-area-nav">
                    <NavMenu cat='footer' />
                </nav>
                <h2>COPYRIGHT CELLTRION INC. ALL RIGHTS RESERVED.</h2>
            </div>
        </div>
    );
});