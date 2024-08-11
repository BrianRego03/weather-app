class weatherInfo{
    constructor(location,day,time,icon,temp,conditions,description,humidity,uvindex,moon,wind,
        visibility,pressure,sunrise,sunset,day1day,day1icon,day1temp,day1conditions,
        day2day,day2icon,day2temp,day2conditions,day3day,day3icon,day3temp,day3conditions
    ){
        this.location=location;
        this.day=day;
        this.time=time;

        this.icon=icon;
        this.temp=temp;
        this.conditions=conditions;

        this.description=description;

        this.humidity=humidity;
        this.uvindex=uvindex;
        this.moon=moon;
        this.wind=wind;
        this.visibility=visibility;
        this.pressure=pressure;
        this.sunrise=sunrise;
        this.sunset=sunset;

        this.day1day=day1day;
        this.day1icon=day1icon;
        this.day1temp=day1temp;
        this.day1conditions=day1conditions;

        this.day2day=day2day;
        this.day2icon=day2icon;
        this.day2temp=day2temp;
        this.day2conditions=day2conditions;

        this.day3day=day3day;
        this.day3icon=day3icon;
        this.day3temp=day3temp;
        this.day3conditions=day3conditions;


    }


}



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