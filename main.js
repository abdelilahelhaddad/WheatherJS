
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWheather);

document.getElementById('w-change-btn').addEventListener('click', (e) =>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

  storage.setLocationData(city, state);

  getWheather();

  $('lockModal').modal('hide');
})

function getWheather(){
  weather.getWheather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
