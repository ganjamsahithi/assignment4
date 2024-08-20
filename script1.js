const generateButton = document.getElementById('generateButton');
const randomNumberDisplay = document.getElementById('randomNumber');

generateButton.addEventListener('click', () => {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);

    if (isNaN(minValue) || isNaN(maxValue)) {
        randomNumberDisplay.textContent = "Please enter valid numbers.";
        return;
    }

    if (minValue > maxValue) {
        randomNumberDisplay.textContent = "Minimum value cannot be greater than maximum value.";
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    randomNumberDisplay.textContent = `Random Number: ${randomNumber}`;
});
