import { goods } from "../../data/유니버설-굿즈";
export function GoodsItem(props) {
    return (
        {
            goods[props.goodscat].map((v, i) => (
                <div className="goods_bx">
                    <div class="goods_img">
                        <img src="./images/goods/goods1/goods1.jpg" alt="" />
                    </div>
                    <div class="goods_content">
                        <span class="goods_store">판매 점포 : 슈퍼 닌텐도 월드™ 입구 부근 등</span>
                        <span class="goods_title">슈퍼 닌텐도 월드™</span>
                        <span class="goods_usage">파워 업 밴드</span>
                        <span class="goods_content">
                            ※ 파워 업 밴드는 슈퍼 닌텐도 월드™ 입구 부근의 카트 등에서 미리 구매하시는 것을 추천합니다.
                        </span>
                    </div>
                </div>
            ))}
    );
}
