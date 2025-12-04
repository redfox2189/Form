document.getElementById('SubBtn').addEventListener('click', function(event) {
    const notice = document.createElement('div');
    const noticeBody = document.createElement('p');
    noticeBody.innerText = 'Data successfully entered';
    noticeBody.style.margin = '0';
    notice.appendChild(noticeBody);
    notice.style.margin = '10px';
    notice.style.padding = '10px';
    notice.style.alignSelf = 'center';
    notice.style.textAlign = 'center';
    notice.style.position = 'fixed';
    notice.style.top = 'center';
    notice.style.left = '40%';
    notice.style.backgroundColor = 'lightgrey';
    notice.style.border = '2px solid black';
    notice.style.width = '20%';
    notice.style.color = 'black';
    notice.style.fontSize = '20px';
    notice.innerbody = noticeBody;
    document.body.appendChild(notice);
    setTimeout(() => {
        document.body.removeChild(notice);
    }, 3000);
    event.preventDefault();
    const ageValue = parseInt(document.getElementById('Age').value, 10);
    const ageValueChange = parseInt(document.getElementById('Age').value+40, 10);
    const ageValueMod = ageValueChange % 256;
    if (!isNaN(ageValue) && ageValue >= 0 && ageValue <= 255) {
        document.body.style.backgroundColor = `rgb(${ageValueMod}, ${ageValueChange}, ${ageValue})`;
    }
});
