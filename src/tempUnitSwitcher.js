const addTempUnitSwitch=()=>{
    let contentSection=document.querySelector("#contentSection");
    let switchDiv=document.createElement("div");
    switchDiv.setAttribute("id","switchDivision");
    let celSwitch=document.createElement("button");
    celSwitch.setAttribute("id","celsius");
    celSwitch.innerText=`${String.fromCharCode(176)}C`
    let fahrSwitch=document.createElement("button");
    fahrSwitch.setAttribute("id","fahrenheit");
    fahrSwitch.innerText=`${String.fromCharCode(176)}F`
    switchDiv.appendChild(celSwitch);
    switchDiv.appendChild(fahrSwitch);
    contentSection.appendChild(switchDiv);
}

const celsiusGenerate=(num)=>{
    let numTemp=num-32;
    numTemp*=5;
    numTemp/=9;
    let numFinal=Math.round(numTemp * 100) / 100;
    return numFinal;
}

const fahrenheitGenerate=(num)=>{
    let numTemp=num;
    numTemp*=9;
    numTemp/=5;
    numTemp+=32;
    let numFinal=Math.round(numTemp * 100) / 100;
    return numFinal;

}

export {addTempUnitSwitch,celsiusGenerate,fahrenheitGenerate}