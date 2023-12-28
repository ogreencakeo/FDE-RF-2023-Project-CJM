import { shopItem } from "../data/shopItem.js";
import "../../css/shop.css";

export function Shop() {
    const selData = shopItem;
    return (
        <div className="shop-wrap">
            {selData.map((v, i) => (
                <div className="shop-bx" key={i}>
                    <div className="shop-bx-img">
                        <img src={v.img} alt={v.name} />
                    </div>
                    <section>
                        <div className="shop-cont-top">
                            <p>이너랩</p>
                            <p style={{background : v.color}}>{v.icon} {v.cat}</p>
                        </div>
                        <div className="shop-cont-middle">{v.name}</div>
                        <div className="shop-cont-foot">
                            <span>{v.cost}</span>
                            <span>{v.price}</span>
                            <span>{v.sale}</span>
                        </div>
                    </section>
                </div>
            ))}
        </div>
    );
}
