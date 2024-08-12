import './style.css';
import { displayPage } from './loadDivisions';
import { contentClear,loadingScreen } from './clearContent';
import { addTempUnitSwitch, celsiusGenerate, fahrenheitGenerate } from './tempUnitSwitcher';

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

const dayData= new weatherInfo();
let unitSwitch="C";


async function getWeather(value){
    contentClear();
    loadingScreen();
    const response= await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+ value +"?unitGroup=metric&key=7QBLZ6KGED9PMRDZ8D5T267RD&contentType=json",{mode:"cors"})

    const weatherData=await response.json();
    console.log(dayData);

    console.log(weatherData);
    dayData.location=weatherData.resolvedAddress;
    dayData.time=weatherData.currentConditions.datetime;
    dayData.day=weatherData.days[0].datetime; 

    dayData.icon=weatherData.currentConditions.icon;
    dayData.temp=weatherData.currentConditions.temp;
    dayData.conditions=weatherData.currentConditions.conditions;
    
    dayData.description=weatherData.description;

    dayData.humidity=weatherData.currentConditions.humidity;
    dayData.uvindex=weatherData.currentConditions.uvindex;
    dayData.moon=weatherData.currentConditions.moonphase;
    dayData.wind=weatherData.currentConditions.windspeed;
    dayData.visibility=weatherData.currentConditions.visibility;
    dayData.pressure=weatherData.currentConditions.pressure;
    dayData.sunrise=weatherData.currentConditions.sunrise;
    dayData.sunset=weatherData.currentConditions.sunset;

    
    dayData.day1day=weatherData.days[1].datetime;    
    dayData.day1icon=weatherData.days[1].icon;
    dayData.day1temp=weatherData.days[1].temp;
    dayData.day1conditions=weatherData.days[1].conditions;

    dayData.day2day=weatherData.days[2].datetime;    
    dayData.day2icon=weatherData.days[2].icon;
    dayData.day2temp=weatherData.days[2].temp;
    dayData.day2conditions=weatherData.days[2].conditions;

    dayData.day3day=weatherData.days[3].datetime;    
    dayData.day3icon=weatherData.days[3].icon;
    dayData.day3temp=weatherData.days[3].temp;
    dayData.day3conditions=weatherData.days[3].conditions;
    contentClear();
    displayPage(dayData,unitSwitch);
    addTempUnitSwitch();
    tempSwitchActivate();
    


}

const tempSwitchActivate=()=>{
    const celSwitch=document.getElementById("celsius");
    const fahrSwitch=document.getElementById("fahrenheit");
    if(unitSwitch==="C"){
        celSwitch.setAttribute("class","selected");
        fahrSwitch.setAttribute("class","greyed");

    }
    else {
        celSwitch.setAttribute("class","greyed");
        fahrSwitch.setAttribute("class","selected");
    }

    celSwitch.addEventListener("click",()=>{
        celSwitch.setAttribute("class","selected");
        fahrSwitch.setAttribute("class","greyed");
        if(unitSwitch==="C"){
            return;
        }
        unitSwitch="C";
        dayData.temp=celsiusGenerate(dayData.temp);
        dayData.day1temp=celsiusGenerate(dayData.day1temp);
        dayData.day2temp=celsiusGenerate(dayData.day2temp);
        dayData.day3temp=celsiusGenerate(dayData.day3temp);
        contentClear();
        displayPage(dayData,unitSwitch);
        addTempUnitSwitch();
        tempSwitchActivate();
    })

    fahrSwitch.addEventListener("click",()=>{
        celSwitch.setAttribute("class","greyed");
        fahrSwitch.setAttribute("class","selected");
        if(unitSwitch==="F"){
            return;
        }
        unitSwitch="F";
        dayData.temp=fahrenheitGenerate(dayData.temp);
        dayData.day1temp=fahrenheitGenerate(dayData.day1temp);
        dayData.day2temp=fahrenheitGenerate(dayData.day2temp);
        dayData.day3temp=fahrenheitGenerate(dayData.day3temp);
        contentClear();
        displayPage(dayData,unitSwitch);
        addTempUnitSwitch();
        tempSwitchActivate();
    })

}

const searchBtn=document.getElementById("searchButton");
const searchInput=document.getElementById("searchInput");

searchBtn.addEventListener("click",()=>{
    getWeather(searchInput.value);

})

getWeather("Mangalore KA");
