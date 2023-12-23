import { memo } from "react";
import { NavMenu } from "../modules/NavMenu";

export const FooterArea = memo(()=>{
    return(
        <div className="footer-wrap">
            <div className="footer">
                <p>인천광역시 연수구 아카데미로 23 032-850-5000</p>
                <nav className="footer-area-nav">
                    <NavMenu cat='footer' />
                </nav>
                <h2>COPYRIGHT CELLTRION INC. ALL RIGHTS RESERVED.</h2>
            </div>
        </div>
    );
});