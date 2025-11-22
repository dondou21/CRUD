function generateRandoNumber() {
    return Math.floor(Math.random() * 100) +1;
}

function celciusToFaherenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

module.exports = {
    generateRandoNumber,
    celciusToFaherenheit
};