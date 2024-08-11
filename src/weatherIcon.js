import rainsnow from "./icons/rain-snow.png"
import clearday from "./icons/clear-day.png"
import clearnight from "./icons/clear-night.png"
import cloudy from "./icons/cloudy.png"
import fog from "./icons/fog.png"
import hail from "./icons/hail.png"
import partlyCloudyDay from "./icons/partly-cloudy-day.png"
import partlyCloudyNight from "./icons/partly-cloudy-night.png"
import rainSnowShowersDay from "./icons/rain-snow-showers-day.png"
import rainSnowShowersNight from "./icons/rain-snow-showers-night.png"
import rain from "./icons/rain.png"
import showersDay from "./icons/showers-day.png"
import showersNight from "./icons/showers-night.png"
import sleet from "./icons/sleet.png"
import snowShowersDay from "./icons/snow-showers-day.png"
import snowShowersNight from "./icons/snow-showers-night.png"
import snow from "./icons/snow.png"
import thunderRain from "./icons/thunder-rain.png"
import thunderShowersDay from "./icons/thunder-showers-day.png"
import thunderShowersNight from "./icons/thunder-showers-night.png"
import thunder from "./icons/thunder.png"
import wind from "./icons/wind.png"

const iconGenerate=(str)=>{
    let imgDiv=document.createElement('img')
    if(str==="rain-snow"){
        imgDiv.src=rainsnow;
        return imgDiv;
    }
    else if(str==="clear-day"){
        imgDiv.src=clearday;
        return imgDiv;
        
    }
    else if(str==="clear-night"){
        imgDiv.src=clearnight;
        return imgDiv;
        
    }
    else if(str==="cloudy"){
        imgDiv.src=cloudy;
        return imgDiv;
        
    }
    else if(str==="fog"){
        imgDiv.src=fog;
        return imgDiv;
    }
    else if(str==="hail"){
        imgDiv.src=hail;
        return imgDiv;
    }
    else if(str==="partly-cloudy-day"){
        imgDiv.src=partlyCloudyDay;
        return imgDiv;
    }
    else if(str==="partly-cloudy-night"){
        imgDiv.src=partlyCloudyNight;
        return imgDiv;
    }
    else if(str==="rain-snow-showers-day"){
        imgDiv.src=rainSnowShowersDay;
        return imgDiv;
    }
    else if(str==="rain-snow-showers-night"){
        imgDiv.src=rainSnowShowersNight;
        return imgDiv;
    }
    else if(str==="rain"){
        imgDiv.src=rain;
        return imgDiv;
    }
    else if(str==="showers-day"){
        imgDiv.src=showersDay;
        return imgDiv;
    }
    else if(str==="showers-night"){
        imgDiv.src=showersNight;
        return imgDiv;
    }
    else if(str==="sleet"){
        imgDiv.src=sleet;
        return imgDiv;
    }
    else if(str==="snow-showers-day"){
        imgDiv.src=snowShowersDay;
        return imgDiv;
    }
    else if(str==="snow-showers-night"){
        imgDiv.src=snowShowersNight;
        return imgDiv;
    }
    else if(str==="snow"){
        imgDiv.src=snow;
        return imgDiv;
    }
    else if(str==="thunder-rain"){
        imgDiv.src=thunderRain;
        return imgDiv;
    }
    else if(str==="thunder-showers-day"){
        imgDiv.src=thunderShowersDay;
        return imgDiv;
    }
    else if(str==="thunder-showers-night"){
        imgDiv.src=thunderShowersNight;
        return imgDiv;
    }
    else if(str==="thunder"){
        imgDiv.src=thunder;
        return imgDiv;
    }
    else if(str==="wind"){
        imgDiv.src=wind;
        return imgDiv;
    }

    

}

export {iconGenerate}