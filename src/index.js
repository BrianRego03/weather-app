

async function getWeather(){
    // const response= await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mangalore%20ka?unitGroup=metric&key=7QBLZ6KGED9PMRDZ8D5T267RD&contentType=json",{mode:"cors"})

    const weatherData=await response.json();

    console.log(weatherData);
    console.log(weatherData.resolvedAddress);
    console.log(weatherData.currentConditions.datetime)

    console.log(weatherData.currentConditions.icon);
    console.log(weatherData.currentConditions.temp);
    console.log(weatherData.currentConditions.conditions);
    
    console.log(weatherData.description);

    console.log(weatherData.currentConditions.humidity);
    console.log(weatherData.currentConditions.uvindex);
    console.log(weatherData.currentConditions.moonphase);
    console.log(weatherData.currentConditions.windspeed);
    console.log(weatherData.currentConditions.visibility);
    console.log(weatherData.currentConditions.pressure);
    console.log(weatherData.currentConditions.sunrise);
    console.log(weatherData.currentConditions.sunset);

    
    console.log(weatherData.days[1].datetime);    
    console.log(weatherData.days[1].icon);
    console.log(weatherData.days[1].temp);
    console.log(weatherData.days[1].conditions);

    console.log(weatherData.days[2].datetime);    
    console.log(weatherData.days[2].icon);
    console.log(weatherData.days[2].temp);
    console.log(weatherData.days[2].conditions);

    console.log(weatherData.days[3].datetime);    
    console.log(weatherData.days[3].icon);
    console.log(weatherData.days[3].temp);
    console.log(weatherData.days[3].conditions);


}

getWeather();