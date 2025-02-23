

function next(){
    let container= document.querySelector('#container');
 
 
    container.innerHTML =`<div class="search">
  <input id="input" type="text" placeholder="type your city here :">
  <button onclick="getweather();"><i class="fa-solid fa-magnifying-glass-location"></i></button>
 </div><div class="output"> <div class="cstatus"><i class="fa-solid fa-cloud weathericon"></i></div>
    <h1 id="temperature">00 °C</h1>
    <h2 id="status" >status</h2>
    <h2 id="city" >my city</h2></div><div class="wandh"> <span class="humidity k"><i class="fa-solid fa-water weathericon"></i>humidity <br> 0%</span>
  <div class="windspeed k"><i class="fa-solid fa-wind weathericon"></i>windspeed <br>  0 km/h</div></div> `;
}



async function getweather() {
    let container= document.querySelector('#container');
    let ICON = document.querySelector('.cstatus');
let temperature = document.querySelector('#temperature');
let city = document.querySelector('#city');
let ktatus = document.querySelector('#status');
let humidity = document.querySelector('.humidity');
let windspeed = document.querySelector('.windspeed');
let userid = "eaab9d06bbf44df9f6493db04d6fbb10";
let country = document.querySelector('#input');
let weatherurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&";

let cvalue = country.value;
    try{
        let m = await fetch(weatherurl +`q=${cvalue}`+`&appid=${userid}`);
        let data = await m.json();
        let status =data.weather[0].main;
    
        switch (status) {
             case 'Clear': ICON.innerHTML =`<i class="fa-solid fa-cloud-sun weathericon"></i>`,
             container.classList='container background1';
              break; 
             case 'Clouds': ICON.innerHTML =`<i class="fa-solid fa-cloud-meatball weathericon"></i>`,
             container.classList='container background2';
              break; 
             case 'Haze': ICON.innerHTML =`<i class="fa-solid fa-smog weathericon"></i>`,
             container.classList='container background3';
              break; 
             case 'Rain': ICON.innerHTML =`<i class="fa-solid fa-cloud-showers-heavy weathericon"></i>`,
             container.classList='container background4';
              break; 
             case 'Smoke':ICON.innerHTML =`<i class="fa-solid fa-smog weathericon"></i>`,
             container.classList='container background5';
              break;
              default:ICON.innerHTML =`<i class="fa-solid fa-cloud-sun weathericon"></i>`,
              container.classList='container background6';
             }
        let tempdata =data.main.temp ;
    
    
        temperature.innerText = `${tempdata}°C`;
        city.innerText = data.name;
        ktatus.innerHTML =status;
        humidity.innerHTML =`<i class="fa-solid fa-water weathericon"></i>humidity <br>${data.main.humidity} %`;
        windspeed.innerHTML =`<i class="fa-solid fa-wind weathericon"></i>windspeed <br>${data.wind.speed} km/h`;
        country.value ='';
    }catch(err){
        alert("please enter correct city name...");
    }
   
    

};