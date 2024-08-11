const backgroundGenerate=(num)=>{
    if(num>9&&num<16){
        return "dayBackground";
    }
    else if(num>=16&&num<19){
        return "duskBackground";
    }
    else if(num>=5&&num<=9){
        return "dawnBackground";
    }
    else return "nightBackground";
}

export {backgroundGenerate};