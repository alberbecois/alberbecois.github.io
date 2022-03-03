let weather = {
    apiKey: "0c3f554666e84633449ac7415652fca1",
    fetchWeather: function () {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=metric&lang=Fr&appid=" + this.apiKey
      )
        .then((response) => {return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Température à Montréal";
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".weather").classList.remove("loading");
      
    },
    
  };
  weather.fetchWeather("Montreal");
