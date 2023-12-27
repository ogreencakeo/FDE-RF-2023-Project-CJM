const historyData = {
    one: [
        {
            date: '2001.10',
            cont: 'JVC 설립을 위한 MOU 체결'
        },
        {
            date: '2002.02',
            cont: '셀트리온 설립'
        },
    ],
    two: [
        {
            date: '2005.06',
            cont: 'BMS와 제품 공급계약 체결'
        },
        {
            date: '2005.07',
            cont: '1공장 준공식(50,000L)'
        },
        {
            date: '2007.12',
            cont: '1공장 cGMP 생산 설비 미국 FDA 인준'
        },
        {
            date: '2008.08',
            cont: '코스닥 상장'
        },
    ],
    three: [
        {
            date: '2010.05',
            cont: '대규모 해외투자 유치(싱가포르 테마섹홀딩스)'
        },
        {
            date: '2011.10',
            cont: '2공장 준공식 (90,000L)'
        },
        {
            date: '2012.07',
            cont: '램시마 한국(MFDS) 판매허가 획득'
        },
        {
            date: '2013.04',
            cont: 'CT-P27 글로벌 임상 시험 개시'
        },
        {
            date: '2013.08',
            cont: '램시마 유럽(EMA) 판매허가 획득'
        },
        {
            date: '2014.01',
            cont: '허쥬마 한국(MFDS) 판매허가 획득'
        },
        {
            date: '2014.02',
            cont: 'CT-P27 글로벌 임상 2a상 시험 개시'
        },
    ],
    four : [
        {
            date : '2015.03',
            cont : '전문경영인 체제 전환'
        },
        {
            date : '2015.06',
            cont : '1·2공장 cGMP 전 생산 설비에 대한 미국 FDA 인준'
        },
        {
            date : '2016.04',
            cont : '램시마 미국(FDA) 판매허가 획득'
        },
        {
            date : '2016.10',
            cont : '램시마 누적 수출액 1조 원 달성'
        },
        {
            date : '2016.11',
            cont : '트룩시마 한국(MFDS) 판매허가 획득'
        },
        {
            date : '2016.12',
            cont : 'CT-P27 임상 2b상 시험 개시'
        },
        {
            date : '2017.02',
            cont : '트룩시마 유럽(EMA) 판매허가 획득'
        },
        {
            date : '2018.02',
            cont : '코스피 이전 상장^허쥬마 유럽(EMA) 판매허가 획득'
        },
        {
            date : '2018.05',
            cont : '연세대학교 의료원과 허혈성뇌졸증 치료제 공동개발 및 라이선스인 계약 체결'
        },
        {
            date : '2018.09',
            cont : '미국 에모리 대학교와 죽상동맥경화증 신약 개발 연구 지원 계약'
        },
        {
            date : '2018.11',
            cont : '테믹시스 미국(FDA) 판매허가 획득^트룩시마 미국(FDA) 판매허가 획득'
        },
        {
            date : '2018.12',
            cont : '허쥬마 미국(FDA) 판매허가 획득^HIV 국제조달프로그램 장기 공급자 신청'
        },
        {
            date : '2019.01',
            cont : '램시마SC 글로벌 특허 출원'
        },
        {
            date : '2019.03',
            cont : '비후성심근증 치료제 신약 CT-G20 일본 독점 판권 계약'
        },
        {
            date : '2019.04',
            cont : '리네졸리드 미국(FDA) 허가 획득'
        },
        {
            date : '2019.05',
            cont : '1공장 증설 준공식(추가 50,000L)^2030 중장기 비전 발표'
        },
        {
            date : '2019.11',
            cont : '램시마SC 유럽(EMA) 판매허가 획득'
        },
        {
            date : '2020.02',
            cont : '연매출 1조원 달성^램시마SC 한국(MFDS) 판매허가 획득'
        },
        {
            date : '2020.05',
            cont : '메르스·코로나바이러스 치료 항체 개발 국책과제 선정'
        },
        {
            date : '2020.06',
            cont : '인슐린 펜형 주사제 개발 국책과제 선정^다케다제약, 아시아태평양 지역 프라이머리 케어 사업 인수'
        },
        {
            date : '2020.08',
            cont : '허쥬마, WHO 사전적격성평가(PQ) 인증 획득'
        },
        {
            date : '2020.09',
            cont : '렉키로나 임상 2·3상 시험 개시'
        },
        {
            date : '2021.02',
            cont : '유플라이마 유럽(EMA) 판매허가 획득'
        },
        {
            date : '2021.09',
            cont : '렉키로나 한국(MFDS) 판매허가 획득'
        },
        {
            date : '2021.10',
            cont : '유플라이마 한국(MFDS) 판매허가 획득'
        },
        {
            date : '2021.11',
            cont : '렉키로나 유럽(EMA) 판매허가 획득'
        },
        {
            date : '2022.08',
            cont : '베그젤마 유럽(EMA) 판매허가 획득'
        },
        {
            date : '2022.09',
            cont : '베그젤마 미국(FDA) 판매허가 획득^베그젤마 한국(MFDS) 판매허가 획득'
        },
        {
            date : '2023.05',
            cont : '유플라이마 미국(FDA) 판매허가 획득'
        },
        {
            date : '2023.10',
            cont : '램시마SC[미국 판매명: 짐펜트라] 미국(FDA) 첫 신약 판매허가 획득'
        }
    ]
};
const imgData = {
    one: [{ img: '../images/main/history/1.jpg' }],
    two: [{ img: '../images/main/history/2.jpg' }],
    three: [
        { img: '../images/main/history/3.jpg' },
        { img: '../images/main/history/4.jpg' },
    ],
    four : [
        {img : '../images/main/history/5.jpg'},
        {img : '../images/main/history/6.jpg'},
        {img : '../images/main/history/7.jpg'},
        {img : '../images/main/history/8.jpg'},
        {img : '../images/main/history/9.png'},
    ]
};

