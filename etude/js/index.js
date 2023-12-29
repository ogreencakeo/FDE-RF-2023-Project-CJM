
const navList = document.querySelector('.nav-wrap ul');
for(let i=0; i<navData.length; i++){
    const temp = [];
    temp[i] = `
        <li>${navData[i]}</li>
    `
}
navList.innerHTML += temp;