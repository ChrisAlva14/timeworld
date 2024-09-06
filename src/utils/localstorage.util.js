
const setReactiveBg = (value)=>{
    localStorage.setItem("ReactiveBg", value);
}

const getReactiveBg = ()=>{
    const value = localStorage.getItem("ReactiveBg");
    if(value=="true"){
        return true
    }
    return false
}

const setTimeFormat = (value)=> {
    localStorage.setItem("TwentyFourFormat", value);
}
const getTimeFormat = ()=>{
    const value = localStorage.getItem("TwentyFourFormat");
    if(value=="true"){
        return true
    }
    return false
}

export {
    setReactiveBg,
    getReactiveBg,
    setTimeFormat,
    getTimeFormat,
}