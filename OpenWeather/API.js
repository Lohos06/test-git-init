const Weather = document.getElementById('Weather');

const apiBase = "https://api.openweathermap.org"
const apiKey = "&appid=478961f661182f57028eeaf97e5bd772"

navigator.geolocation.getCurrentPosition((position) => {
    fetch(apiBase + "/data/2.5/weather?units=metric&lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + apiKey)
    .then(promise => promise.json())
    .then(data => console.log(data))
    .catch(Error => console.log(Error))
})