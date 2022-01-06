export let weather = {
    'apiKey': '10d94c1a9d6f2130fc13aa42cfcebb00'
    fetchWeather: function () {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=10d94c1a9d6f2130fc13aa42cfcebb00').then((response) => response.json()).then((data) => console.log(data))
    }
}