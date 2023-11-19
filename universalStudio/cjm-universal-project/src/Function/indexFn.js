// utils.js (새로운 파일로 생성)

export const getWaveText = () => {
    const waveText = 'Universal Studios';
    let waveSpanCode = '';

    let seqNum = 0;

    for (let x of waveText) {
        if (x === ' ') {
            waveSpanCode += '\u00a0\u00a0'; // &nbsp;
        } else {
            waveSpanCode += x;
        }
        seqNum++;
    }

    return `<span style="animation-delay: ${seqNum * 0.1}s;">${waveSpanCode}</span>`;
};
