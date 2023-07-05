const API_KEY = "c76f683ad71d12f45eb1ab16bdf4c320";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      });
}
function onGeoError(){
    alert("위치를 찾을수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);


