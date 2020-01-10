window.addEventListener('load', () => {
    let long;
    let lat;

    


    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const apiCall = proxy + "https://api.darksky.net/forecast/d3c612489c14f20b69123b8d0828d0f8/" + lat + "," + long;

            fetch(apiCall)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
            });

        });
    }
})