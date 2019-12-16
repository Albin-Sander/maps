function weatherBalloon (cityID) {
    var key = '{c28862e0f346f210273175da4c6a10f5}';
    fetch ('https://api.openweathermap.org/data/2.5/weather?id=2713659&appid=c28862e0f346f210273175da4c6a10f5')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        drawWeather(data);
    })
    .catch(function () {

    });

    
}

window.onload = function () {
    this.weatherBalloon( 6167865);
}


function drawWeather ( d ) {
    var celsius = Math.round(parseFloat(d.main.temp) -273.15);
    var fahrenheit = Math.round(((parseFloat (d.main.temp) -273.15) *1.8) +32);

    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = celsius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
}


