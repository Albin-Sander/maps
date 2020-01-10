window.addEventListener('load', () => {
    let long;
    let lat;

    let tempCelsius = document.querySelector(".Celsius");
    let temperatureInfo = document.querySelector(".Info");
    let locationTimeZone = document.querySelector(".timezone");

    


    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const apiCall = proxy + "https://api.darksky.net/forecast/d3c612489c14f20b69123b8d0828d0f8/" + lat + "," + long + "?units=si";

            fetch(apiCall)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                const {temperature, currently, icon} = data.currently;
                tempCelsius.textContent = temperature;
                temperatureInfo.textContent = currently;
                locationTimeZone.textContent = data.timezone;

                showIcons(icon, document.querySelector(".icon"));
            });

        });
    }
    function showIcons(icon, iconID) {
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);


    }
})