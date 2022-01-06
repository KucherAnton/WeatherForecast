let weather = {
    apiKey: '10d94c1a9d6f2130fc13aa42cfcebb00',
    fetchWeather: function (city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' 
        + city 
        + '&units=metric&appid=' 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
        console.log('Проверка')
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.speed;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerText = 'Weather in' + city;
        document.querySelector('.search-icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector('.description__weather').innerText = description;
        document.querySelector('.temp').innerText = temp + '°C';
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%';
        document.querySelector('.wind').innerText = 'Wind speed: ' + speed + ' km/h';
        console.log('Проверка')
    }
};
