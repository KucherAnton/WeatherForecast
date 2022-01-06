export let weather = {
    apiKey: '10d94c1a9d6f2130fc13aa42cfcebb00',
    fetchWeather: function (city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' 
        + city 
        + '&units=metric&appid=' 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {
        
    }
};