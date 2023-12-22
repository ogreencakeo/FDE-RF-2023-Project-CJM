import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlaskVial, faPlaneDeparture, faSackDollar, faEarthAsia, faUsersRectangle, faTrailer }
    from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

export function AtAGlance() {
    const selData = [
        {
            txt: '최초 개발',
            cont: '1ST 항체 바이오시밀러',
            font: <FontAwesomeIcon icon={faFlaskVial} />,
        },
        {
            txt: '국내 바이오의약품^생산∙수출',
            cont: '1위',
            font: <FontAwesomeIcon icon={faPlaneDeparture} />,
        },
        {
            txt: '매출액',
            cont: '2 조 2,840억 원',
            font: <FontAwesomeIcon icon={faSackDollar} />,
        },
        {
            txt: '글로벌 판매 허가',
            cont: '100여국',
            font: <FontAwesomeIcon icon={faEarthAsia} />,
        },
        {
            txt: '생산규모',
            cont: '19만 리터',
            font: <FontAwesomeIcon icon={faTrailer} />,
        },
    ];

    const makeCode = (data) => {
        const data_split = data.split('^');
        console.log(data_split);
        const temp = [];
        for (let i = 0; i < data_split.length; i++) {
            temp[i] = <Fragment>
                {data_split[i]}<br/>
            </Fragment>

        }
        return temp;
    }
    return (
        <div className="at-a-glance-wrap">
            <h3>CELLTRION At A Glance</h3>
            <div className="at-a-glance-div">
                {
                    selData.map((v, i) =>
                        <div className="at-a-glance-bx" key={i}>
                            <h1>{v.font}</h1>
                            {/* <h3>{v.txt}</h3> */}
                            <h3>{v.txt.indexOf('^') == -1 ? v.txt : makeCode(v.txt)}</h3>
                            <h4>{v.cont}</h4>
                        </div>
                    )

                }
            </div>
        </div>
    );
}