import { memo } from "react";

export const FooterArea = memo(()=>{
    return(
        <div className="footer-wrap">
            <div className="footer">
                <h1>SAMSUNG BIOLOGICS</h1>
                <h2>SAMSUNG</h2>
                <p>인천광역시 연수구 송도바이오대로 300</p>
                <h2>Copyright ⓒ 2023 Samsung Biologics. All rights reserved.</h2>
            </div>
        </div>
    );
});