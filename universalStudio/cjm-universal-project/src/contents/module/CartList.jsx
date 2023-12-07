export function CartList() {
    const selData = JSON.parse(localStorage.getItem("cart"));

    console.log(selData);

    //정규식함수(숫자 세자리마다 콤마해주는 기능)
    function addComma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <>
            <h1>장바구니Hi</h1>
            <section id="cartlist">
                <a href="#" className="cbtn cbtn2">
                    <span>닫기버튼</span>
                </a>
                <table>
                    <caption>
                        <h1> 카트 리스트</h1>
                    </caption>
                    <tbody>
                        <tr>
                            <th>상품</th>
                            <th>번호</th>
                            <th>수량</th>
                            <th>단가</th>
                            <th>합계</th>
                            <th>삭제</th>
                        </tr>

                        {selData.map((v, i) => (
                            <tr key={i}>
                                <td>{v.항목}</td>
                                <td>{v.번호}</td>
                                <td>{v.수량}</td>
                                <td>{v.가격}</td>
                                <td>{v.가격 * v.수량}</td>
                                {/* <td>{addComma(v.ginfo[3])}원</td> */}

                                <td>
                                    <button className="cfn" data-idx={v.idx}>
                                        ×
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </section>
        </>
    );
}
