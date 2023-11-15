import { goods } from "../../data/유니버설-굿즈";

export function GoodsItem(props) {
    return goods[0][props.cat].map((v, i) => (
        <div className="goods_bx" key={i}>
            <div className="goods_img">
                <img src={`../../images/goods/${v.image}.jpg`} alt="" />
            </div>
            <div className="goods_content">
                <span className="goods_store">판매 점포 : {v.store}</span>
                <span className="goods_title">{v.itemGoods}</span>
                <span className="goods_usage">{v.usage}</span>
                <span className="goods_content">
                    {v.content}
                </span>
            </div>
        </div>
    ))
}