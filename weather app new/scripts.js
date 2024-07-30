// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const cityNameEl = document.getElementById('city-name');
    const temperatureEl = document.getElementById('temperature');
    const conditionsEl = document.getElementById('conditions');
    const updateWeatherButton = document.getElementById('update-weather');

    const weatherData = [
        { city: 'Delhi', temperature: '20°C', conditions: 'cloudy' },
        { city: 'Noida', temperature: '28°C', conditions: 'warm' },
        { city: 'Baghpat', temperature: '12°C', conditions: 'rain' },
        { city: 'Baraut', temperature: '10°C', conditions: 'Windy' },
        { city: 'Mumbai', temperature: '25°C', conditions: 'sunny' },
        { city: 'Bangalore', temperature: '5°C', conditions: 'cold' },
        { city: 'Gautam Buddha Nagar', temperature: '30°C', conditions: 'Hot' }
    ];

    function getRandomWeather() {
        const randomIndex = Math.floor(Math.random() * weatherData.length);
        return weatherData[randomIndex];
    }

    function updateWeather() {
        const weather = getRandomWeather();
        cityNameEl.textContent = weather.city;
        temperatureEl.textContent = weather.temperature;
        conditionsEl.textContent = weather.conditions;
    }

    updateWeatherButton.addEventListener('click', updateWeather);

    // Initial weather update
    updateWeather();
});
