import '../../css/about.css';

export function About() {
    return (
        <>
            <div className="about-page-wrap">
                <h1>Driven For Your Life</h1>
                <div className="person-img">
                    <img src="../images/about/person2.png" alt="사람" />
                </div>
                <p>Driven. For Life.
                    ‘생명을 향한 의지’는 삼성바이오로직스의 DNA에 내재된
                    정체성이자 더 나은 삶을 향한 우리의 약속입니다.
                    더 건강한 삶을 위해 멈추지 않는 도전은
                    삼성바이오로직스만의 DNA에서 비롯됩니다.
                </p>
            </div>
            <div className="about-us">
                <h1>About Us</h1>
            </div>
        </>
    );
}