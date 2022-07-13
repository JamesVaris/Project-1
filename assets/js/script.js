'https://api.openweathermap.org/data/2.5/onecall?lat={latitudeInput}&lon=${longitudeInput}&exclude=minutely&appid=5a3e5c6425af938a10da7df3e6ee7a82'


//functions
var getRepoName = function (){
    
}

var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var heightInput = document.querySelector("#height");
var weightInput = document.querySelector("#weight");
var calculateButton = document.querySelector("#calculate");
var latitudeInput = document.querySelector("#lat");
var longitudeInput = document.querySelector("#long");
var retrieveButton = document.querySelector("#retrieve");
var weather = document.getElementsByClassName("weatherInfo")
var weatherH1 = document.createElement("h3");
var weatherH1P = document.createElement("p");
var weatherH2 = document.createElement("h3");
var weatherH2P = document.createElement("p");

calculateButton.addEventListener("click", function(event) {
  event.preventDefault();
  var BMI = "https://github.com/JHiltunen/BMI-API/app/query?weight=${weightInput}&height=${heightInput}";
  // create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    height: heightInput.value.trim(),
    weight: weightInput.value.trim()
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));
  
});

retrieveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var local = 'https://api.openweathermap.org/data/2.5/onecall?lat={latitudeInput}&lon=${longitudeInput}&exclude=minutely,daily&appid=5a3e5c6425af938a10da7df3e6ee7a82'
    var location = {
        latitude: latitudeInput.value.trim(),
        longitude: longitudeInput.value.trim()
    };

    localStorage.setItem("location", JSON.stringify(location));

    weatherH1.textContent = "Current Weather";
    weather.appendChild(weatherH1);
    weatherH1P.textContent = local.current.main();
    weather.appendChild(weatherH1P);
    weatherH2.textContent = "";
  


});