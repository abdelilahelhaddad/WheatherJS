//efb9ad2ed9f277fdae9a2de1f1d8c6c5
//api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
//05adeef99d0a4c98aefe80b87e9a3507
//https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY


class Weather{
  constructor(city, state){
    this.apiKey = '05adeef99d0a4c98aefe80b87e9a3507';
    this.city = city;
    this.state = state;
  }

  async getWheather(){
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&key=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.data
  }

  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}