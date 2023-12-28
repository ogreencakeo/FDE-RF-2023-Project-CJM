import React, { useState } from "react";
import { shopItem } from "../data/shopItem.js";
import "../../css/shop.css";

export function Shop() {
    const [selectedCategories, setSelectedCategories] = useState(["antioxidant", "vitality", "blood", "bone", "muscle"]);

    const changeList = (e) => {
        const cid = e.target.id;
        const isChecked = e.target.checked;
        console.log('클릭한 체크박스:', cid, isChecked);

        setSelectedCategories((prevCategories) => {
            console.log('이전 카테고리:', prevCategories);
            if (isChecked) {
                return [...prevCategories, cid];
            } else {
                return prevCategories.filter((v) => v !== cid);
            }
        });
    };

    const makeList = () => {
        // 선택된 카테고리만 필터링
        const filteredData = shopItem.filter((item) => selectedCategories.includes(item.cat));

        return filteredData.map((v, i) => (
            <div className="shop-bx" key={i}>
                <div className="shop-bx-img">
                    <img src={v.img} alt={v.name} />
                </div>
                <section>
                    <div className="shop-cont-top">
                        <p>이너랩</p>
                        <p style={{ background: v.color }}>{v.icon} {v.txt}</p>
                    </div>
                    <div className="shop-cont-middle">{v.name}</div>
                    <div className="shop-cont-foot">
                        <p><del>{v.cost}원</del></p>
                        <p>{v.price}원</p>
                        <p>{v.sale}%</p>
                    </div>
                </section>
            </div>
        ));
    };

    return (
        <div className="shop-wrap">
            <div className="optbx">
                <label htmlFor="antioxidant">항산화</label>
                <input type="checkbox" className="chkbx" id="antioxidant" defaultChecked={selectedCategories.includes("antioxidant")} onChange={changeList} />
                <label htmlFor="vitality">피로개선</label>
                <input type="checkbox" className="chkbx" id="vitality" defaultChecked={selectedCategories.includes("vitality")} onChange={changeList} />
                <label htmlFor="blood">혈행건강</label>
                <input type="checkbox" className="chkbx" id="blood" defaultChecked={selectedCategories.includes("blood")} onChange={changeList} />
                <label htmlFor="bone">뼈건강</label>
                <input type="checkbox" className="chkbx" id="bone" defaultChecked={selectedCategories.includes("bone")} onChange={changeList} />
                <label htmlFor="muscle">근육증진</label>
                <input type="checkbox" className="chkbx" id="muscle" defaultChecked={selectedCategories.includes("muscle")} onChange={changeList} />
            </div>
            <div className="shop-bx-wrap">
                {makeList()}
            </div>
        </div>
    );
}
