import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

export function GoodsItem(props) {
    console.log("props.cat :", props.cat);
    const categoryGoods = props.cat[props.category] || [];

    const showGoodsImg = (img, usage) => {
        const modelwrap = $(".img-model-wrap");
        const cbtn = $(".cbtn");
        const goods_tit = $(".goods-tit");
        const goods_img = $(".goods-img");

        goods_tit.text(usage);
        goods_img.attr("src", `../../../../images/goods/${img}`);

        modelwrap.fadeIn(300);

        cbtn.click(() => {
            modelwrap.fadeOut(300);
        });
    };
    return (
        <>
            {categoryGoods.map((v, i) => (
                <div className="goods_bx" key={i} onClick={() => showGoodsImg(v.image, v.usage)}>
                    <div className="goods_img">
                        <img src={`../../../../images/goods/${v.image}`} alt="" />
                    </div>
                    <div className="goods_content">
                        <span className="goods_store">판매 점포: {v.store}</span>
                        <span className="goods_title">{v.itemGoods}</span>
                        <span className="goods_usage">{v.usage}</span>
                        <span className="goods_content">{v.content}</span>
                    </div>
                </div>
            ))}
            {/* 사진 클릭시 모달창 */}
            <section className="img-model-wrap">
                <div className="img-model-box">
                    <h2 className="goods-tit"></h2>
                    <img className="goods-img" src="" alt="굿즈" />
                    <FontAwesomeIcon className="cbtn" icon={faXmark} />

                </div>
            </section>
        </>
    );
}
