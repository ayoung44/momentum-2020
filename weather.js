const weather = document.querySelector(".js-weather");
const API_KEY = "f637d13ead5a3a53e519b4e3bd1c57e9";
const COORDS = "coords";
// 좌표 

function getWeather(lat, lon) {
    // fetch : 데이터가져오기
    // https:// 넣고 ``백틱 사용
    // then : data 가 넘어왔을 때 
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        // console.log(response.json());
        return response.json()
    }).then(function(json) {
        // json is ready?
        // 데이터가 완전히 들어오면 then 함수를 실행한다.
        console.log(json);
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `🌡️ ${temp}° @ 🌏 ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    
}

    // 1. 좌표를 가져오는데 성공했을 때
function handleGeoSuccess(position) {
    // console.log(position);
    // console.log(position.coords.latitude);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        // 객체의 변수 이름, key가 같다면 생략 가능  
        // latitude: latitude,
        // longitude: longitude
        latitude,
        longitude
    };
    saveCoords(coordsObj);

    getWeather(latitude, longitude);
}
function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    // navigator API
    // getCurrentPosition() 인자 
    // 1. 좌표를 가져오는데 성공했을 때
    // 2. 실패
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null) {
        askForCoords();
    } else {
        // get weather
        const parseCoords = JSON.parse(loadedCoords);
        // console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();