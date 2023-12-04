import '../css/hotel.css';

export function Hotel(){
    return(
        <>
            <div className="partner-hotel-wrap">
                <div className="partner-hotel-bx">
                    <ul>
                        <li><button>공식호텔</button></li>
                        <li><button>제휴호텔</button></li>
                        <li><button>관련호텔</button></li>
                    </ul>
                </div>
                <div className="partner-hotel-cont">
                    <div className="hotel-bx">
                        <div className="hotel-img">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}