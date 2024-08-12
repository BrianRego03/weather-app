import { UVbase } from "./UVindexer";
import { moonphase,moonSVGgenerate } from "./moonphaser";
import { iconGenerate } from "./weatherIcon";
import { backgroundGenerate } from "./backgroundpicker";


const displayPage=(obj)=>{
    
    let contentSection=document.querySelector("#contentSection");

    let searchBtn=document.querySelector("#searchButton");
    searchBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title><path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>`
    

    let cityDiv=document.createElement("div");
    cityDiv.innerText=obj.location;
    cityDiv.setAttribute("id","cityDivision");
    contentSection.appendChild(cityDiv);

    let todayDiv=document.createElement("div");
    todayDiv.innerText=(obj.day);
    todayDiv.setAttribute("id","todayDivision");
    contentSection.appendChild(todayDiv);

    let mainTempDiv=document.createElement("div");
    mainTempDiv.setAttribute("id","mainTempDivision");
    contentSection.appendChild(mainTempDiv);

    let iconDiv=document.createElement("div");
    iconDiv.setAttribute("id","iconDivision");
    iconDiv.appendChild(iconGenerate(obj.icon));
    mainTempDiv.appendChild(iconDiv);

    let tempDiv=document.createElement("div");
    tempDiv.setAttribute("id","tempDivision");
    tempDiv.innerText=`${obj.temp}`+`${String.fromCharCode(176)}`+`C`;
    mainTempDiv.appendChild(tempDiv);

    let conditionDiv=document.createElement("div");
    conditionDiv.setAttribute("id","conditionDivision");
    conditionDiv.innerText=obj.conditions;
    mainTempDiv.appendChild(conditionDiv);

    let secondTempDiv=document.createElement("div");
    secondTempDiv.setAttribute("id","secondTempDivision");
    contentSection.appendChild(secondTempDiv);

    let humidDiv=document.createElement("div");
    humidDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(humidDiv);

    let humidTitleSection=document.createElement("div");
    humidTitleSection.setAttribute("class","secondTempTitle")
    let humidTitle=document.createElement("div");
    let humidSymbol=document.createElement("div");
    humidSymbol.setAttribute("class","secondTempSVG");
    humidTitle.innerText="Humidity";
    humidSymbol.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>water-percent</title><path fill="currentColor" d="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z" /></svg>`;
    humidTitleSection.appendChild(humidTitle);
    humidTitleSection.appendChild(humidSymbol);

    let humidNumber=document.createElement("div");
    humidNumber.setAttribute("class","secondTempNumber");
    humidNumber.innerText=`${obj.humidity}%`;
    humidDiv.appendChild(humidTitleSection);
    humidDiv.appendChild(humidNumber);



    let UVDiv=document.createElement("div");
    UVDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(UVDiv);

    let UVTitleSection=document.createElement("div");
    UVTitleSection.setAttribute("class","secondTempTitle")
    let UVTitle=document.createElement("div");
    let UVSymbol=document.createElement("div");
    UVSymbol.setAttribute("class","secondTempSVG");
    UVTitle.innerText="UV Index";
    UVSymbol.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>emoticon-cool-outline</title><path fill="currentColor" d="M19,10C19,11.38 16.88,12.5 15.5,12.5C14.12,12.5 12.75,11.38 12.75,10H11.25C11.25,11.38 9.88,12.5 8.5,12.5C7.12,12.5 5,11.38 5,10H4.25C4.09,10.64 4,11.31 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,11.31 19.91,10.64 19.75,10H19M12,4C9.04,4 6.45,5.61 5.07,8H18.93C17.55,5.61 14.96,4 12,4M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" /></svg>`;
    UVTitleSection.appendChild(UVTitle);
    UVTitleSection.appendChild(UVSymbol);
    
    let UVNumber=document.createElement("div");
    UVNumber.setAttribute("class","secondTempNumber");
    UVNumber.setAttribute("id","uvNum");
    UVNumber.innerText=obj.uvindex;
    let UVclass=UVbase(+(obj.uvindex));
    UVNumber.classList.add(UVclass);
    UVDiv.appendChild(UVTitleSection);
    UVDiv.appendChild(UVNumber);



    let moonDiv=document.createElement("div");
    moonDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(moonDiv);

    let moonTitleSection=document.createElement("div");
    moonTitleSection.setAttribute("class","secondTempTitle");    
    let moonSymbol=document.createElement("div");
    moonSymbol.setAttribute("id","moonStyle");
    moonTitleSection.innerText=moonphase(obj.moon);
    moonSymbol.innerHTML=moonSVGgenerate(obj.moon);
    moonDiv.appendChild(moonSymbol);
    moonDiv.appendChild(moonTitleSection);



    let windDiv=document.createElement("div");
    windDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(windDiv);

    let windTitleSection=document.createElement("div");
    windTitleSection.setAttribute("class","secondTempTitle")
    let windTitle=document.createElement("div");
    let windSymbol=document.createElement("div");
    windSymbol.setAttribute("class","secondTempSVG");
    windTitle.innerText="Wind speed";
    windSymbol.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-windy</title><path fill="currentColor" d="M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z" /></svg>`;
    windTitleSection.appendChild(windTitle);
    windTitleSection.appendChild(windSymbol);
    
    let windNumber=document.createElement("div");
    windNumber.setAttribute("class","secondTempNumber");
    windNumber.innerText=`${obj.wind}kph`;
    windDiv.appendChild(windTitleSection);
    windDiv.appendChild(windNumber);





    let visibleDiv=document.createElement("div");
    visibleDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(visibleDiv);

    let visibleTitleSection=document.createElement("div");
    visibleTitleSection.setAttribute("class","secondTempTitle")
    let visibleTitle=document.createElement("div");
    let visibleSymbol=document.createElement("div");
    visibleSymbol.setAttribute("class","secondTempSVG");
    visibleTitle.innerText="Visibility";
    visibleSymbol.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye</title><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" /></svg>`;
    visibleTitleSection.appendChild(visibleTitle);
    visibleTitleSection.appendChild(visibleSymbol);
    
    let visibleNumber=document.createElement("div");
    visibleNumber.setAttribute("class","secondTempNumber");
    visibleNumber.innerText=`${obj.visibility}km`;
    visibleDiv.appendChild(visibleTitleSection);
    visibleDiv.appendChild(visibleNumber);





    let pressureDiv=document.createElement("div");
    pressureDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(pressureDiv);

    let pressureTitleSection=document.createElement("div");
    pressureTitleSection.setAttribute("class","secondTempTitle")
    let pressureTitle=document.createElement("div");
    let pressureSymbol=document.createElement("div");
    pressureSymbol.setAttribute("class","secondTempSVG");
    pressureTitle.innerText="Pressure";
    pressureSymbol.innerHTML=`<svg fill="#000000"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 185.421 185.421" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path fill="currentColor" d="M155.762,23.192c-5.23-12.101-17.528-20.058-31.432-20.058c-17.526,0-32,12.741-33.825,29.07 C77.769,33.331,67.75,43.953,67.75,56.843c0,13.017,10.154,23.763,23.206,24.675c0.218,0.042,0.439,0.063,0.663,0.063h63.166 c0.096,0,0.19-0.004,0.284-0.01c0.28,0.007,0.562,0.01,0.844,0.01c16.271,0,29.508-13.097,29.508-29.195 C185.422,36.239,172.059,23.119,155.762,23.192z M155.914,74.45c-0.326,0-0.649-0.007-0.97-0.021 c-0.054-0.004-0.108-0.004-0.162-0.004c-0.139,0-0.277,0.007-0.413,0.024H92.074c-0.089-0.01-0.176-0.017-0.265-0.024 c-9.493-0.48-16.927-8.204-16.927-17.582c0-10.025,8.702-18.021,18.829-17.582c0.973,0.045,1.924-0.324,2.627-0.996 c0.705-0.676,1.104-1.619,1.104-2.594c0-14.009,12.062-25.406,26.888-25.406c11.791,0,22.097,7.132,25.647,17.746 c0.526,1.57,2.074,2.622,3.719,2.417c0.73-0.07,1.469-0.104,2.218-0.104c12.339,0,22.377,9.897,22.377,22.063 C178.291,64.552,168.253,74.45,155.914,74.45z"></path> <path fill="currentColor" d="M87.669,120.192l5.042,5.042l12.607-12.606c0.669-0.669,1.045-1.574,1.045-2.521c0-0.947-0.376-1.852-1.045-2.521 L92.711,94.981l-5.042,5.042l6.519,6.519H0v7.132h94.188L87.669,120.192z"></path> <path fill="currentColor" d="M153.33,152.033l-5.042,5.042l6.519,6.519H60.619v7.132h94.188l-6.519,6.519l5.042,5.042l12.607-12.606 c0.669-0.669,1.045-1.574,1.045-2.521c0-0.947-0.376-1.852-1.045-2.521L153.33,152.033z"></path> <path fill="currentColor" d="M116.195,148.718l5.042,5.042l12.607-12.606c0.669-0.669,1.045-1.574,1.045-2.521s-0.376-1.852-1.045-2.521 l-12.607-12.606l-5.042,5.042l6.519,6.519H28.526v7.132h94.188L116.195,148.718z"></path> </g> </g> </g> </g></svg>`;
    pressureTitleSection.appendChild(pressureTitle);
    pressureTitleSection.appendChild(pressureSymbol);
    
    let pressureNumber=document.createElement("div");
    pressureNumber.setAttribute("class","secondTempNumber");
    pressureNumber.innerText=`${obj.pressure}mb`;
    pressureDiv.appendChild(pressureTitleSection);
    pressureDiv.appendChild(pressureNumber);



    let sunriseDiv=document.createElement("div");
    sunriseDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(sunriseDiv);

    let sunriseTitleSection=document.createElement("div");
    sunriseTitleSection.setAttribute("class","secondTempTitle")
    let sunriseTitle=document.createElement("div");
    let sunriseSymbol=document.createElement("div");
    sunriseSymbol.setAttribute("class","secondTempSVG");
    sunriseTitle.innerText="Sunrise";
    sunriseSymbol.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunset-up</title><path fill="currentColor" d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z" /></svg>`;
    sunriseTitleSection.appendChild(sunriseTitle);
    sunriseTitleSection.appendChild(sunriseSymbol);
    
    let sunriseNumber=document.createElement("div");
    sunriseNumber.setAttribute("class","secondTempNumber");
    sunriseNumber.innerText=obj.sunrise;
    sunriseDiv.appendChild(sunriseTitleSection);
    sunriseDiv.appendChild(sunriseNumber);



    let sunSetDiv=document.createElement("div");
    sunSetDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(sunSetDiv);

    let sunSetTitleSection=document.createElement("div");
    sunSetTitleSection.setAttribute("class","secondTempTitle")
    let sunSetTitle=document.createElement("div");
    let sunSetSymbol=document.createElement("div");
    sunSetSymbol.setAttribute("class","secondTempSVG");
    sunSetTitle.innerText="Sunset";
    sunSetSymbol.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunset</title><path fill="currentColor" d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M5,16H19A1,1 0 0,1 20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17A1,1 0 0,1 5,16M17,20A1,1 0 0,1 18,21A1,1 0 0,1 17,22H7A1,1 0 0,1 6,21A1,1 0 0,1 7,20H17M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7Z" /></svg>`;
    sunSetTitleSection.appendChild(sunSetTitle);
    sunSetTitleSection.appendChild(sunSetSymbol);
    
    let sunSetNumber=document.createElement("div");
    sunSetNumber.setAttribute("class","secondTempNumber");
    sunSetNumber.innerText=obj.sunset;
    sunSetDiv.appendChild(sunSetTitleSection);
    sunSetDiv.appendChild(sunSetNumber);





    let finalTempDiv=document.createElement("div");
    finalTempDiv.setAttribute("id","finalTempDivision");
    contentSection.appendChild(finalTempDiv);

    let day1Div=document.createElement("div");
    day1Div.setAttribute("class","finalTempChildren");
    finalTempDiv.appendChild(day1Div);
    let day1Day=document.createElement("div");
    day1Day.setAttribute("class","secondTempTitle");
    day1Day.innerText=obj.day1day;
    day1Div.appendChild(day1Day);

    let day1Icon=document.createElement("div");
    day1Icon.setAttribute("class","finalSVG");
    day1Icon.appendChild(iconGenerate(obj.day1icon));
    day1Div.appendChild(day1Icon);

    let day1Temp=document.createElement("div");
    day1Temp.setAttribute("class","secondTempTitle");
    day1Temp.innerText=`${obj.day1temp}`+`${String.fromCharCode(176)}`+`C`;
    day1Div.appendChild(day1Temp);

    let day1Condition=document.createElement("div");
    day1Condition.setAttribute("class","secondTempTitle");
    day1Condition.innerText=obj.day1conditions;
    day1Div.appendChild(day1Condition);

    let day2Div=document.createElement("div");
    day2Div.setAttribute("class","finalTempChildren");
    finalTempDiv.appendChild(day2Div);
    let day2Day=document.createElement("div");
    day2Day.setAttribute("class","secondTempTitle");
    day2Day.innerText=obj.day2day;
    day2Div.appendChild(day2Day);

    let day2Icon=document.createElement("div");
    day2Icon.setAttribute("class","finalSVG");
    day2Icon.appendChild(iconGenerate(obj.day2icon));
    day2Div.appendChild(day2Icon);

    let day2Temp=document.createElement("div");
    day2Temp.setAttribute("class","secondTempTitle");
    day2Temp.innerText=`${obj.day2temp}`+`${String.fromCharCode(176)}`+`C`;
    day2Div.appendChild(day2Temp);

    let day2Condition=document.createElement("div");
    day2Condition.setAttribute("class","secondTempTitle");
    day2Condition.innerText=obj.day2conditions;
    day2Div.appendChild(day2Condition);

    let day3Div=document.createElement("div");
    day3Div.setAttribute("class","finalTempChildren");
    finalTempDiv.appendChild(day3Div);
    let day3Day=document.createElement("div");
    day3Day.setAttribute("class","secondTempTitle");
    day3Day.innerText=obj.day3day;
    day3Div.appendChild(day3Day);

    let day3Icon=document.createElement("div");
    day3Icon.setAttribute("class","finalSVG");
    day3Icon.appendChild(iconGenerate(obj.day3icon));
    day3Div.appendChild(day3Icon);

    let day3Temp=document.createElement("div");
    day3Temp.setAttribute("class","secondTempTitle");
    day3Temp.innerText=`${obj.day3temp}`+`${String.fromCharCode(176)}`+`C`;
    day3Div.appendChild(day3Temp);

    let day3Condition=document.createElement("div");
    day3Condition.setAttribute("class","secondTempTitle");
    day3Condition.innerText=obj.day3conditions;
    day3Div.appendChild(day3Condition);



    let bodySection=document.querySelector("body");
    bodySection.setAttribute("class",backgroundGenerate(16));







    


    
    


}

export {displayPage};