const mainData = {
    one: [
        {
            img: './images/main/history/main/1.jpg',
            txt: '새로운 도전과 창조의 신화가 시작되다',
            cont: '서정진 회장은 2000년, 셀트리온의 전신인 넥솔을 창업해 다양한 비즈니스의 가능성을 탐색했습니다. 2002년 셀트리온은 설립 후, 바이오의약품 생산 설비를 구축하기 위한 준비를 진행하며 창업의 과정을 거쳤습니다.'
        }
    ],
    two: [
        {
            img: './images/main/history/main/2.jpg',
            txt: '성장의 기틀을 다지다',
            cont: '2003년부터 2008년까지 셀트리온은 미지의 영역을 개척하고 높이 도약할 수 있도록 기반을 다졌습니다. 수많은 난제들이 있었으나 셀트리온은 온갖 어려움을 이겨내고 사업 기반을 다졌습니다.'
        }
    ],
    three: [
        {
            img: './images/main/history/main/3.jpg',
            txt: '바이오시밀러 시대를 열다',
            cont : '2013년 5월 세계 최초 항체 바이오시밀러 램시마가 유럽의약품청(EMA)로부터 허가를 받으며 셀트리온의 글로벌 시장 진출이 본격화되었습니다. 또한 셀트리온은 글로벌 시장에 의약품을 안정적으로 공급하기 위해 2공장을 신설하고 대량 생산 역량을 갖추었습니다.'
        }
    ],
    four : [
        {
            img : './images/main/history/main/4.jpg',
            txt : '고속 성장의 궤도에 올라서다',
            cont : '2016년, 셀트리온은 유럽에 이어 미국 FDA로부터 램시마의 판매 허가를 획득하며 새로운 기회의 신대륙에 발을 내디뎠습니다. 또한 셀트리온은 항체 신약과 백신, 바이오베터 개발 등 새로운 치료제 및 신기술 개발에도 앞장서며 글로벌 종합생명공학 회사로 발전해 나가고 있습니다'
        }
    ],
};


export { historyData, imgData, mainData };