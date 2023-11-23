import {univerRecomData} from '../../data/module_data/uniRecomm_data';
import '../../css/universal_recomm.css';

export function UniverReInfo(props){
    const selData = univerRecomData[props.category];
    return (
        <div className="universal_recommend_info">
            <h1>{props.category == 'food'?  '푸드&레스토랑의 추천 정보':''}</h1>
            <table>
                <tbody>
                    {
                        selData.map((v,i) =>
                            <tr key={i}>
                                <td>
                                    <img src={v.img} alt={v.txt} />
                                </td>
                                <td>
                                    <span>{v.txt}</span>
                                </td>
                                <td>
                                    <span>{v.cont}</span>
                                </td>
                            </tr>
                        )
                    }
                    {/* <tr>
                        <td>저알레르기 메뉴</td>
                        <td></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}