
const moonphase=(num)=>{
    if(num===0){
        return "new moon";
    }
    else if(num>0&&num<0.25){
        return 'waxing crescent';
    }
    else if(num===0.25){
        return "first quarter";
    }
    else if(num>0.25&&num<0.5){
        return "waxing gibbous";
    }
    else if (num===0.5){
        return "full moon";
    }
    else if(num>0.5&&num<0.75){
        return "waning gibbous";
    }
    else if (num===0.75){
        return "last quarter";
    }
    else return "waning crescent"

}

const moonSVGgenerate=(num)=>{
    if(num===0){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-new</title><path fill="currentColor" d="M12 20A8 8 0 1 1 20 12A8 8 0 0 1 12 20M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z" /></svg>`;
    }
    else if(num>0&&num<0.25){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-waxing-crescent</title><path fill="currentColor" d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z" /></svg>`;
    }
    else if(num===0.25){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-first-quarter</title><path fill="currentColor" d="M12 2V22A10 10 0 0 0 12 2Z" /></svg>`;
    }
    else if(num>0.25&&num<0.5){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-waxing-gibbous</title><path fill="currentColor" d="M6 12C6 7.5 7.93 3.26 12 2A10 10 0 0 1 12 22C7.93 20.74 6 16.5 6 12Z" /></svg>`;
    }
    else if (num===0.5){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-full</title><path fill="currentColor" d="M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z" /></svg>`;
    }
    else if(num>0.5&&num<0.75){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-waning-gibbous</title><path fill="currentColor" d="M18 12C18 7.5 16.08 3.26 12 2A10 10 0 0 0 12 22C16.08 20.74 18 16.5 18 12Z" /></svg>`;
    }
    else if (num===0.75){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-last-quarter</title><path fill="currentColor" d="M12 2A10 10 0 0 0 12 22Z" /></svg>`;
    }
    else return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-waning-crescent</title><path fill="currentColor" d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" /></svg>`;

}

export {moonphase,moonSVGgenerate};