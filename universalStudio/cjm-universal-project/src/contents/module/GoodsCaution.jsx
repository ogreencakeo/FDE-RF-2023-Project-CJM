import { cautionData } from "../../data/module_data/caution_data";

export function GoodsCaution(props) {
    const selData = cautionData[props.caution]
    return (
        <div className="goods_caution_wrap">
            <div className="goods_caution_img">
                <img src="../../../images/character/character3.png" alt="굿즈 주의사항" />
            </div>
            <div className="goods_caution_content">
                {
                    selData.map((v, i) =>
                        <div key={i}>
                            <p>{v}</p>
                        </div>

                    )
                }
            </div>
        </div>
    );
}
