// ### Create random number ###

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// ### Temp-Checker ###

function tempChecker() {
    var temperature = Math.round(getRandomArbitrary(-5, 25));
    if (temperature < 11) {
        document.write("The weather is cold. (" + temperature + "°C)");
    }
    else {
        document.write("The weather is moderate. (" + temperature + "°C)");
    }
}

tempChecker();
