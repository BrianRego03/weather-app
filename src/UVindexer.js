
const UVbase=(index)=>{
    if(index<3){
        return 'UVgreen';
    }
    else if(index<7){
        return 'UVyellow';
    }else return 'UVred';
}

export {UVbase};