import {bannerData} from '../../data/bannerData';
import '../../css/banner.css';

export function Banner(props) {

    const selData = bannerData[props.option];
    console.log(selData);

    const A_TM = 800;
    const A_ES = 'easeInOutQuint';
    let cSts = 0;
    let sNum = 0;

    const makeSlideList = (data) => {
        return data.map((v, i)=> (
            <li className='slider_li' key={i}>
                <img src={v.image} alt={v.txt} />
                <section className='bantit'>
                    <h1>{v.tit}</h1>
                    <h2>{v.cont[0]}</h2>
                    <h2>{v.cont[1]}</h2>
                </section>
            </li>
        ));
    };

    return (
        <div className="banner">
            <ul className="slider">{makeSlideList(selData)}</ul>
        </div>
    );
}
