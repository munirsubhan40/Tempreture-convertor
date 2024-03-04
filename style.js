alert("Are you using Tempreture-Converter?")

function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput");
    const temperatureType = document.getElementById("temperatureType");
    const temperatureValue = parseFloat(temperatureInput.value);

    if (temperatureType.value === "fahrenheit") {
        const celsiusValue = (temperatureValue - 32) * 5 / 9;
        document.getElementById("result").textContent = `Result (Celsius): ${celsiusValue.toFixed(2)}`;
    } else if (temperatureType.value === "kelvin") {
        const celsiusValue = temperatureValue - 273.15;
        document.getElementById("result").textContent = `Result (Celsius): ${celsiusValue.toFixed(2)}`;
    }
}