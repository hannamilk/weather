document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch (city) {
    var key = '0db0092daf2b070387aca30b46c4f1f6';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp){
        return resp.json()
    })
        .then(function (data) {
            console.log(data)
        })
        .catch(function () {

        })
}

function cityWeather(e){
    weatherDataFetch('Tallinn')
}