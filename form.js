document.getElementById('SubBtn').addEventListener('click', function(event) {
    alert("Form Submitted Successfully!");
    event.preventDefault();
    const ageValue = parseInt(document.getElementById('Age').value, 10);
    const ageValueChange = parseInt(document.getElementById('Age').value+40, 10);
    const ageValueMod = ageValueChange % 256;
    if (!isNaN(ageValue) && ageValue >= 0 && ageValue <= 255) {
        document.body.style.backgroundColor = `rgb(${ageValueMod}, ${ageValueChange}, ${ageValue})`;
    }
});
