const displayPage=(obj)=>{
    
    let contentSection=document.querySelector("#contentSection");

    

    let cityDiv=document.createElement("div");
    cityDiv.innerText="mangalore"
    cityDiv.setAttribute("id","cityDivision");
    contentSection.appendChild(cityDiv);

    let todayDiv=document.createElement("div");
    todayDiv.innerText="11th August,2024";
    todayDiv.setAttribute("id","todayDivision");
    contentSection.appendChild(todayDiv);

    let mainTempDiv=document.createElement("div");
    mainTempDiv.setAttribute("id","mainTempDivision");
    contentSection.appendChild(mainTempDiv);

    let iconDiv=document.createElement("div");
    iconDiv.setAttribute("id","iconDivision");
    iconDiv.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.32 91.33"><title>clear dayAsset 1set1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M87.15,46.31A3,3,0,0,1,84,48.11c-2.48-.08-5,0-7.45,0a2.43,2.43,0,1,1,0-4.85c2.51,0,5,0,7.53,0a2.93,2.93,0,0,1,3.1,1.8Z"/><path d="M45,87.15A3,3,0,0,1,43.21,84c.09-2.48,0-5,0-7.45a2.43,2.43,0,1,1,4.85,0c0,2.48-.06,5,0,7.45a2.94,2.94,0,0,1-1.8,3.18Z"/><path d="M45.65,23.14A22.52,22.52,0,1,1,23.14,45.62,22.51,22.51,0,0,1,45.65,23.14ZM63.33,45.66A17.67,17.67,0,1,0,45.65,63.33,17.74,17.74,0,0,0,63.33,45.66Z"/><path d="M64.8,67.39a2.68,2.68,0,0,1,1.48-2.2,2.21,2.21,0,0,1,2.64.32q3.15,3,6.18,6.17a2.43,2.43,0,0,1-3.45,3.4q-3.11-3-6.11-6.13A5.36,5.36,0,0,1,64.8,67.39Z"/><path d="M26.52,23.88A2.65,2.65,0,0,1,25,26.15a2.23,2.23,0,0,1-2.64-.34q-3.15-3-6.18-6.18a2.42,2.42,0,0,1,3.42-3.42q3.15,3,6.17,6.19A5,5,0,0,1,26.52,23.88Z"/><path d="M66.05,26.05A2.4,2.4,0,0,1,65.16,25a2.47,2.47,0,0,1,.5-2.74q3-3.08,6-6a2.42,2.42,0,0,1,3.42,3.42c-2,2.1-4.09,4.15-6.18,6.17a2,2,0,0,1-.57.36A2.5,2.5,0,0,1,66.05,26.05Z"/><path d="M23.92,64.8a2.68,2.68,0,0,1,2.21,1.47,2.21,2.21,0,0,1-.3,2.64c-2,2.12-4.12,4.21-6.24,6.24a2.38,2.38,0,0,1-3.3-.18,2.41,2.41,0,0,1-.05-3.31q3-3.1,6.13-6.11A5.44,5.44,0,0,1,23.92,64.8Z"/><path d="M48.09,10.81c0,1.38,0,2.76,0,4.13a2.43,2.43,0,1,1-4.85,0q0-4.12,0-8.26a2.43,2.43,0,1,1,4.85,0C48.1,8.06,48.09,9.44,48.09,10.81Z"/><path d="M10.76,48.09h-4a2.43,2.43,0,1,1,0-4.85c2.73,0,5.45,0,8.18,0a2.43,2.43,0,1,1,0,4.85Z"/><path d="M90.08,26.15a3.44,3.44,0,0,1-2.49,3.46c-2.68,1.13-5.29,2.4-7.94,3.61a2.85,2.85,0,1,1-2.36-5.16c2.67-1.23,5.37-2.39,8-3.69a3.4,3.4,0,0,1,4.16.4Z"/><path d="M65.18,90.09a3.47,3.47,0,0,1-3.47-2.5c-1.12-2.68-2.4-5.29-3.6-7.93a2.85,2.85,0,1,1,5.16-2.37c1.21,2.64,2.36,5.31,3.65,7.91a3.45,3.45,0,0,1-.37,4.26Z"/><path d="M76.59,59.45a3.12,3.12,0,0,1,.5-3.06,2.58,2.58,0,0,1,3-1q4.83,1.68,9.59,3.55a2.84,2.84,0,0,1-2,5.29q-4.77-1.68-9.49-3.54A6.37,6.37,0,0,1,76.59,59.45Z"/><path d="M14.7,31.82A3.12,3.12,0,0,1,14.22,35a2.62,2.62,0,0,1-3,.92q-4.82-1.7-9.58-3.56a2.84,2.84,0,0,1,2-5.3c3.21,1.12,6.4,2.32,9.58,3.57A6.45,6.45,0,0,1,14.7,31.82Z"/><path d="M57.79,14.88a2.85,2.85,0,0,1-1.47-.69A2.91,2.91,0,0,1,55.51,11Q57.18,6.32,59,1.67a2.83,2.83,0,0,1,5.3,2C63.18,6.85,62,10,60.73,13.21a2.27,2.27,0,0,1-.43.66A2.87,2.87,0,0,1,57.79,14.88Z"/><path d="M31.86,76.6a3.14,3.14,0,0,1,3.07.48,2.59,2.59,0,0,1,1,3q-1.7,4.88-3.59,9.67A2.83,2.83,0,0,1,27,87.64q1.68-4.78,3.54-9.49A6.6,6.6,0,0,1,31.86,76.6Z"/><path d="M31.27,7.43c.67,1.46,1.35,2.92,2,4.39a2.84,2.84,0,1,1-5.17,2.33c-1.35-2.92-2.7-5.85-4-8.78A2.84,2.84,0,1,1,29.26,3C29.94,4.5,30.6,6,31.27,7.43Z"/><path d="M9.74,65.24c-1.44.66-2.87,1.33-4.31,2a2.84,2.84,0,1,1-2.37-5.15q4.33-2,8.69-4a2.84,2.84,0,1,1,2.38,5.15C12.67,63.91,11.2,64.57,9.74,65.24Z"/></g></g></svg>`
    mainTempDiv.appendChild(iconDiv);

    let tempDiv=document.createElement("div");
    tempDiv.setAttribute("id","tempDivision");
    tempDiv.innerText="39.5"+String.fromCharCode(176)+"C";
    mainTempDiv.appendChild(tempDiv);

    let conditionDiv=document.createElement("div");
    conditionDiv.setAttribute("id","conditionDivision");
    conditionDiv.innerText="Sunny,partly cloudy";
    mainTempDiv.appendChild(conditionDiv);


}

export {displayPage};