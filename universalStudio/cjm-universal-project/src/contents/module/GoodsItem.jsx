    export function GoodsItem(props) {
        console.log('props.cat :', props.cat);
        const categoryGoods = props.cat[props.category] || [];
        return (
            <>
                {categoryGoods.map((v, i) => (
                    <div className="goods_bx" key={i}>
                        <div className="goods_img">
                            <img src={`../../../../images/goods/${v.image}`} alt="" />
                        </div>
                        <div className="goods_content">
                            <span className="goods_store">판매 점포: {v.store}</span>
                            <span className="goods_title">{v.itemGoods}</span>
                            <span className="goods_usage">{v.usage}</span>
                            <span className="goods_content">
                                {v.content}
                            </span>
                        </div>
                    </div>
                ))}
            </>
        );
    }