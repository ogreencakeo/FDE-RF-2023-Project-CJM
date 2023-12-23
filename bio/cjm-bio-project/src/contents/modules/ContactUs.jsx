// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper }
    from "@fortawesome/free-regular-svg-icons";

// 데이터
import { releaseData } from "../data/releaseData";
export function ContactUs() {
    
    const selData = releaseData;
    const makeCode = () => {
        const temp = [];
        for (let i = 0; i < 6; i++) {
            temp[i] = <div className="contact-news-litte-bx" key={i}>
                <span>- {selData[i].txt}</span>
                <span>{selData[i].date}</span>
            </div>
        }
        return temp;
    }
    return (
        <div className="contact-us-wrap">
            <div className="contact-news-img-wrap">
                <img src="../images/main/news.png" alt="뉴스 이미지" />
                <section>
                    <h2><FontAwesomeIcon icon={faNewspaper} /> Contact Us</h2>
                    <p>셀트리온의 주요 소식을 실시간으로 전해드립니다</p>
                </section>
            </div>
            <div className="contact-news-cont">
                <div className="contact-news-main-img">
                    <div>
                        <div className="contact-news-main-imgs-sec">
                            <h3>보도자료</h3>
                            <h2>셀트리온,<br /> 정부 공정안전관리 평가<br /> 최고 ‘P등급’ 획득</h2>
                            <h4>2023.12.19</h4>
                        </div>
                    </div>
                </div>
                <div className="contact-news-board">
                    <div className="contact-news-more">
                        <span>NEWS</span>
                        <button>소식 더보기</button>
                    </div>
                    <div className="contact-news-bx">
                        {
                            makeCode()
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}