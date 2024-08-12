let contentSection=document.querySelector("#contentSection");

const contentClear=()=>{
    
    while (contentSection.hasChildNodes()) {
        contentSection.removeChild(contentSection.firstChild);
        }

}

const loadingScreen=()=>{
    const loadingDiv=document.createElement("div");
    loadingDiv.setAttribute("id","loadingDivision");
    loadingDiv.innerText="Loading..."
    contentSection.appendChild(loadingDiv);

}

export {contentClear,loadingScreen}