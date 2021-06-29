class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(resWeather){
    this.location.textContent = resWeather[0].city_name;
    this.desc.textContent = resWeather[0].weather.description;
    this.string.textContent = resWeather[0].temp;
    this.icon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${resWeather[0].weather.icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${resWeather[0].rh}`;
    this.feelsLike.textContent = `Feels Like: ${resWeather[0].app_temp}`;
    this.dewpoint.textContent = `Dew point: ${resWeather[0].dewpt}`;
    this.wind.textContent = `Wind: ${resWeather[0].wind_spd}`;
  }
}