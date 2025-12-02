document.getElementById('SubBtn').addEventListener('click', function(event) {
    alert("Form Submitted Successfully!");
    event.preventDefault();
    const ageValue = parseInt(document.getElementById('Age').value, 10);
    if (!isNaN(ageValue) && ageValue >= 0 && ageValue <= 255) {
        document.body.style.backgroundColor = `rgb(${ageValue}, ${ageValue}, ${ageValue})`;
    } else {
        alert("Please enter a valid age between 5 and 120.");
    }
});
