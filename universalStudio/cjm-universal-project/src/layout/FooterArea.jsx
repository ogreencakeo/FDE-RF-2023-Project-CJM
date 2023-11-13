// 하단영역

import {footerMenu} from '../data/footerMenu';

export function FooterArea() {
    return (
        <div className="footer">
            <div className="footer-wrap">
                <div className="footer-wrap-top">
                    <div className="footer-left">
                        UNIVERSAL STUDI<i className="fa-regular fa-face-smile"></i>
                    </div>
                    <div className="footer-right">
                        <img src="./images/character/charactre1.png" alt="슈퍼마리오" />
                        <img src="./images/character/character2.png" alt="햇님" />
                    </div>
                </div>
                <div className="footer-wrap-bottom">
                    <div>
                        <ul>
                            <li>
                                <a href="https://www.usj.co.jp/web/ja/jp" target="_blank">
                                    日本語
                                </a>
                            </li>
                            {
                                footerMenu.map(v =>
                                    <li>
                                        <a href={v.footerMenu1['link']}>{v.footerMenu1['txt']}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="#" target="_blank">
                                    저작권과 상표{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    이 사이트에 대하여
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    개인정보 보호정책
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    한국어
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    사이트맵
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        TM & © Universal Studios. All rights reserved.
                        <br />
                        ※ 사진은 이미지입니다.
                        <br />
                        ※본 사이트에 게재된 사진과 동영상에는 방문하신 시점의 운영 방법 및 위생 강화 대책 가이드라인을
                        따르지 않은 내용도 포함되어 있습니다.
                    </div>
                </div>
            </div>
        </div>
    );
}
