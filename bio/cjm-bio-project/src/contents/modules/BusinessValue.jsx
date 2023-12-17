import { business_data } from '../data/business_data.js';



export function BusinessValue(props) {
    const selData = business_data[props.cat];
    return (
        <>
            {
                selData.map((v, i) =>
                    <div className="bio-talent-bx" key={i}>
                        {v.icon}
                        {v.txt}
                        {v.txt2}
                    </div>
                )
            }
        </>
    );
}